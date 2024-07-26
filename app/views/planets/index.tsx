import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import getResource from '../../services/get-resource';

const PlanetsView = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['/planets'],
    queryFn: getResource('/planets'),
  });

  if (isLoading || isFetching)
    return <ActivityIndicator />;

  return (
    <View>
      <Text>{!!data?.data && JSON.stringify(data.data, null, 2)}</Text>
    </View>
  )
}

export default PlanetsView
