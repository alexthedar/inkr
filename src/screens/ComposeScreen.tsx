import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ComposeForm from '../components/ComposeForm';
import { useContentStore } from '../store/contentStore';
import { useAppNavigation } from '../navigation/hooks';
import { generateId } from '../utils/uuid';
import { ContentItem } from '../types/content';

export default function ComposeScreen() {
  const navigation = useAppNavigation();
  const addItem = useContentStore(state => state.addItem);

  const handleCompose = (data: Pick<ContentItem, 'type' | 'text'>) => {
    const newItem: ContentItem = {
      id: generateId(),
      createdAt: new Date().toISOString(),
      ...data,
    };
    addItem(newItem);
    navigation.navigate('Feed');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ComposeForm onSubmit={handleCompose} />
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
