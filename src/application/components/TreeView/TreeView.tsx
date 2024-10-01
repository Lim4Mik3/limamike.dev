'use client';

import { Node } from "./Node";
import React, { useState, useMemo } from "react";
import { TreeNode } from "@/domain/entities/TreeNode";
import { List, ListRowProps, AutoSizer } from 'react-virtualized';
import { useGetAssetsTree } from "@/application/hooks/useGetAssetsTree";
import { cn } from "@/utils/cn";
import { useGlobalStore } from "@/application/stores/global";

const VISIBLE_ITEMS = 50; 

export function TreeView() {
  const result = useGetAssetsTree();
  const { filterByTerm, filterEnergies, filterCriticals } = useGlobalStore();

  const hasFilter = !!filterByTerm || filterEnergies || filterCriticals;

  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const toggleExpand = (nodeId: string) => {
    setExpandedNodes(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(nodeId)) {
        newExpanded.delete(nodeId); 
      } else {
        newExpanded.add(nodeId); 
      }
      return newExpanded;
    });
  };

  const flattenTree = (nodes: TreeNode[], depth: number = 0): Array<{ node: TreeNode; depth: number }> => {
    let items: Array<{ node: TreeNode; depth: number }> = [];
    nodes.forEach(node => {
      items.push({ node, depth });
      if (expandedNodes.has(node.id) && node.children && node.children.length > 0) {
        items = items.concat(flattenTree(node.children, depth + 1));
      }
    });
    return items;
  };

  const nodesWithDepth = useMemo(() => {
    if (!result.tree) return [];

    return flattenTree(result.tree);
  }, [result.tree, expandedNodes]);

  const rowCount = nodesWithDepth.length;

  const rowRenderer = ({ index, key, style }: ListRowProps) => {
    const { node, depth } = nodesWithDepth[index];
    const isExpanded = expandedNodes.has(node.id); 

    return (
      <div 
        key={key} 
        style={style} 
        onClick={() => toggleExpand(node.id)} 
        className={cn({
          "hover:cursor-pointer": node.children?.length > 0 || node.type === 'COMPONENT', 
        })}
      >
        <Node node={node} depth={depth} isExpanded={isExpanded} />
      </div>
    );
  };

  if (!result.tree) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex px-1 py-2 h-full">
      <AutoSizer>
        {({height, width}) => (
          <List
            height={height} 
            width={width} 
            rowCount={rowCount} 
            rowHeight={30} 
            rowRenderer={rowRenderer} 
            overscanRowCount={VISIBLE_ITEMS} 
          />
        )}
      </AutoSizer>

      {
        result.tree?.length === 0 && hasFilter && (
          <div
            className="flex justify-center w-full"
          >
            <p className="mx-auto text-lg text-gray-950 font-semibold">
              Não foi encontrado ativos com esses filtros.
            </p>
          </div>
        )
      }
    </div>
  );
}
