import { useQuery } from "@tanstack/react-query";
import { GetCompaniesService } from "../data/services/get-companies.service";

export const useGetCompanies = () => useQuery({
  queryKey: ["get-companies"],
  queryFn: async () => {
    const result = await GetCompaniesService()

    const [companies, err] = result;

    if (err || !companies) throw new Error("Erro ao buscar companias");

    return companies;
  }
});