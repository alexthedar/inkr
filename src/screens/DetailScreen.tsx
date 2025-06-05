import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../navigation';

export default function DetailScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
  const { id } = route.params;

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold mb-4">Detail View</Text>
      <Text>Post ID: {id}</Text>
    </View>
  );
}
