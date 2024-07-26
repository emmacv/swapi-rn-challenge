import React from "react";
import { Text, ActivityIndicator, FlatList } from "react-native";
import Card from "../../components/card";
import Container from "../../components/container";
import useSwapi from "../../hooks/useSwapi";
import { People } from "../../types/people";
import globalTheme from "../../theme";

const PeopleView = () => {
  const { data, isLoading, error, isError, hasNextPage, fetchNextPage } =
    useSwapi<People>("people");

  if (isLoading) return <ActivityIndicator />;

  const handleGetNextPage = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  return (
    <Container title="People">
      {isError && <Text style={globalTheme.text}>Error Fetching data</Text>}
      <FlatList
        data={data?.pages.flatMap(item => item.data.results)}
        renderItem={({ item: person }) => (
          <Card>
            <Text style={globalTheme.text}>Name: {person.name}</Text>
            <Text style={globalTheme.text}>Gender: {person.gender}</Text>
            <Text style={globalTheme.text}>Height: {person.height}</Text>
          </Card>
        )}
        keyExtractor={item => item.name}
        onEndReached={handleGetNextPage}
        contentContainerStyle={{
          padding: 20,
        }}
      />
    </Container>
  );
};

export default PeopleView;
