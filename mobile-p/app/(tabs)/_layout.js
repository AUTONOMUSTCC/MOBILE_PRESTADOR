import React from 'react';
import { Stack } from 'expo-router';


export default function RootLayout() {
  
    return (
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="login" options={{ title: 'Login' }} />
        <Stack.Screen name="introPrestador" options={{ title: 'Intro' }} />
        <Stack.Screen name="inicial" options={{title: 'inicio'}} />
      </Stack>

      
    );
}
