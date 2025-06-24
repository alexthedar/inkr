import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import ComposeForm from '../components/ComposeForm';
import { useContentStore } from '../store/contentStore';
import { useAppNavigation } from '../navigation/hooks';
import { ContentItem } from '../types/content';
import { RootStackParamList } from '../navigation';

type EditScreenRouteProp = RouteProp<RootStackParamList, 'Edit'>;

export default function EditScreen() {
  const navigation = useAppNavigation();
  const route = useRoute<EditScreenRouteProp>();
  const { contentId } = route.params;

  const item = useContentStore(state => state.items.find(i => i.id === contentId));
  const editItem = useContentStore(state => state.editItem);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Content not found.</Text>
      </View>
    );
  }

  const handleEdit = (data: Pick<ContentItem, 'type' | 'text'>) => {
    editItem(contentId, data);
    // FIX: Go back to the previous screen instead of pushing a new one.
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ComposeForm onSubmit={handleEdit} initialValues={item} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
});
