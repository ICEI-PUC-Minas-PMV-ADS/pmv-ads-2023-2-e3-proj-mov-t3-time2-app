import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { Button, List, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
//import { useIsFocused } from '@react-navigation/native';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';

import { getProjeto } from '../services/projeto.services.js';
import {useUser} from '../contexts/UserContext';

const DATA = [
  {
    id: 1,
    nome: 'Limpa Arquivo',
    descricao: 'Devolver todo o arquivo físico dos clientes ate o fim do ano.',
    colaborador: 'Junia Campos',
    dataInicio: '01/01/2023',
    dataFim: '31/12/2023',
    tarefa1: 'Fazer levantamento empresas',
    tarefa2: 'Arquivar documentos pendentes',
    tarefa3: 'Organizar Caixas',
    tarefa4: 'Entregar ao cliente',
  },
  {
    id: 1,
    nome: 'Happy Boss',
    descricao: 'Não reclame e deixe seu chefe feliz.',
    colaborador: 'Julia Campos',
    dataInicio: '05/01/2023',
    dataFim: '...',
    tarefa1: 'Pense antes de reclamar.',
    tarefa2: 'Não respire perto dele.',
  },
  {
    id: 1,
    nome: 'Happy Boss',
    descricao: 'Não reclame e deixe seu chefe feliz.',
    colaborador: 'Julia Campos',
    dataInicio: '05/01/2023',
    dataFim: '...',
    tarefa1: 'Pense antes de reclamar.',
    tarefa2: 'Não respire perto dele.',
  },
];



const Projeto = () => {
  const navigation = useNavigation();
  const {name} = useUser();
  //const isFocused = useIsFocused();
  const [projeto, setProjeto] = useState([]);

  useEffect(() => {
   getProjeto().then((dados) => {
     console.log(dados);
    setProjeto(dados);
   });
  }, []);

  const renderitem = ({ item }) => (
    <List.Item
      title={'Projeto ' + item.nome}
      description={item.descricao}
      left={(props) => <List.Icon {...props} icon="clipboard-outline" />}
      onPress={() => navigation.navigate('NovoProjeto', { item })}
    />
  );

  return (
    <Container>
      <Header title="TaskBook" />

      <Body>
        <Button
          style={styles.buttom}
          icon="camera"
          mode="contained"
          onPress={() => navigation.navigate('NovoProjeto')}>
          Criar Projeto
        </Button>

        <FlatList
          data={DATA}
          renderItem={renderitem}
          keyExtractor={(item) => item.id}
        />
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('NovoProjeto')}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttom: {
    margin: 8,
    backgroundColor: '#659cf4',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#659cf4',
  },
});

export default Projeto;
