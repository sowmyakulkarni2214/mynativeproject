import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import {useHeaderHeight} from "@react-navigation/elements"
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import Search from '@/components/Search'
import ProctoList from '@/components/UsersList'

const home = () => {
  const headerHeight = useHeaderHeight()
  return (<>
    <Stack.Screen options={{
      // headerTitle:"",
      // headerTransparent:true
    }}>

    </Stack.Screen>
  

    <View style={styles.container}>
    <Text style={styles.textwrapper}>Hello User</Text>      
    </View>

    <Search />
    <ProctoList/>
    </>
  )
}

export default home

const styles = StyleSheet.create({

  container: { 
    marginHorizontal:20

  },

  textwrapper:{
    color:Colors.primaryColor,
    fontSize:25,
    fontWeight:"900",
  },
})