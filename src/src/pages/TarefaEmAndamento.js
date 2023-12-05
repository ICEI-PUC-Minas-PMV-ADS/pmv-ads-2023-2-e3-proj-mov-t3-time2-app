import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { List, Button } from 'react-native-paper';
import axios from "axios";

import Container from '../components/Container';
import Body from '../components/Body';

import { getProjetos } from '../services/ProjetosServicesDB';
import { useIsFocused } from '@react-navigation/native';

const TarefaEmAndamento = () => {

  const isFocused = useIsFocused();
  const [tarefa, setTarefa] = useState([]);
  const baseURL = "http://192.168.18.25:3000/v1/api/";

  useEffect(() => {
    axios.get(baseURL+'task').then((dados) => {
      setTarefa(dados.data.lista)
      console.log(dados.data.lista)
    });
  }, [isFocused]);

  const renderitem = ({ item }) => (
    <View style={styles.viewBox}>
      <View style={styles.viewList}>
        <List.Item
          title={'Tarefa ' + item.descricao}
          description={item.descricao}
          left={(props) => <List.Icon {...props} icon="calendar" />}
        />
      </View>
      <View>
      <Button color="#620B66" mode="contained">Em andamento</Button>
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#659cf4',
  },
  viewBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 0.2,
    alignItems: 'center'
  },
  viewList: {
    width: 190
  }
});

export default TarefaEmAndamento;
