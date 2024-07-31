import { useInfiniteQuery } from "@tanstack/react-query";
import getResource from "../services/get-resource";

const useSwapi = <R = unknown>(key: string) => {
  const result =
    useInfiniteQuery({
      queryKey: [key],
      queryFn: ({ pageParam, queryKey }) =>
        getResource<R>(`/${queryKey}?page=${pageParam}`),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const cursor = lastPage.data.next;

        if (!cursor) return null;

        return Number(/\d/.exec(cursor));
      },
    });

  return result;
};

export default useSwapi;
