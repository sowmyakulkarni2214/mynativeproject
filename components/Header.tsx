import { Colors } from '@/constants/Colors';
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
    console.log(pathName, "pathname")
  const goBack = () => {
        if(pathName != '/' && pathName != '/users'){
          navigation.goBack() 
        }
          
   
    
  };

  const handleSearch = () => console.log('Searching');

  const handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={styles.container} >
      {(pathName!=='/' && pathName!=='/(admin)/users')?<Appbar.BackAction onPress={goBack} color={Colors.black}/>:""}
      <Appbar.Content title={title} />
      {/* <View style={styles.account}> */}
      <Appbar.Action style={{margin:0}} icon="bell" onPress={handleMore} color={Colors.black}/>
      <Appbar.Action style={{margin:0}}icon="account-outline" onPress={handleSearch} color={Colors.black} />
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
  height:60, 
   padding:0,
   margin:0,
   backgroundColor:Colors.white,


  }
   
   
  
  })
