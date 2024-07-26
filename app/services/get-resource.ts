import { AxiosResponse } from "axios";
import { People } from "../types/people";
import { Result } from "../types/result";
import axios from "./axios";

const getResource = async (path: string): Promise<AxiosResponse<Result<People>>> => {
    const data = await axios.get<any, AxiosResponse<Result<People>>>(path);

    return data;
};

  export default getResource;
