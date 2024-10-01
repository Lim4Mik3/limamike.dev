import React from "react";

import { TreeNode } from "@/domain/entities/TreeNode";
import { StatusBadge } from "../StatusBadge";
import { cn } from "@/utils/cn";
import { useGlobalStore } from "@/application/stores/global";
import { CompanyAsset } from "@/domain/models/CompanyAsset";

type Props = { 
  node: TreeNode; 
  depth: number;
  isExpanded: boolean
}

const getNodeIcon = (type: string, isNodeSelected?: boolean) => {
  switch (type) {
    case 'LOCATION':
    case 'SUB-LOCATION':
      return <img src="/location.png" aria-hidden />;
    case 'ASSET':
    case 'SUB-ASSET':
      return <img src="/asset.png" aria-hidden />;
    default:
      return <img src={isNodeSelected ? "/component-white.png" : "/component.png"} aria-hidden />;
  }
};

export const Node = React.memo(({ 
  node, 
  depth, 
  isExpanded 
}: Props) => {
  const { setViewComponent, viewComponent } = useGlobalStore()

  const hasChildren = node.children && node.children.length > 0;
  const isComponent = node.type === 'COMPONENT';

  const handleNodeClick = () => {
    if (isComponent && node.id !== viewComponent?.id) {
      setViewComponent(node.payload as CompanyAsset);
    }
  }

  const isNodeSelected = viewComponent?.id === node.id;
  
  return (
    <div 
      style={{ marginLeft: `${depth * 24}px` }} 
      className={cn("flex items-center gap-1 py-1 px-1", {
        "bg-blue-200": isNodeSelected
      })}
      onClick={handleNodeClick}
    >
      {hasChildren && (
        <img src="/arrow.png" aria-hidden className={cn("w-3 h-3 mr-1", {
          "animate-rotate90": isExpanded
        })} />
      )}

      {getNodeIcon(node.type, isNodeSelected)}

      <span className={cn("flex ml-4", {
        "text-white": isNodeSelected
      })}>
        { 
          isComponent
            ? node.name.split(' - ')[0]
            : node.name
        }
      </span>

      <StatusBadge status={node.status ?? null} type="COMPONENT" />
    </div>
  );
});

Node.displayName = 'Node'