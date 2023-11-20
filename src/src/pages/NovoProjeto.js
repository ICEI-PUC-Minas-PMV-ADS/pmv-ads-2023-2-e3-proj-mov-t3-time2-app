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
  const [projeto, setProjetos] = useState([]);
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
     // console.log(selected)
    setUsuariosSelecionados(selectedNomes);

    // Aqui, você pode acessar os ids dos usuários selecionados
    const idsSelecionados = usuarios
      .filter(usuario => selected.includes(usuario.nome))
      .map(usuario => usuario.idUser);

    setIdUsuariosSelecionados(idsSelecionados);
   // console.log('IDs dos usuários selecionados:', idsSelecionados);
  };

  const handleSelectChangeTarefa = (tarefa) => {
    setTarefaSelecionada(tarefa);
   // console.log(tarefaSelecionada);
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

  const formatarData = (dataString) => {
      const [dia, mes, ano] = dataString.split('/');
      const data = new Date(`${ano}-${mes}-${dia}T00:00:00.000Z`);
      const anoFormatado = data.getUTCFullYear();
      const mesFormatado = ('0' + (data.getUTCMonth() + 1)).slice(-2);
      const diaFormatado = ('0' + data.getUTCDate()).slice(-2);
      const horasFormatadas = ('0' + data.getUTCHours()).slice(-2);
      const minutosFormatados = ('0' + data.getUTCMinutes()).slice(-2);
      const segundosFormatados = ('0' + data.getUTCSeconds()).slice(-2);
    
      const dataFormatada = `${anoFormatado}-${mesFormatado}-${diaFormatado}T${horasFormatadas}:${minutosFormatados}:${segundosFormatados}.000Z`;
    
      return dataFormatada;
    
  }

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [colaborador, setColaborador] = useState('');
  const [dataInicio, setDataInicio] = useState(new Date());
  const [dataFim, setDataFim] = useState(new Date());
  const [tarefa, setTarefa] = useState('');
  const [showInicio, setShowInicio] = useState(false);
  const [showFim, setShowFim] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (item) {
      setNome(item.nome);
      setDescricao(item.descricao);
      setColaborador(item.colaborador);
      setDataInicio(item.datainicio);
      setDataFim(item.datafim);
      setTarefa(item.tarefa);
      setStatus(item.status);
    }
  }, [item]);

  const handleSalvar = () => {
   // if (item) {
     //useEffect(() => {
      console.log(baseURL + 'projeto/nome?nome='+'"'+nome+'"')
       axios.get(baseURL + 'projeto/nome?nome='+'"'+nome+'"'
        ).then((dados) => {
         console.log(dados.data.lista)
          setProjetos(dados.data.lista)
         axios.put(baseURL + 'projeto/idProjeto?idProjeto='+dados.data.lista[0].idProjeto,
          {
            nome: nome,
            descricao: descricao,
            dataInicio: formatarData(dataInicio),
            dataConclusao: formatarData(dataFim),
            status: novoStatus
          }
        ).then((dados) => {
          setUsuarios(dados.data.lista)
          console.log("Retornando dados de usuario:", dados.data.lista)
        });
          console.log("Retornando dados de projetos:", dados.data.lista)
        });
     // }, []);

        console.log("dados de projeto",projeto)
        const novoStatus = status ? true : false
        

        /*selected.map(item => {
          useEffect(() => {
            axios.post(baseURL + 'user_projeto',
              {
                nome: nome,
                descricao: descricao,
                dataInicio: dataInicio,
                dataConclusao: dataFim,
              }
            ).then((dados) => {
              setUsuarios(dados.data.lista)
              console.log("Retornando dados de usuario:", dados.data.lista)
            });
          }, []);})*/


      /*updateProjetos(
        {
          nome: nome,
          descricao: descricao,
          colaborador: colaborador,
          datainicio: dataInicio,
          datafim: dataFim,
          tarefa: tarefa,
          id: item.id
        }
      ).then();*/
    //} else {
    //  insertProjetos(
     //   {
     //     nome: nome,
     //     descricao: descricao,
     //     colaborador: colaborador,
     //     datainicio: dataInicio,
      //    datafim: dataFim,
     //     tarefa: tarefa
      //  }
     // ).then();
   // }
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
            setSelected={(val) => setSelected(val)}
            onSelect={handleSelectChange}
            serch={true}
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
