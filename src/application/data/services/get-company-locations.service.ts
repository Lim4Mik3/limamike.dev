import { ServiceResponse } from "@/infra/contracts/service-contract";
import { HttpClient } from "@/infra/http-client";
import { CompanyLocation } from "../../../domain/models/CompanyLocation";

type Props = {
  companyId: string;
}

export const GetCompanyLocationsService = async ({ 
  companyId 
}: Props): Promise<ServiceResponse<CompanyLocation[]>> => {
  try {
    const result = await HttpClient.get<CompanyLocation[]>(`/companies/${companyId}/locations`);

    if (result.status !== 200) {
      throw new Error();
    }

    return [result.data, null];
  } catch (error) {
    return [null, {
      message: 'Erro ao buscar os locais da empresa',
      err: error
    }];
  }
};