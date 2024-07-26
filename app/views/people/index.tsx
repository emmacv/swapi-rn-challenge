import React from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import getResource from '../../services/get-resource';

const PeopleView = () => {
  const {
      data,
      isLoading,
      error,
      isError,
      hasNextPage,
      fetchNextPage,
    } = useInfiniteQuery({
    queryKey: ['/people'],
    queryFn: ({ pageParam, queryKey }) => getResource(`${queryKey}?page=${pageParam}`),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const cursor = lastPage.data.next;

      if (!cursor) return null;

      return Number(/\d/.exec(cursor));
    },
   });

   if (isLoading)
    return <ActivityIndicator />;

   const handleGetNextPage = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
   }

  return (
    <View>
      <FlatList
        data={data?.pages.flatMap(item => item.data.results)}
        renderItem={({ item }) => {
            return <Text>{JSON.stringify(item, null, 2)}</Text>
          }
        }
        keyExtractor={item => item.name}
        onEndReached={handleGetNextPage}
      />
    </View>
  )
}

export default PeopleView
