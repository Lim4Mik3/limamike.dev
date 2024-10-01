import { Company } from '@/domain/models/Company';
import { CompanyAsset } from '@/domain/models/CompanyAsset';
import { create } from 'zustand'

interface GlobalStore {
  company: Company | null;
  viewComponent: CompanyAsset | null;
  filterByTerm: string | null;
  filterEnergies: boolean;
  filterCriticals: boolean;
  toggleFilterByEnergy: () => void;
  toggleFilterByCritical: () => void;
  setFilterByTerm: (term: string) => void;
  setCompany: (company: Company) => void;
  setViewComponent: (component: CompanyAsset) => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  company: null,
  viewComponent: null,
  filterByTerm: null,
  filterCriticals: false,
  filterEnergies: false,
  setCompany: (company) => set(() => ({
    company, 
    viewComponent: null,
    filterByTerm: null,
    filterCriticals: false,
    filterEnergies: false,
  })), 
  setViewComponent: (component) => set(() => ({ viewComponent: component })),
  setFilterByTerm: (term) => set(() => ({ filterByTerm: term ? term : null })),
  toggleFilterByCritical: () => set((state) => ({ filterCriticals: !state.filterCriticals })),
  toggleFilterByEnergy: () => set((state) => ({ filterEnergies: !state.filterEnergies })),
}));
