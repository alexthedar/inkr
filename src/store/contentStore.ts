import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ContentItem } from '../types/content';
import { persist, createJSONStorage } from 'zustand/middleware';

type ContentStore = {
  items: ContentItem[];
  addItem: (item: ContentItem) => void;
  editItem: (id: string, updates: Partial<ContentItem>) => void;
  removeItem: (id: string) => void;
};

export const useContentStore = create<ContentStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: item => set({ items: [item, ...get().items] }),
      editItem: (id, updates) =>
        set({
          items: get().items.map(item =>
            item.id === id ? { ...item, ...updates, updatedAt: new Date().toISOString() } : item
          ),
        }),
      removeItem: id => set({ items: get().items.filter(item => item.id !== id) }),
    }),
    {
      name: 'inkr-content',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
