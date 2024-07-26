import { useInfiniteQuery } from "@tanstack/react-query";
import getResource from "../services/get-resource";
import { People } from "../types/people";

const useSwapi = <R = unknown>(key: string) => {
  const { data, isLoading, error, isError, hasNextPage, fetchNextPage } =
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

  return { data, isLoading, error, isError, hasNextPage, fetchNextPage };
};

export default useSwapi;
