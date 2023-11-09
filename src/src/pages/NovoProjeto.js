import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, Appbar, TextInput, Text} from 'react-native-paper';

import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { insertProjetos, deleteProjetos, updateProjetos } from '../services/ProjetosServicesDB';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';
import Status from '../components/Status';


const NovoProjeto = ({ route }) => {

  const handleAddColab = () => {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };
  
    const newItems = [...items, newItem];
  
    setItems(newItems);
    setInputValue('');
  };



  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode(date);
  };
  
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [colaborador, setColaborador] = useState([]);
  const [dataInicio, setDataInicio] = useState(new Date().toLocaleDateString('pt-BR'));
  const [dataFim, setDataFim] = useState(new Date().toLocaleDateString('pt-BR'));
  const [tarefa, setTarefa] = useState('');
  const [showInicio, setShowInicio] = useState(false);
  const [showFim, setShowFim] = useState(false);

  useEffect(() => {
    if (item) {
      setNome(item.nome);
      setDescricao(item.descricao);
      setColaborador(item.colaborador);
      setDataInicio(item.datainicio);
      setDataFim(item.datafim);
      setTarefa(item.tarefa);
    }
  }, [item]);

  const handleSalvar = () => {
    if (item) {
      updateProjetos(
        {
          nome: nome,
          descricao: descricao,
          colaborador: colaborador,
          datainicio: dataInicio,
          datafim: dataFim,
          tarefa: tarefa,
          id: item.id
        }
      ).then();
    } else {
      insertProjetos(
        {
          nome: nome,
          descricao: descricao,
          colaborador: colaborador,
          datainicio: dataInicio,
          datafim: dataFim,
          tarefa: tarefa
        }
      ).then();
    }
    navigation.goBack()
  }
  const handleExcluir = () => {
    deleteProjetos(item.id).then();
    navigation.goBack();
  };

  return (
    <Container>
      <Header

        title={'Novo Projeto'} goBack={() => navigation.goBack()} >

        <Appbar.Action icon="check" onPress={handleSalvar} />
        {
          <Appbar.Action icon="trash-can" onPress={handleExcluir} />
        }
      </Header>
      <ScrollView>
        <Body>
          <Status />
          <Input
            label="Nome do Projeto"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <Input
            label="Descrição"
            value={descricao}
            onChangeText={(text) => setDescricao(text)}
          />
          <View style={styles.colabField}>
          <Input
          style={styles.colabFieldBox}
            label="Colaborador"
            value={colaborador}
            onChangeText={(text) => setColaborador(text)}
          />
          <Button labelStyle={{ fontSize: 36 }} style={styles.colabButton} icon="account-plus-outline" mode="outlined-tonel" onPress={() => console.log('Pressed')}>
    
            </Button>
          </View>
          


          {showInicio && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              onTouchCancel={() => setShowInicio(false)}
              onChange={(event, date) => {
                setShowInicio(false);
                setDataInicio(date.toLocaleDateString('pt-BR'));
              }}
            />
          )}


          <TouchableOpacity onPress={() => setShowInicio(true)}>
            <Input
              label="Data Início"
              value={dataInicio}
              left={<TextInput.Icon icon="calendar" />}
              editable={false}

            />
          </TouchableOpacity>

          {showFim && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              onTouchCancel={() => setShowFim(false)}
              onChange={(event, date) => {
                setShowFim(false);
                setDataFim(date.toLocaleDateString('pt-BR'));
              }}
            />
          )}


          <TouchableOpacity onPress={() => setShowFim(true)}>
            <Input
              label="Data Fim"
              value={dataFim}
              left={<TextInput.Icon icon="calendar" />}
              editable={false}
            />
          </TouchableOpacity>

          <View style={styles.colabField}>
          <Input
          style={styles.colabFieldBox}
          label="Tarefa"
          value={tarefa}
          onChangeText={(text) => setTarefa(text)}
          />
          <Button labelStyle={{ fontSize: 36 }} style={styles.colabButton} icon="file-sign" mode="outlined-tonel" onPress={() => console.log('Pressed')}>
    
            </Button>
          </View>
          <Button
            mode="contained"
            style={styles.buttom}
            color={'#4682B4'}
            onPress={handleSalvar}>
            Salvar
          </Button>

          {
            <Button
              mode="contained"
              color={'red'}
              style={styles.buttom}
              onPress={handleExcluir}>
              Excluir
            </Button>
          }
        </Body>
      </ScrollView>
    </Container >
  );
};

const styles = StyleSheet.create({
  colabField: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  colabFieldBox:{
    width: 300,
    backgroundColor: '#fff',
    marginBottom:4
  },
  buttom: {
    margin: 8
  },
  colabButton: {
    alignSelf: 'center'
  }
});


export default NovoProjeto;
