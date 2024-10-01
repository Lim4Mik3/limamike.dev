'use client'

import { useGlobalStore } from "../stores/global";
import { Button } from "./Button/Button";

export function PanelHeader() {
  const { 
    toggleFilterByCritical, 
    toggleFilterByEnergy, 
    filterCriticals, 
    filterEnergies,
    company
  } = useGlobalStore();

  return (
    <header
      className="flex items-center justify-between"
    >
      <div
        className="flex items-center"
      >
        <h1 className="text-[#24292F] text-xl font-semibold">Ativos</h1>
        <span className="text-sm text-[#77818C] mx-1">/</span>
        <h2 className="text-sm text-[#77818C]">{company?.name} Unit</h2>
      </div>


      <nav
        className="flex items-center gap-[0.625rem]"
      >
        <Button 
          variant="secondary" 
          icon="energy" 
          isActive={filterEnergies}
          onClick={toggleFilterByEnergy}
        >
          Sensor de Energia
        </Button>

        <Button 
          variant="secondary" 
          icon="critical"
          isActive={filterCriticals}
          onClick={toggleFilterByCritical}
        >
          Crítico
        </Button>
      </nav>
    </header>
  )
}