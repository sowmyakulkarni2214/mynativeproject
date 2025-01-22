import { View, Text } from 'react-native'
import { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { router, Stack, Tabs } from 'expo-router'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { useFocusEffect } from '@react-navigation/native'
import { contextType } from '@/contextApi/CreateDataContext'
import { Context } from '@/contextApi/AuthContext'
// const { state,boundActions: { sigin} } = useContext<contextType>(Context)

const layout = () => {

  // console.log(state, "statedata")



  return(  
    <Stack screenOptions={{}}>    
      <Stack.Screen name="(nosession)" options={{ headerShown: false }} />
    </Stack>    
  )
}

export default layout
