import React from "react";
import { Text, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import Card from "../../components/card";
import Container from "../../components/container";
import useSwapi from "../../hooks/useSwapi";
import { Starships } from "../../types/starshipts";

const PeopleView = () => {
  const { data, isLoading, error, isError, hasNextPage, fetchNextPage } =
    useSwapi<Starships>("starships");

  if (isLoading) return <ActivityIndicator />;

  const handleGetNextPage = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  return (
    <Container title="Starships">
      {isError && <Text style={styles.text}>Error Fetching data</Text>}
      <FlatList
        data={data?.pages.flatMap(item => item.data.results)}
        renderItem={({ item: person }) => (
          <Card>
            <Text style={styles.text}>Name: {person.name}</Text>
            <Text style={styles.text}>Cargo capacity: {person.cargo_capacity}</Text>
            <Text style={styles.text}>Cost: {person.cost_in_credits}</Text>
            <Text style={styles.text}>length: {person.length}</Text>
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

const styles = StyleSheet.create({
  text: {
    color: "#ffffffda",
  },
});
