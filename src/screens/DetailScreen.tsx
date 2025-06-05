import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useAppNavigation } from '../navigation/hooks';

export default function DetailScreen() {
  const navigation = useAppNavigation();
  const route = useRoute();
  const { id } = route.params as { id: string };

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Detail view for item {id}</Text>
    </View>
  );
}
