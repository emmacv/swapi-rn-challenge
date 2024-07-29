import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define your navigation parameter list
type RootTabParamList = {
  People: { name: string };
  Planets: { name: string };
  Spaceships: { name: string };
};

// Define the ViewProps type
export type ViewProps<K extends keyof RootTabParamList> = NativeStackScreenProps<RootTabParamList, K>;
type T = ViewProps<'People'>;
