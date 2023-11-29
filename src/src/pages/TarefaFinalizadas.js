import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { List, Button } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';

//import { getTarefa } from '../services/TarefaServicesDB';
import { useIsFocused } from '@react-navigation/native';

const TarefaFinalizada = () => {

  const isFocused = useIsFocused();
  const [tarefa, setTarefa] = useState([]);

  /*useEffect(() => {
    getTarefa().then((dados) => {
      setTarefa(dados);
    });
  }, [isFocused]);*/

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
      <Button color="#0D7634" mode="contained">Finalizado</Button>
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

export default TarefaFinalizada;
