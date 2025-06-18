import React from 'react';
import { Stack } from 'expo-router';


export default function RootLayout() {
  
    return (
      <Stack>
        <Stack.Screen name="loading" options={{ title: 'loading' }} />
        <Stack.Screen name="login" options={{ title: 'Login' }} />
        <Stack.Screen name="introduction" options={{ title: 'Explanation' }} />
        <Stack.Screen name="home" options={{title: 'HOME'}} />
      </Stack>

      
    );
}
