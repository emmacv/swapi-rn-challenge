import axios from "./axios";

const getResource = (path: string) =>
  async () => {
  const data = axios.get(path);

  return data;
};

export default getResource;
