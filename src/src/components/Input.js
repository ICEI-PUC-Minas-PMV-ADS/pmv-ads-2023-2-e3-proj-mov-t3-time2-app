import React from 'react';
import { TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';



const Header = (props) =>{
  return (
    <TextInput
    style={styles.input} 
    keyboardtype='decimal=pad'
    {...props}
    />)
    ;
};

const styles = StyleSheet.create({
  input:{
    backgroundColor: '#fff',
    marginBottom:8
  },
});

export default Header;
