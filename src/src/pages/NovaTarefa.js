import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Button, Appbar, TextInput} from 'react-native-paper';

import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { insertTarefa, updateTarefa, deleteTarefa } from '../services/ProjetosServicesDB';
import axios from "axios";
import { SelectList } from 'react-native-dropdown-select-list'

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';
import Status from '../components/Status';

const baseURL = "http://192.168.18.25:3000/v1/api/";

const NovaTarefa = ({ route }) => {

  const [selected, setSelected] = useState("");
  const [projetos, setProjetos] = useState([]);
  const [projetoSelecionado, setProjetoSelecionado] = useState([]);

  useEffect(() => {
    axios.get(baseURL + 'projeto').then((dados) => {
      setProjetos(dados.data.lista)
     console.log("Retornando dados de projeto", dados.data.lista)
    })
  }, []);


  const handleSelectChangeProjeto = (selectedItems) => {
    // Aqui, você pode acessar os ids dos usuários selecionados
    const idsSelecionados = projetos
      .filter(projeto => selected.includes(projeto.nome))
      .map(projeto => projeto.idProjeto);

    //setIdProjetosSelecionados(idsSelecionados);
    console.log('IDs dos projetos selecionados:', idsSelecionados);
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

  const [descricao, setDescricao] = useState('');
  const [dataInicio, setDataInicio] = useState(new Date().toLocaleDateString('pt-BR'));
  const [dataConclusao, setDataConclusao] = useState(new Date().toLocaleDateString('pt-BR'));
  const [projeto, setProjeto] = useState('');
  const [showInicio, setShowInicio] = useState(false);
  const [showFim, setShowFim] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (item) {
      setDescricao(item.descricao);
      setDataInicio(item.datainicio);
      setDataConclusao(item.dataConclusao);
      setStatus(item.status);
    }
  }, [item]);

  const handleSalvar = async () => {
    const novoStatus = status ? true : false;
  
    // Validar os campos necessários antes de prosseguir
    if ( !descricao || !dataInicio || !dataConclusao) {
      // Adicione feedback ao usuário, por exemplo, uma mensagem de erro
      console.error("Preencha todos os campos obrigatórios");
      return;
    }
  
    try { 
    console.log(selected)
     const idSelecionado = projetos
      .filter(projeto => selected===projeto.nome)
      .map(projeto => projeto.idProjeto);

         // Atualizar um projeto existente
         //console.log("descrição item handleSalvar", item)
         const tarefaAtualizada = {
           descricao: descricao,
           dataInicio: formatarData(dataInicio),
           dataConclusao: formatarData(dataConclusao),
           status: novoStatus,
           idProjeto: idSelecionado[0]
         };
         console.log(selected)
         console.log("Tarefa Criada", tarefaAtualizada)
         await axios.post(baseURL + 'task',
         tarefaAtualizada
         );
   
       // Adicione feedback ao usuário, por exemplo, uma mensagem de sucesso
       //console.log("Projeto salvo com sucesso!");
   
       navigation.goBack();
     } catch (error) {
       // Lidar com erros, adicionar feedback ao usuário se necessário
       console.error("Erro ao salvar a tarefa:", error);
     }
   };

   
  return (
    <Container>
      <Header

        title={'Cadastrar Tarefas'} goBack={() => navigation.goBack()} >

        <Appbar.Action icon="check" onPress={handleSalvar} />
      </Header>
      <ScrollView>
        <Body>
        <Status />
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

          <SelectList
            placeholder='Projeto'
            label='Projeto'
            setSelected={(val) => setSelected(val)} 
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