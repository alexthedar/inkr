import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { seedTestContent } from './src/utils/devSeedContent';

import Navigation from './src/navigation';

const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    seedTestContent();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <StatusBar style="auto" />
    </QueryClientProvider>
  );
}
