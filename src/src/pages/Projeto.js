import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { List, FAB } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';

import { getProjetos } from '../services/ProjetosServicesDB';
import { useIsFocused } from '@react-navigation/native';

const Projeto = ({navigation}) => {

  const isFocused = useIsFocused();
  const [projeto, setProjeto] = useState([]);

  useEffect(() => {
    getProjetos().then((dados) => {
      setProjeto(dados);
    });
  }, [isFocused]);

  const renderitem = ({ item }) => (
    <List.Item
      title={'Projeto ' + item.nome}
      description={item.descricao}
      left={(props) => <List.Icon {...props} icon="clipboard-outline" />}
      onPress={() => navigation.navigate('novoProjeto', {item})}
    />
  );

  return (
    <Container>
      <Body>
        <FlatList
          data={projeto}
          renderItem={renderitem}
          keyExtractor={(item) => item.id}
        />
      </Body>
      <FAB
        icon="plus"
        label='Criar projeto'
        style={styles.fab}
        onPress={() => navigation.navigate('novoProjeto')}
      />
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
});

export default Projeto;
