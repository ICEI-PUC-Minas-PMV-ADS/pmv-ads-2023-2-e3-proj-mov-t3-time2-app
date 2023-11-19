import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, Appbar, TextInput, Text } from 'react-native-paper';

import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { insertProjetos, deleteProjetos, updateProjetos } from '../services/ProjetosServicesDB';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list'
import axios from "axios"

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';
import Status from '../components/Status';

const baseURL = "http://192.168.18.25:3000/v1/api/";

const NovoProjeto = ({ route }) => {
  const [selected, setSelected] = React.useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [tarefas, setTarefas] = useState([]);
  const [usuariosSelecionados, setUsuariosSelecionados] = useState([]);   
  const [idUsuariosSelecionados, setIdUsuariosSelecionados] = useState([]);
  const [tarefaSelecionada, setTarefaSelecionada] = useState([]);

  useEffect(() => {
    axios.get(baseURL + 'user').then((dados) => {
      setUsuarios(dados.data.lista)
     // console.log("Retornando dados de usuario:", dados.data.lista)
    });
    axios.get(baseURL + 'task').then((dados) => {
      setTarefas(dados.data.lista)
     // console.log("Retornando dados de tarefa", dados.data.lista)
    })
  }, []);

  const handleSelectChange = (selectedItems) => {
    
    const selectedNomes = Array.isArray(selectedItems) ?
      selectedItems.map(item => item.value) :
      [];
      console.log(selectedNomes)
    setUsuariosSelecionados(selectedNomes);

    // Aqui, você pode acessar os ids dos usuários selecionados
    const idsSelecionados = usuarios
      .filter(usuario => selectedNomes.includes(usuario.nome))
      .map(usuario => usuario.idUser);

    setIdUsuariosSelecionados(idsSelecionados);
    console.log('IDs dos usuários selecionados:', idsSelecionados);
  };

  const handleSelectChangeTarefa = (tarefa) => {
    setTarefaSelecionada(tarefa);
    console.log(tarefaSelecionada);
  };


  /* const data = [
    { key: '1', value: 'João', disabled: true },
    { key: '2', value: 'Maria' },
    { key: '3', value: 'Márcia' },
    { key: '4', value: 'Ana', disabled: true },
    { key: '5', value: 'Pedro' },
    { key: '6', value: 'Jairo' },
    { key: '7', value: 'João Silva' },
  ] */

 /* const dataTarefa = [
    { key: '1', value: 'Task1', disabled: true },
    { key: '2', value: 'Task2' },
    { key: '3', value: 'Task3' },
    { key: '4', value: 'Task4', disabled: true },
    { key: '5', value: 'Task5' },
    { key: '6', value: 'Task6' },
    { key: '7', value: 'Task7' },
  ]*/

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
  const [colaborador, setColaborador] = useState('');
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


          <MultipleSelectList
            placeholder='Colaborador'
            label="Colaborador"
            setSelected={handleSelectChange}
            data={usuarios.map(usuario => ({ value: usuario.nome, label: usuario.nome }))}
            save="value"
            boxStyles={{ borderRadius: 5, backgroundColor: "#FFF", borderWidth: 0, marginBottom: 4 }}
            dropdownStyles={{ borderRadius: 5, backgroundColor: "#FFF", borderWidth: 0, marginBottom: 4, marginTop: 2 }}
          />
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

          <MultipleSelectList
            placeholder='Tarefas'
            label='Tarefa'
            setSelected={handleSelectChangeTarefa}
            //data={dataTarefa}
            data={tarefas.map(tarefa => ({ value: tarefa.descricao, label: tarefa.descricao }))} 
            save="value"
            boxStyles={{ borderRadius: 5, backgroundColor: "#FFF", borderWidth: 0, marginBottom: 4 }}
            dropdownStyles={{ borderRadius: 5, backgroundColor: "#FFF", borderWidth: 0, marginBottom: 4, marginTop: 2 }}
          />
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
  colabFieldBox: {
    width: 300,
    backgroundColor: '#fff',
    marginBottom: 4
  },
  buttom: {
    margin: 8
  },
  colabButton: {
    alignSelf: 'center'
  }
});


export default NovoProjeto;
