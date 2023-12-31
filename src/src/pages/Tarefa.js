import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { List, FAB, Text, Dialog, Portal, Modal, Button } from 'react-native-paper';
import axios from "axios";
import Container from '../components/Container';
import Body from '../components/Body';

import { getItems, getProjetos } from '../services/ProjetosServicesDB';
import { useIsFocused } from '@react-navigation/native';

const Tarefa = ({ navigation }) => {

  const isFocused = useIsFocused();
  const [tarefa, setTarefa] = useState([]);
  //Puxar no BD o item
  const [item, setItem] = useState([])

  const baseURL = "http://192.168.18.25:3000/v1/api/";
  useEffect(() => {
    axios.get(baseURL+'task').then((dados) => {
      setTarefa(dados.data.lista)
      console.log(dados.data.lista)
    });
    //axios.get(baseURL+'user').then((user) => {
   //   setProjeto(user.data.lista)
   //   console.log(user.data.lista)
   // })
    getItems().then((dados) => {
      setItem(dados)
    })
  }, [isFocused]);

  const renderitem = ({ item }) => (
    <View style={styles.viewBox}>
      <View style={styles.viewList}>
        <List.Item
          description={item.descricao}
          left={(props) => <List.Icon {...props} icon="calendar" />}
        />
      </View>
      <View style={styles.button}>
        <Button icon="lead-pencil" color="#45e" mode="elevated" onPress={() => navigation.navigate('editarTarefa', { item })}>Editar</Button>
        <Button icon="eye-outline" color="green" mode="elevated">abrir</Button>
      </View>

    </View>

  );
  
 
  return (

    <Container>
      <Body>
        <FlatList
          data={tarefa}
          renderItem={renderitem}
          keyExtractor={(item) => item.id}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  viewBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 0.2
  },
  viewList: {
    width: 260
  },
  button: {
    borderLeftWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});

export default Tarefa;