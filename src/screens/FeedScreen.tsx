import React, { useState, useMemo } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { useAppNavigation } from '../navigation/hooks';
import { useContentStore } from '../store/contentStore';
import { ContentItem, ContentType } from '../types/content';

const FILTERS: (ContentType | 'all')[] = ['all', 'micro', 'post', 'article'];

export default function FeedScreen() {
  const navigation = useAppNavigation();
  const items = useContentStore(state => state.items);
  const clearAllItems = useContentStore(state => state.clearAllItems);
  const [activeFilter, setActiveFilter] = useState<ContentType | 'all'>('all');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') {
      return items;
    }
    return items.filter(item => item.type === activeFilter);
  }, [items, activeFilter]);

  const renderItem = ({ item }: { item: ContentItem }) => (
    <TouchableOpacity
      className="bg-white p-4 rounded-lg my-2 border border-gray-200"
      onPress={() => navigation.navigate('Detail', { id: item.id })}
    >
      <Text className="font-bold text-blue-500 mb-1 capitalize">{item.type}</Text>
      <Text className="text-base text-gray-800" numberOfLines={3}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-50">
      <View className="flex-row justify-between items-center p-4 bg-white border-b border-gray-200">
        <Text className="text-2xl font-bold">Feed</Text>
        <View className="flex-row items-center">
          <Button title="Clear" onPress={clearAllItems} color="red" />
          <View className="ml-2">
            <Button title="New Post" onPress={() => navigation.navigate('Compose')} />
          </View>
        </View>
      </View>

      <View className="flex-row justify-around py-2 bg-white">
        {FILTERS.map(filter => (
          <TouchableOpacity
            key={filter}
            className={`py-2 px-4 rounded-full ${
              activeFilter === filter ? 'bg-blue-500' : 'bg-gray-200'
            }`}
            onPress={() => setActiveFilter(filter)}
          >
            <Text
              className={`font-medium capitalize ${
                activeFilter === filter ? 'text-white' : 'text-gray-700'
              }`}
            >
              {filter}s
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        ListEmptyComponent={
          <Text className="text-center mt-12 text-lg text-gray-500">
            No content yet. Create one!
          </Text>
        }
      />
    </View>
  );
}
