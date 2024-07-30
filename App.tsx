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
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const Navigations = (): React.JSX.Element => (
  <Tab.Navigator
    sceneContainerStyle={{
      backgroundColor: "transparent",
    }}
    screenOptions={({ route }) => ({
      headerShown: false,
      headerStyle: {
        shadowColor: "transparent",
      },
      tabBarStyle: {
        backgroundColor: "#272727df",
        borderTopColor: "black",
        elevation: 0,
      },
      tabBarIcon: ({ color }) => {
        if (route.name === "Spaceships") {
          return <FontAwesome name="space-shuttle" size={25} color={color} />;
        }

        const iconName = route.name === "People" ? "people" : "planet";

        return <Ionicons name={iconName} size={25} color={color} />;
      },
      tabBarLabel: ({ children, color }) => <Text style={{ color }}>{children}</Text>,
      tabBarActiveBackgroundColor: "#ebe3e3c8",
      tabBarActiveTintColor: "#312c2cd6",
    })}
  >
    <Tab.Screen
      name="People"
      component={PeopleView}
      initialParams={{ name: "people" }}
    />
    <Tab.Screen
      name="Planets"
      component={PlanetsView}
      initialParams={{ name: "planets" }}
    />
    <Tab.Screen
      name="Spaceships"
      component={SpaceshipView}
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
