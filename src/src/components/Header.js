import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import Login from '../pages/Login';

const Header = ({ title, goBack, children }) => {

  const handleLogOut = () => {
    setSigned(false)
  } ;
  return (
    <Appbar.Header style={styles.container}>
      {
        goBack &&
        <Appbar.BackAction onPress={goBack} />
      }
      <Appbar.Content style={styles.content} title={title} />
      {children}
       <Appbar.Action icon="logout" onPress={console.log('deslogado')} />
    </Appbar.Header>);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginTop: 0,
    height: 70
  },
});

export default Header;
