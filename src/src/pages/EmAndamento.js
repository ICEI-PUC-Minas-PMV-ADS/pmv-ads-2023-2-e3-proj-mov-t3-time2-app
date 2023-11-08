import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { List, ProgressBar, Text, MD3Colors } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';

import { getProjetos } from '../services/ProjetosServicesDB';
import { useIsFocused } from '@react-navigation/native';

const EmAndamento = () => {

  const isFocused = useIsFocused();
  const [projeto, setProjeto] = useState([]);

  useEffect(() => {
    getProjetos().then((dados) => {
      setProjeto(dados);
    });
  }, [isFocused]);

  const renderitem = ({ item }) => (
    <View style={styles.viewBox}>
      <List.Item
        title={'Projeto ' + item.nome}
        description={item.descricao}
        left={(props) => <List.Icon {...props}  icon="calendar" />}
        right={() => <View style={{ justifyContent: 'center', borderLeftWidth: 0.2, marginLeft: 5, padding: 10 }}>
          <Text>Início: {item.datainicio}</Text>
          <Text>Fim: {item.datafim}</Text>
        </View>}
        onPress={() => navigation.navigate('novoProjeto', { item })}
      />
            <ProgressBar style={styles.progressBar} progress={0.6} indeterminate={true}/>
    </View >
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
    borderRadius: 10,
    borderWidth: 0.3,
    marginBottom: 3
  },
  progressBar: {
    width: 350,
    alignSelf: 'center',
    marginBottom: 3
  }
});

export default EmAndamento;
