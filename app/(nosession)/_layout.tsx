import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const layout = () => {
  return (   
  
    <Stack screenOptions={{}}>    
      <Stack.Screen name="(nosession)" options={{ headerShown: false }} />
    </Stack>     

   
  )
}

export default layout
