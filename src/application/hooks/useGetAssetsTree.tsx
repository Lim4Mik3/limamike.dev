import { TreeBuilder } from "@/domain/entities/TreeBuilder";
import { TreeNode } from "@/domain/entities/TreeNode";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useGlobalStore } from "../stores/global";

const fetchTree = async (companyId: string): Promise<TreeNode[]> => {
  const treeBuilder = new TreeBuilder(companyId);
  return await treeBuilder.buildTree();
};

export function useGetAssetsTree() {
  const { company, filterByTerm, filterCriticals, filterEnergies } = useGlobalStore();

  const [filteredTree, setFilteredTree] = useState<TreeNode[]>([]);

  const { data: fullTree = [], isLoading, error } = useQuery({
    queryKey: ["company-assets", company],
    queryFn: () => fetchTree(company?.id as string),
    staleTime: 1000 * 60 * 5, // 5 Minutos
    enabled: !!company?.id
  });
  
  useEffect(() => {
    if (fullTree.length === 0) return;
  
    const filterTree = (tree: TreeNode[]): TreeNode[] => {
      return tree
        .map((node) => {
          const matchesName = filterByTerm
            ? node.name.toLowerCase().includes(filterByTerm.toLowerCase())
            : true;
          const matchesCritical = filterCriticals ? node.status === "alert" : true;
          const matchesEnergy = filterEnergies ? node.sensorType === "energy" : true;
  
          // Recursivamente filtra os filhos
          const filteredChildren = node.children ? filterTree(node.children) : [];
  
          // Mantém o nó se TODOS os critérios forem verdadeiros ou se tiver filhos correspondentes
          if (matchesName && matchesCritical && matchesEnergy || filteredChildren.length > 0) {
            return {
              ...node,
              children: filteredChildren.length > 0 ? filteredChildren : undefined,
            };
          }
  
          return null; // Exclui o nó se nenhum critério for correspondido
        })
        .filter((node) => node !== null) as TreeNode[]; // Remove nós nulos
    };
  
    const filtered = filterTree(fullTree);
    setFilteredTree(filtered); // Atualiza a árvore filtrada
  }, [filterByTerm, filterCriticals, filterEnergies, fullTree]);

  return {
    tree: filteredTree, 
    isLoading,          
    error,              
  };
}
