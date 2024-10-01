'use client'

import { useGlobalStore } from "../stores/global";
import { TreeView } from "./TreeView/TreeView";

export function AsideExplorer() {
  const { setFilterByTerm, filterByTerm } = useGlobalStore();

  return (
    <aside
      className="max-w-[35vw] w-full border border-[#D8DFE6] rounded relative flex flex-col max-h-full overflow-auto"
    >
      <div className="w-full p-2 flex items-center gap-4 border-b border-[#D8DFE6] sticky top-0 bg-white z-50">
        <input 
          type="text" 
          placeholder="Buscar Ativo ou Local"
          className="w-full text-sm text-blue-950 p-2 outline-none"
          onChange={({ target }) => setFilterByTerm(target.value)}
          value={filterByTerm ?? ''}
        />
        <button
          className="mr-2"
        >
          <img src="/search.png" alt="Buscar" className="w-4 h-4" />
        </button>
      </div>

      <TreeView />
    </aside>
  )
}