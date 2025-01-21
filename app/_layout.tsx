import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { PaperProvider } from 'react-native-paper';
import Header from '@/components/Header';
SplashScreen.preventAutoHideAsync();
import { Provider } from '@/contextApi/AuthContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const pathName=usePathname()
  const[title, setTitle] = useState<string>("")
  // console.log(state, "statedata")
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  

  // useEffect(()=>{
  //   if(pathName){
  //   console.log(pathName, "pathname")
  //   // let title = pathName.replace("/", "")
  //   if(pathName == "/"){
  //     setTitle("Login")
  //   }else{
  //     let title = pathName.substring(1); // Remove leading "/"
  //     title = title.charAt(0).toUpperCase() + title.slice(1); // Capitalize first letter
  //     setTitle(title);
  //   }
    
  // }else{
  //   setTitle("Default Title"); 
  // }
  // },[pathName])

  return (
    <Provider>      
    <PaperProvider>
    <GestureHandlerRootView style={{ flex: 1 }}> {/* Wrap your app inside GestureHandlerRootView */}
      <Header title={""}/>
      <Stack screenOptions={{}}>
        <Stack.Screen name="(session)" options={{ headerShown: false }} />
        
        </Stack>     
        </GestureHandlerRootView>
    </PaperProvider>
    </Provider>
  );
}

