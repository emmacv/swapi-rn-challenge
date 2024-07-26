import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import getResource from '../../services/get-resource';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const SpaceshipView = () => {
  const { data, isLoading, isFetching } = useInfiniteQuery({
    queryKey: ['/starships'],
    queryFn: ({ pageParam, queryKey }) => getResource(`/${queryKey}?page=${pageParam}`),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => 1,
  });

  if (isLoading || isFetching)
    return <ActivityIndicator />;

  data?.pages[0]().then(console.log);

  return (
    <View>
      <Text>{JSON.stringify(data?.pages.at(1)?.data, null, 2)}</Text>
    </View>
  )
}

export default SpaceshipView
