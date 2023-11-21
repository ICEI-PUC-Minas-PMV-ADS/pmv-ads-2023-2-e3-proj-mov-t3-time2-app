import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { List, FAB, Text, Dialog, Portal, Modal, Button } from 'react-native-paper';
import axios from "axios";
import Container from '../components/Container';
import Body from '../components/Body';

import { getItems, getProjetos } from '../services/ProjetosServicesDB';
import { useIsFocused } from '@react-navigation/native';

const Projeto = ({ navigation }) => {

  const isFocused = useIsFocused();
  const [projeto, setProjeto] = useState([]);
  //Puxar no BD o item
  const [item, setItem] = useState([])

  const baseURL = "http://192.168.18.25:3000/v1/api/";
  useEffect(() => {
    axios.get(baseURL+'projeto').then((dados) => {
      setProjeto(dados.data.lista)
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
          title={'Projeto ' + item.nome}
          description={item.descricao}
          left={(props) => <List.Icon {...props} icon="calendar" />}
        />
      </View>
      <View style={styles.button}>
        <Button icon="lead-pencil" color="#45e" mode="elevated" onPress={() => navigation.navigate('novoProjeto', { item })}>Editar</Button>
        <Button icon="eye-outline" color="green" mode="elevated" onPress={showModal}>abrir</Button>
      </View>

    </View>

  );
  //Modal - 4 constantes
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };
 
  return (

    <Container>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <FlatList
          data={item}
          renderItem={renderitem}
          keyExtractor={(item) => item.id}
        />
        </Modal>
      </Portal>
      <Body>
        <FlatList
          data={projeto}
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

export default Projeto;
