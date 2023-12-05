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

const EditarProjeto = ({ route }) => {
  const [selected, setSelected] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [projeto, setProjetos] = useState([]);
  const [tarefas, setTarefas] = useState([]);
  const [usuariosSelecionados, setUsuariosSelecionados] = useState([]);   
  const [idUsuariosSelecionados, setIdUsuariosSelecionados] = useState([]);
  const [tarefaSelecionada, setTarefaSelecionada] = useState([]);

  
  useEffect(() => {
    axios.get(baseURL + 'user').then((dados) => {
      setUsuarios(dados.data.lista)
    //console.log("Retornando dados de usuario:", dados.data.lista)
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
    console.log('IDs dos usuários selecionados:', idsSelecionados);
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
      //console.log("descrição item", item)
      setNome(item.nome);
      setDescricao(item.descricao);
      setColaborador(item.colaborador);
      setDataInicio(item.datainicio);
      setDataFim(item.datafim);
      setTarefa(item.tarefa);
      setStatus(item.status);
    }
  }, [item]);


  const handleSalvar = async () => {
    const novoStatus = status ? true : false;
  
    // Validar os campos necessários antes de prosseguir
    if (!nome || !descricao || !dataInicio || !dataFim) {
      // Adicione feedback ao usuário, por exemplo, uma mensagem de erro
      console.log("Preencha todos os campos obrigatórios");
      return;
    }
  
    try { //console.log("descrição item",item)
     // if (item) {
        // Atualizar um projeto existente
        console.log("descrição item handleSalvar", item)
        const projetoAtualizado = {
          nome: nome,
          descricao: descricao,
          dataInicio: formatarData(dataInicio),
          dataConclusao: formatarData(dataFim),
          status: novoStatus,
        };

        console.log("Projeto Atualizado", projetoAtualizado)
        await axios.put(baseURL + 'projeto/idProjeto?idProjeto=' + item.idProjeto,
          projetoAtualizado
        );
  
        // Atualizar a relação entre usuários e projeto
        console.log(idUsuariosSelecionados)
          idUsuariosSelecionados.map(async userId => {
            if(userId){
              console.log("ids", item.idProjeto, userId)
            await axios.post(baseURL + 'user_projeto', {
              idProjeto: item.idProjeto,
              idUser: userId,
            });
            }
          })

      // Adicione feedback ao usuário, por exemplo, uma mensagem de sucesso
      //console.log("Projeto salvo com sucesso!");
  
      // Navegar de volta após o salvamento
      navigation.goBack();
    } catch (error) {
      // Lidar com erros, adicionar feedback ao usuário se necessário
      console.error("Erro ao salvar o projeto:", error);
    }
  };
  

  const handleExcluir = async () => {
    try {
      await axios.delete(baseURL + 'projeto/idProjeto?idProjeto=' + item.idProjeto)
    } catch (error) {
      console.error("Erro ao deletar o projeto:", error);
    }    
    navigation.goBack();
  };

  return (
    <Container>
      <Header

        title={'Editar Projeto'} goBack={() => navigation.goBack()} >

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


export default EditarProjeto;
