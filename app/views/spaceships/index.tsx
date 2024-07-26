import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import getResource from '../../services/get-resource';
import { useQuery } from '@tanstack/react-query';

const SpaceshipView = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['/starships'],
    queryFn: getResource('/starships'),
  });

  if (isLoading || isFetching)
    return <ActivityIndicator />;


  return (
    <View>
      <Text>{!!data?.data && JSON.stringify(data.data, null, 2)}</Text>
    </View>
  )
}

export default SpaceshipView
