'use client'

import { useGetCompanies } from "@/application/hooks/useGetCompanies";
import { Button } from "../Button/Button";
import { useGlobalStore } from "@/application/stores/global";

export function Header() {
  const { setCompany, company } = useGlobalStore()
  const result = useGetCompanies();

  return (
    <header
      className="flex items-center justify-between py-3 px-4 bg-blue-900"
    >
      <img 
        src="/logo.png" 
        alt="Tractian Oficial Logo"
        data-testid="header-logo"
      />

      <nav
        className="flex items-center justify-center gap-[0.625rem]"
      >
        {
          result.data && result.data.map((unit, index) => {
            if (index === 0 && !company) {
              setCompany(unit);
            }

            return (
              <Button 
                key={unit.id} 
                isActive={company?.id === unit.id} 
                onClick={() => setCompany(unit)}
              >
                {`${unit.name} Unit`}
              </Button>
            )
          })
        }
      </nav>
    </header>
  )
}