import { GetCompanyLocationsService } from "@/application/data/services/get-company-locations.service";
import { CompanyAsset } from "../models/CompanyAsset";
import { CompanyLocation } from "../models/CompanyLocation";
import { TreeNode, TreeNodeType } from "./TreeNode";
import { GetCompanyAssetsService } from "@/application/data/services/get-company-assets.service";

export class TreeBuilder {
  locationsData: CompanyLocation[] = [];
  assetsData: CompanyAsset[] = [];
  locationMap: { [key: string]: TreeNode };
  assetMap: { [key: string]: TreeNode };
  rootNodes: TreeNode[];

  constructor(private companyId: string) {
    this.locationMap = {};
    this.assetMap = {};
    this.rootNodes = [];
    this.companyId = companyId;
  }

  private async fetchData() {
    try {
      const [locations, assets] = await Promise.all([
        GetCompanyLocationsService({ companyId: this.companyId }),
        GetCompanyAssetsService({ companyId: this.companyId })
      ]);
  
      if (!locations[0] || locations[1]) {
        throw new Error("Falha ao buscar a localização");
      }

      if (!assets[0] || assets[1]) {
        throw new Error("Falha ao buscar os ativos");
      }

      this.locationsData = locations[0];
      this.assetsData = assets[0];
    } catch (error) {
      throw error;
    }
  }

  async buildTree(): Promise<TreeNode[]> {
    await this.fetchData();

    this.processLocations();
    this.processAssets();

    return this.rootNodes;
  }

  processLocations(): void {
    this.locationsData.forEach((location) => {
      const type: TreeNodeType = location.parentId ? 'SUB-LOCATION' : 'LOCATION';
      const node = new TreeNode(location.id, location.name, type);
      this.locationMap[location.id] = node;
    });

    this.locationsData.forEach((location) => {
      const node = this.locationMap[location.id];
      if (location.parentId) {
        const parentNode = this.locationMap[location.parentId];
        if (parentNode) {
          parentNode.addChild(node);
        }
      } else {
        this.rootNodes.push(node);
      }
    });
  }

  processAssets(): void {
    this.assetsData.forEach((asset) => {
      let node: TreeNode;
      if (asset.sensorType) {
        node = new TreeNode(asset.id, asset.name, 'COMPONENT');
        node.sensorType = asset.sensorType || undefined;
        node.status = asset.status || undefined;
        node.payload = asset;
      } else if (asset.parentId) {
        node = new TreeNode(asset.id, asset.name, 'SUB-ASSET');
      } else {
        node = new TreeNode(asset.id, asset.name, 'ASSET');
      }
      this.assetMap[asset.id] = node;
    });

    this.assetsData.forEach((asset) => {
      const node = this.assetMap[asset.id];
      if (asset.parentId) {
        const parentNode = this.assetMap[asset.parentId];
        if (parentNode) {
          parentNode.addChild(node);
        }
      } else if (asset.locationId) {
        const parentNode = this.locationMap[asset.locationId];
        if (parentNode) {
          parentNode.addChild(node);
        }
      } else {
        this.rootNodes.push(node);
      }
    });
  }
}
