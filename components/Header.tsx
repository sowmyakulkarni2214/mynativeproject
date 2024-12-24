import { useNavigation, usePathname, useRouter } from 'expo-router';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = ({ title}:{title:string}) => {
    // const Header = () => {
    const navigation = useNavigation()
    const router = useRouter()
    const pathName = usePathname()
    // const [title,setTitle] = React.useState<string>("")

    // React.useEffect(()=>{
    //     if(pathname){
    //         let title = pathname.split("/")
    //         setTitle(title[1])
    //     }
    // }, [pathname])
  const _goBack = () => {
        navigation.goBack()   
    // else{
    //     console.log(title)
    // }   
    
  };

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={styles.container} >
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title={title} />
      {/* <View style={styles.account}> */}
      <Appbar.Action style={{margin:0}} icon="bell" onPress={_handleMore} />
      <Appbar.Action style={{margin:0}}icon="account-outline" onPress={_handleSearch} />
      {/* </View> */}
    
      
      
    </Appbar.Header>
  );
};

// const RenderedPage = () => {
//     return (
//       <React.Suspense>
//         <Header />
//       </React.Suspense>
//     );
//   };
  
  export default Header;

  const styles = StyleSheet.create({
  container:{
height:40, 
   padding:0,
   margin:0,

  }
   
   
  
  })
