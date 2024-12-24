import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { PaperProvider } from 'react-native-paper';
import Header from '@/components/Header';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const pathName=usePathname()
  const[title, setTitle] = useState<string>("")

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  useEffect(()=>{
    if(pathName){
    console.log(pathName, "pathname")
    // let title = pathName.replace("/", "")
    let title = pathName.substring(1).charAt(0).toLocaleUpperCase() + pathName.substring(1).slice(1) 
    if(pathName == "/"){
      setTitle("Login")
    }else{
      setTitle(title)
    }
    
  }
  },[pathName])

  return (
    <PaperProvider>
      <Header title={title}/>
      <Stack screenOptions={{}}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>     
    </PaperProvider>
  );
}
