import axios, { AxiosResponse } from "axios";

export interface AxiosConfig {
  url: string;
  method: string;
  data: Object;
}

export const fetchUtility = async (
  options: AxiosConfig,
): Promise<AxiosResponse<unknown, any>> => await axios.get(options.url);
