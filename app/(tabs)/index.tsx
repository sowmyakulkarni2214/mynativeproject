// import { Image, StyleSheet, Platform } from 'react-native';

import { instance } from '@/api/baseUrlConfig';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { router, Stack } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleLogin = async() => {

    
    console.log("iojdsfsdfsd")
    try {
      let res = await instance.post("/signin",{
      // let res = await axios.post("http://localhost:8080/api/signin",{
        email:email?.trim().toLowerCase(),
        password:password.trim()} )

      console.log(res?.data?.result, "dat")
      let data = res?.data?.result
      await AsyncStorage.setItem("token",data?.token.toString())
      await AsyncStorage.setItem("user_id",data?._id.toString())
      await AsyncStorage.setItem("user_email",data?.email.toString())
      await AsyncStorage.setItem("isLoggedIn",data?.isLoggedIn.toString())
      await AsyncStorage.setItem("user_type_id",data?.user_type_id.toString())
      // router.navigate("Screens/home")
    } catch (error) {
      console.log(error)
    }
    // Implement your login logic here
  };
  return (<>
    <Stack.Screen options={{headerTransparent:true, headerTitle:""}}>      

    </Stack.Screen>
    <View style={styles.container}>
    {/* <ImageBackground source={{ uri: 'https://www.bootdey.com/image/280x280/9370DB/9370DB' }} style={styles.backgroundImage}> */}
      {/* <View style={styles.logoContainer}>
        <Image source={{ uri: "../../assets/images/icon.png" }} style={styles.logo} />
      </View> */}
       <ScrollView automaticallyAdjustContentInsets style={{}} >
      <View style={styles.formContainer}>
        <View style={styles.card}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.card}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    {/* </ImageBackground> */}
  </View></>
);
};




const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 160,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius:60,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop:"50%",
    padding:20,
    borderRadius:10,
    backgroundColor:'rgba(255, 255, 255, 0.3)'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    padding:10,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth:1,
    borderBottomColor:'#B0C4DE'
  },
  loginButton: {
    backgroundColor: '#7B68EE',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  // titleContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: 8,
  // },
  // stepContainer: {
  //   gap: 8,
  //   marginBottom: 8,
  // },
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: 'absolute',
  // },
});
