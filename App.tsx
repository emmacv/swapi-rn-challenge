import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import PeopleView from "./src/views/people";
import PlanetsView from "./src/views/planets";
import SpaceshipView from "./src/views/spaceships";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Container from "./src/components/container";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const Navigations = (): React.JSX.Element => (
  <Tab.Navigator
    sceneContainerStyle={{
      backgroundColor: "transparent",
    }}
    screenOptions={{
      headerShown: false,
      headerStyle: {
        shadowColor: "transparent",
      },
    }}
  >
    <Tab.Screen
      name="People"
      component={PeopleView}
      options={{
        tabBarIcon: () => <Ionicons name="people" size={25} />,
      }}
      initialParams={{ name: "people" }}
    />
    <Tab.Screen
      name="Planets"
      component={PlanetsView}
      options={{
        tabBarIcon: () => <Ionicons name="planet" size={25} />,
      }}
      initialParams={{ name: "planets" }}
    />
    <Tab.Screen
      name="Spaceships"
      component={SpaceshipView}
      options={{
        tabBarIcon: () => <FontAwesome name="space-shuttle" size={25}/>,
      }}
      initialParams={{ name: "starships" }}
    />
  </Tab.Navigator>
);

const queryClient = new QueryClient();

const App = () => (
  <NavigationContainer>
    <QueryClientProvider client={queryClient}>
      <Container title="Star Wars">
        <Navigations />
      </Container>
    </QueryClientProvider>
  </NavigationContainer>
);

export default App;
