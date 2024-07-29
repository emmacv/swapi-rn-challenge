import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootTabParamList = {
  People: { name: string };
  Profile: { name: string };
  Feed: { name: string };
};

export type ViewProps<K extends keyof RootTabParamList> = NativeStackScreenProps<RootTabParamList, K>;
