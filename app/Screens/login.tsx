import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { instance } from "@/api/baseUrlConfig";
import { Colors } from "@/constants/Colors";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    // const device_id = await DeviceInfo.getUniqueId();

    console.log("iojdsfsdfsd");
    try {
      let res = await instance.post("/signin", {
        // let res = await axios.post("http://localhost:8080/api/signin",{
        email: email?.trim().toLowerCase(),
        password: password.trim(),
        // device_id
      });

      console.log(res?.data?.result, "dat");
      let data = res?.data?.result;
      await AsyncStorage.setItem("token", data?.token.toString());
      await AsyncStorage.setItem("user_id", data?._id.toString());
      await AsyncStorage.setItem("user_email", data?.email.toString());
      await AsyncStorage.setItem("isLoggedIn", data?.isLoggedIn.toString());
      await AsyncStorage.setItem("user_type_id", data?.user_type_id.toString());
      // router.navigate("Screens/home")
      // addToken()
    } catch (error) {
      console.log(error);
    }
    // Implement your login logic here
  };
  return (
    <View style={styles.container}>
      {/* <ImageBackground */}
      {/* source={require("../../assets/images/cdri_logo.png")} */}
      {/* style={styles.backgroundImage} */}
      {/* > */}
      <View style={{ alignItems: "center", ...styles.logoContainer }}>
        <Image
          source={require("../../assets/images/sciencelogo.png")}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />

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
          <TouchableOpacity
            style={styles.loginButton}
            // onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Sigin In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* </ImageBackground> */}
    </View>
  );
  {
    /* <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}> */
  }
  {
    /* <Text>Your expo push token: {expoPushToken}</Text>     
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
      /> */
  }
  {
    /* </View> */
  }
};

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
