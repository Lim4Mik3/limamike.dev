import { ServiceResponse } from "@/infra/contracts/service-contract";
import { HttpClient } from "@/infra/http-client";
import { Company } from "../../../domain/models/Company";

export const GetCompaniesService = async (): Promise<ServiceResponse<Company[]>> => {
  try {
    const result = await HttpClient.get<Company[]>('/companies');

    if (result.status !== 200) {
      throw new Error();
    }

    return [result.data, null];
  } catch (error) {
    return [null, { 
      message: 'Falha ao buscar as empresas', err: error 
    }];
  }
};
