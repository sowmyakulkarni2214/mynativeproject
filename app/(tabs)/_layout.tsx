import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const layout = () => {
  return (
 
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: Colors?.bgColor,
        borderBottomWidth:0,
        padding:0,
        justifyContent:"center"
      },
      tabBarShowLabel:false,
      tabBarActiveTintColor:Colors.black,
      tabBarInactiveTintColor:"#999"
    }}>
        <Tabs.Screen name="index" options={{ tabBarIcon: ({ color }) => (
        <Ionicons name="compass-outline" size={25} color={color} />),}}/>
        <Tabs.Screen name="bookmark" options={{ tabBarIcon: ({ color }) => (
        <Ionicons name="book" size={25} color={color} />),}}/>
        <Tabs.Screen name="search" options={{ tabBarIcon: ({ color }) => (
           <View style={{
            backgroundColor: Colors.primaryColor, 
            paddingHorizontal: 10, 
            paddingVertical: 10,           
            borderRadius: 10,
            height: 45,
            width:50, 
            justifyContent: 'center', 
            alignItems: 'center',
            marginTop:10 
            // zIndex: 1, 
            // borderWidth: 2,  // Add border to see the view size
            // borderColor: 'red',  // Temporary red border for debugging
            }}>
        <Ionicons name="search-outline" size={25} color={Colors.white} />
        // </View>
        ),}}/>
        <Tabs.Screen name="category" options={{ tabBarIcon: ({ color }) => (
        <View style={{
          backgroundColor: Colors.white, 
          paddingHorizontal: 10, 
          paddingVertical: 10,           
          borderRadius: 10,
          height: 45,
          width:50, 
          justifyContent: 'center', 
          alignItems: 'center',
          marginTop:10 
          // zIndex: 1, 
          // borderWidth: 2,  // Add border to see the view size
          // borderColor: 'red',  // Temporary red border for debugging
          }}>
            <MaterialIcons name="category" size={25} color={Colors.black} /> 
            {/* <Ionicons name="search-outline" size={20} color={Colors.black} style={{ */}
       
          {/* // paddingHorizontal: 20,  */}
         {/* }} */}
          
        </View>
        ),}}/>
        <Tabs.Screen name="profile" options={{ tabBarIcon: ({ color }) => (
        <Ionicons name="link" size={25} color={color} />),}}/>
    </Tabs>
  )
}

export default layout