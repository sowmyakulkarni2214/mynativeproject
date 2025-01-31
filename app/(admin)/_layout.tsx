import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, usePathname } from 'expo-router'
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'



const layout = () => {
    const pathName = usePathname()
  return ( 
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: Colors?.white,
        borderBottomWidth:0,
        padding:0,
        justifyContent:"center",
        paddingHorizontal: 10, 
        paddingVertical: 10, 
        height:60,
        alignItems:"center",  
      },
      tabBarShowLabel:false,
      tabBarActiveTintColor:Colors.black,
      tabBarInactiveTintColor:"#999"
    }}>
        {/* <Tabs.Screen name="index" options={{headerShown:false, tabBarIcon: ({ color }) => (
        <Ionicons name="compass-outline" size={25} color={color} />),}}/> */}
        <Tabs.Screen name="users" options={{headerShown:false, tabBarIcon: ({ color }) => (
              <View style={{
                backgroundColor: pathName=="/users"? Colors.skyBlue:"", 
                paddingHorizontal: 0, 
                paddingVertical: 0,           
                borderRadius: 10,
                height: 45,
                width:50, 
                justifyContent: 'center', 
                alignItems: 'center',
                marginTop:20 
                }}>
          <MaterialCommunityIcons name="post-outline" size={35} color={pathName === "/users" ? Colors.white : Colors.skyBlue} />        
          </View>
        ),}}/>
         <Tabs.Screen name="posts" options={{headerShown:false, tabBarIcon: ({ color }) => (
           <View style={{
            backgroundColor: pathName=="/posts"?  Colors.skyBlue:"",  
            paddingHorizontal: 0, 
            paddingVertical: 0,           
            borderRadius: 10,
            height: 45,
            width:50, 
            justifyContent: 'center', 
            alignItems: 'center',
            marginTop:20 
            }}>
            <MaterialIcons name="event" size={35} color={pathName === "/program" ? Colors.white : Colors.skyBlue} />        
            </View>
        ),}}/> 
        {/* <Tabs.Screen name="speakers" options={{headerShown:false, tabBarIcon: ({ color }) => (
        <View style={{
          backgroundColor: pathName=="/speakers"?  Colors.skyBlue:"",   
          paddingHorizontal: 0, 
          paddingVertical: 0,           
          borderRadius: 10,
          height: 45,
          width:50, 
          justifyContent: 'center', 
          alignItems: 'center',
          marginTop:20 
      
          }}>
            <MaterialCommunityIcons name="speaker-wireless" size={35} color={pathName === "/speakers" ? Colors.white : Colors.skyBlue} />
    
          
        </View>
        )}}/> */}
        {/* <Tabs.Screen name="profile" options={{headerShown:false, tabBarIcon: ({ color }) => (
            <View style={{
                backgroundColor: pathName=="/profile"?  Colors.skyBlue:"", 
                paddingHorizontal: 0, 
                paddingVertical: 0,           
                borderRadius: 10,
                height: 45,
                width:50, 
                justifyContent: 'center', 
                alignItems: 'center',
                marginTop:20 
          
                }}>
                    
                <AntDesign name="user" size={35} color={pathName === "/profile" ? Colors.white : Colors.skyBlue}/>
            </View>     
        )}}/> */}
    </Tabs>
  )
}

export default layout
