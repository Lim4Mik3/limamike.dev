export type TreeNodeType = 'LOCATION' | 'SUB-LOCATION' | 'ASSET' | 'SUB-ASSET' | 'COMPONENT';
export type NodeStatus = 'operating' | 'alert' | 'off';

export class TreeNode {
  public children: TreeNode[] = [];

  constructor(
    public id: string,
    public name: string,
    public type: TreeNodeType,
    public status?: NodeStatus,
    public sensorType?: string,
    public payload?: any
  ) { }

  addChild(node: TreeNode) {
    this.children.push(node);
  }
}