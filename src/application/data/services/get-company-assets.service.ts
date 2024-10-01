import { ServiceResponse } from "@/infra/contracts/service-contract";
import { HttpClient } from "@/infra/http-client";
import { CompanyAsset } from "../../../domain/models/CompanyAsset";

type Props = {
  companyId: string;
}

export const GetCompanyAssetsService = async ({ 
  companyId 
}: Props): Promise<ServiceResponse<CompanyAsset[]>> => {
  try {
    const result = await HttpClient.get<CompanyAsset[]>(`/companies/${companyId}/assets`);

    if (result.status !== 200) {
      throw new Error();
    }

    return [result.data, null]
  } catch (error) {
    return [null, {
      message: 'Erro ao buscar os ativos da empresa',
      err: error
    }];
  }
};