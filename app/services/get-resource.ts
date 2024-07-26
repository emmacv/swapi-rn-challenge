import { AxiosResponse } from "axios";
import { Result } from "../types/result";
import axios from "./axios";

const getResource = async <R = unknown>(path: string): Promise<AxiosResponse<Result<R>>> => {
    const data = await axios.get<any, AxiosResponse<Result<R>>>(path);

    return data;
};

  export default getResource;
