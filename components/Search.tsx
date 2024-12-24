import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const Search= () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar style={styles.container}
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default Search;
const styles = StyleSheet.create({
  container:{
    marginHorizontal:10,
    backgroundColor:"white",
    borderRadius:20,
    marginTop:10

  }})