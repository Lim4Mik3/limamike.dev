import { NodeStatus } from "../entities/TreeNode";

export interface CompanyAsset {
  id:         string;
  name:       string;
  parentId:   string | null;
  sensorId?:   string;
  sensorType: string | null;
  status:     NodeStatus | null;
  gatewayId:  string;
  locationId: string | null;
 }
