import { View, Text, Button } from 'react-native';
import { useAppNavigation } from '../navigation/hooks';

export default function ComposeScreen() {
  const navigation = useAppNavigation();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold mb-4">Compose</Text>
      <Button title="Back to Feed" onPress={() => navigation.navigate('Feed')} />
    </View>
  );
}
