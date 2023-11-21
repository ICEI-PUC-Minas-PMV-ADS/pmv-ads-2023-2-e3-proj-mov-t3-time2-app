import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Button, Appbar, TextInput} from 'react-native-paper';

import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { insertTarefa, updateTarefa, deleteTarefa } from '../services/ProjetosServicesDB';
import axios from "axios";
import { MultipleSelectList } from 'react-native-dropdown-select-list'

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';

const baseURL = "http://192.168.18.25:3000/v1/api/";

const NovaTarefa = ({ route }) => {

  const [selected, setSelected] = React.useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [projetos, setProjetos] = useState([]);
  const [usuariosSelecionados, setUsuariosSelecionados] = useState([]);   
  const [idUsuariosSelecionados, setIdUsuariosSelecionados] = useState([]);
  const [projetoSelecionado, setProjetoSelecionado] = useState([]);

  useEffect(() => {
    axios.get(baseURL + 'user').then((dados) => {
      setUsuarios(dados.data.lista)
     // console.log("Retornando dados de usuario:", dados.data.lista)
    });
    axios.get(baseURL + 'projeto').then((dados) => {
      setProjetos(dados.data.lista)
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

  const handleSelectChangeProjeto = (projeto) => {
    setProjetoSelecionado(projeto);
    console.log(projetoSelecionado);
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

  const [descricao, setDescricao] = useState('');
  const [colaborador, setColaborador] = useState('');
  const [dataInicio, setDataInicio] = useState(new Date().toLocaleDateString('pt-BR'));
  const [dataConclusao, setDataConclusao] = useState(new Date().toLocaleDateString('pt-BR'));
  const [projeto, setProjeto] = useState('');
  const [showInicio, setShowInicio] = useState(false);
  const [showFim, setShowFim] = useState(false);

  useEffect(() => {
    if (item) {
      setDescricao(item.descricao);
      setColaborador(item.colaborador);
      setDataInicio(item.datainicio);
      setDataConclusao(item.dataConclusao);
      setProjeto(item.Projeto);
    }
  }, [item]);

  const handleSalvar = () => {
    if (item) {
      updateTarefa(
        {
          descricao: descricao,
          colaborador: colaborador,
          datainicio: dataInicio,
          dataConclusao: dataConclusao,
          projeto: projeto,
          id: item.id
        }
      ).then();
    } else {
      insertTarefa(
        {
          descricao: descricao,
          colaborador: colaborador,
          datainicio: dataInicio,
          dataConclusao: dataConclusao,
          projeto: projeto
        }
      ).then();
    }
    navigation.goBack()
  }
  const handleExcluir = () => {
    deleteTarefa(item.id).then();
    navigation.goBack();
  };

  return (
    <Container>
      <Header

        title={'Cadastrar Tarefas'} goBack={() => navigation.goBack()} >

        <Appbar.Action icon="check" onPress={handleSalvar} />
        {
          <Appbar.Action icon="trash-can" onPress={handleExcluir} />
        }
      </Header>
      <ScrollView>
        <Body>
          <Input
            label="Descrição da Tarefa"
            value={descricao}
            onChangeText={(text) => setDescricao(text)}
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
              value={dataConclusao}
              left={<TextInput.Icon icon="calendar" />}
              editable={false}
            />
          </TouchableOpacity>

          <MultipleSelectList
            placeholder='Colaborador'
            label="Colaborador"
            setSelected={handleSelectChange}
            data={usuarios.map(usuario => ({ value: usuario.nome, label: usuario.nome }))}
            save="value"
            boxStyles={{ borderRadius: 5, backgroundColor: "#FFF", borderWidth: 0, marginBottom: 4 }}
            dropdownStyles={{ borderRadius: 5, backgroundColor: "#FFF", borderWidth: 0, marginBottom: 4, marginTop: 2 }}
          />
          <MultipleSelectList
            placeholder='Projeto'
            label='Projeto'
            setSelected={handleSelectChangeProjeto}
            data={projetos.map(projeto => ({ value: projeto.nome, label: projeto.nome }))} 
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


export default NovaTarefa;