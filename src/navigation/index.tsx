import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FeedScreen from '../screens/FeedScreen';
import ComposeScreen from '../screens/ComposeScreen';
import DetailScreen from '../screens/DetailScreen';
import EditScreen from 'screens/EditScreen';

export type RootStackParamList = {
  Feed: undefined;
  Compose: undefined;
  Detail: { id: string };
  Edit: { contentId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Compose" component={ComposeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
