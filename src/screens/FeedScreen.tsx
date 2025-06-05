import { View, Text, Button } from 'react-native';
import { useAppNavigation } from '../navigation/hooks';

export default function FeedScreen() {
  const navigation = useAppNavigation();
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Feed</Text>
      <Button title="New Post" onPress={() => navigation.navigate('Compose')} />
    </View>
  );
}
