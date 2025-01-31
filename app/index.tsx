// import { Image, StyleSheet, Platform } from 'react-native';

import { instance } from "@/api/baseUrlConfig";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { router, Stack, useFocusEffect, usePathname, useRouter } from "expo-router";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Platform,
  Button,
  ImageBackground,
} from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { Colors } from "@/constants/Colors";
import { Context } from "@/contextApi/AuthContext";
import { contextType } from "@/contextApi/CreateDataContext";
import Bottomsheet from "@/components/BottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import DeviceInfo from 'react-native-device-info';

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [expoPushToken, setExpoPushToken] = useState("");
  const [channels, setChannels] = useState<Notifications.NotificationChannel[]>(
    []
  );
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined);
  const notificationListener = useRef<Notifications.EventSubscription>();
  const responseListener = useRef<Notifications.EventSubscription>();
  const { state, boundActions } = useContext<contextType>(Context);
  const { signIn, updateUserData } = boundActions;
  const pathName = usePathname()
  const router = useRouter()
  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState<boolean>(false)  
  const [loading, setLoading] = useState<boolean>(false)


  console.log(state?.isSignIn, "llllllllllllllllll")
  useFocusEffect(useCallback(()=>{   
      if (!state?.isSignIn) {
        // router.navigate("/(nosession)/usersession")
        // router.navigate("/(nosession)/intro")
        router.navigate("/")
      } else {        
        router.navigate("/(session)/post")
      }
 
  },[state.isSignIn]))

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  const addToken = async () => {
    let user_id = AsyncStorage.getItem("user_id");
    try {
      let res = await instance.post("/send-notification", {
        pushToken: expoPushToken,
        user_id,
      });
      console.log(res, "adding token");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      console.log(token, "token");
      token && setExpoPushToken(token);
    });

    if (Platform.OS === "android") {
      Notifications.getNotificationChannelsAsync().then((value) =>
        setChannels(value ?? [])
      );
    }
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: "Here is the notification body",
        data: { data: "goes here", test: { test1: "more data" } },
      },
      trigger: null,
      // trigger: {
      //   type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      //   seconds: 2,
      // },
    });
  }

  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("myNotificationChannel", {
        name: "A channel is needed for the permissions prompt to appear",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      // Learn more about projectId:
      // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
      // EAS projectId is used here.
      try {
        const projectId =
          Constants?.expoConfig?.extra?.eas?.projectId ??
          Constants?.easConfig?.projectId;
        if (!projectId) {
          throw new Error("Project ID not found");
        }
        token = (
          await Notifications.getExpoPushTokenAsync({
            projectId,
          })
        ).data;
        console.log(token);
      } catch (e) {
        token = `${e}`;
      }
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  }

  // Get unique device ID

  const handleLogin = ()=>{
    console.log("function calling singin")
    try {
      signIn({email,
        password,
        router,
        setLoading,
        setError,
        setMessage,
        pathName})
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <>
      <Stack.Screen
        options={{ headerTransparent: true, headerTitle: "" }}
      ></Stack.Screen>
      <View style={styles.container}>
        {/* <ImageBackground */}
        {/* source={require("../../assets/images/cdri_logo.png")} */}
        {/* style={styles.backgroundImage} */}
        {/* > */}
        <View style={{ alignItems: "center", ...styles.logoContainer }}>
          {/* <Image
            source={require("../../assets/images/sciencelogo.png")}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          /> */}

          {/* <Image
              source={require("../../assets/images/ctddr_logo.jpg")}
              style={styles.logo}
            /> */}
        </View>
        <ScrollView automaticallyAdjustContentInsets style={{}}>
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
          <Text style={styles.loginButtonText}>Sign In</Text> {/* Ensure this is wrapped in a <Text> */}
        </TouchableOpacity>
          </View>
        </ScrollView>
        {/* </ImageBackground> */}
       
      </View>
    
      {/* <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}> */}
      {/* <Text>Your expo push token: {expoPushToken}</Text>     
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      /> */}
      {/* </View> */}
     
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  logoContainer: {
    marginTop: "20%",
    marginBottom: "20%",
    flex: 1, // Ensures the container takes up the full screen
    justifyContent: "center", // Centers content vertically
    backgroundColor: "#ffffff", // Optional: background color for the screen
  },
  logo: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    padding: 10,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#B0C4DE",
  },
  loginButton: {
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
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
