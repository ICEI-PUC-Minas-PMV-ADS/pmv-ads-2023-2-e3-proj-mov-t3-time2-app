import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Avatar, Button } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import TopTabRoutes from '../routes/toptab.routes';

const ProjetoHome = ({navigation}) => {

  return (
    <Container>
      <Header title="TaskBook" />
      <View style={styles.usuario}>
        <Avatar.Text size={48} label="J" />
        <Text style={styles.usuarioTxt}> Junia Campos</Text>
      </View>
      <View style={styles.button}>
        <View>
          <Button icon="account-plus-outline" mode="contained" onPress={() => navigation.navigate('NovoColaborador')}>
            Colaboradores
          </Button>
          <Button style={{marginTop: 5}}icon="clipboard-plus-outline" mode="contained" onPress={() => navigation.navigate('NovaTarefa')}>
            Tarefas
          </Button>
        </View>
        <View><Button style={{backgroundColor: 'blue'}} icon="plus" mode="contained"  onPress={() => navigation.navigate('NovoProjeto')}>
          Criar Projeto
        </Button>
        <Button disabled={true} style={{backgroundColor: '#EBEBEB', marginTop: 5}} icon="notebook-multiple" mode="contained"  onPress={() => navigation.navigate('NovoProjeto')}>
          Relatórios
        </Button>
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
