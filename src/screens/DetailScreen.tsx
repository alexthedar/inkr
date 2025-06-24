import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { useAppNavigation } from '../navigation/hooks';
import type { RootStackParamList } from '../navigation';
import { useContentStore } from '../store/contentStore';

export default function DetailScreen() {
  const navigation = useAppNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
  const { id } = route.params;

  const item = useContentStore(state => state.items.find(i => i.id === id));

  if (!item) {
    return (
      <View className="flex-1 items-center justify-center p-4 bg-gray-50">
        <Text className="text-lg text-gray-500">Item not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView className="bg-gray-50" contentContainerStyle={styles.container}>
      <Text className="text-3xl font-bold mb-2 capitalize">{item.type}</Text>
      <View className="p-4 bg-white rounded-lg shadow-md w-full">
        <Text className="text-lg text-center text-gray-800">{item.text}</Text>
      </View>
      <View className="flex-row justify-around w-full mt-6">
        <Button title="Edit" onPress={() => navigation.navigate('Edit', { contentId: id })} />
        <Button title="Back to Feed" onPress={() => navigation.popToTop()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
