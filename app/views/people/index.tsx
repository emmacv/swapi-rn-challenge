import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import getResource from '../../services/get-resource';

const PeopleView = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['/people'],
    queryFn: getResource('/people'),
   });

   if (isLoading || isFetching)
    return <ActivityIndicator />;

  return (
    <View>
      <Text>{!!data?.data && JSON.stringify(data.data, null, 2)}</Text>
    </View>
  )
}

export default PeopleView
