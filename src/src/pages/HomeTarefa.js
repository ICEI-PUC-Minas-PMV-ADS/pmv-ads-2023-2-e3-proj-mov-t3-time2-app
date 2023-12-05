import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Avatar, Button } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import TopTabRoutes from '../routes/tasktab.routes';

import {useUser} from '../contexts/UserContext';

const ProjetoHome = ({navigation}) => {

  //Para identificar quem está logado
  const {nome} = useUser('');

  return (
    <Container>
      <Header title="TaskBook" />
      
      <View style={styles.button}>
        <View>
          
        </View>
      </View>
      <NavigationContainer independent={true}>
        <TopTabRoutes />
      </NavigationContainer>
    </Container>
  );
};


const styles = StyleSheet.create({
  usuario: {
    backgroundColor: '#FFF',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 8
  },
  usuarioTxt: {
    paddingLeft: 16,
    fontSize: 18
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10
  }
});

export default ProjetoHome;
