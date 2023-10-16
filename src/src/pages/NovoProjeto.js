import React, {useState, useEffect} from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity} from 'react-native';
import { Text, List, FAB, Button, Appbar } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';

import {updateProjeto, insertProjeto, deleteProjeto} from '../services/projeto.services';


const NovoProjeto = ({route}) => {
  const navigation = useNavigation();
  const {item} = route.params? route.params : {};
  
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [colaborador, setColaborador] = useState('');
  const [datainicio, setDataInicio] = useState(moment(new Date()).format('DD/MM/YYYY'));
  const [datafim, setDataFim] = useState(moment(new Date()).format('DD/MM/YYYY'));
  const [tarefa, setTarefa] = useState('');

useEffect(()=> {
  if(item){
    setDataInicio(item.datainicio);
    setDataFim(item.datafim);
    setDescricao(item.descricao);
    setNome(item.nome);
    setColaborador(item.colaborador);
    setTarefa(item.tarefa);
  }
}, [item]);

  const handleSalvar = () =>{
    if(item){
      updateProjeto({
         nome: nome,
         descricao: descricao,
          colaborador: colaborador,
         dataInicio: datainicio,
         dataFim: datafim,
         tarefa: tarefa,
         id: item.id
        }).then(res => {
          navigation.goBack();
        });
    
    }else{

     insertProjeto({
          nome: nome,
         descricao: descricao,
         colaborador: colaborador,
         dataInicio: datainicio,
         dataFim: datafim,
         tarefa: tarefa,
     }).then(res => {
       navigation.goBack();
      });

    }
  };

  const handleExcluir = () =>{
   deleteProjeto(item.id).then(res => {
     navigation.goBack();
    });
  };

  return (
    <Container>
    <Header 
    
    title={'Novo Projeto'} goBack={()=> navigation.goBack()} >
    
    <Appbar.Action icon="check" onPress={handleSalvar}/>
    {
      item &&
    <Appbar.Action icon="trash-can" onPress={handleExcluir} />
    }
    </Header>
    
    <Body>

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
     <Input
      label="Colaborador"
      value={colaborador}
      onChangeText={(text) => setColaborador(text)}
    />

    {show && (
      <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode={'date'}
      is24Hour={true}
      display="dafault"
      onTouchCancel = {()=> setShow(false)}
      onchange={(event, date)=>{
        setShow(false);
        setDataInicio(moment(date).format('DD/MMM/YYYY'));
      }}
      />
    )}

    <TouchableOpacity onPress={()=> setShow(true)}>
     <Input
      label="Data Inicio"
      value={datainicio}
      onChangeText={(text) => setDataInicio(text)}
      editable={false}
    />
    </TouchableOpacity>

    {show && (
      <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode={'date'}
      is24Hour={true}
      display="dafault"
      onTouchCancel = {()=> setShow(false)}
      onchange={(event, date)=>{
        setShow(false);
        setDataFim(moment(date).format('DD/MMM/YYYY'));
      }}
      />
    )}

    
    <TouchableOpacity onPress={()=> setShow(true)}>
     <Input
      label="Data Final"
      value={datafim}
      onChangeText={(text) => setDataFim(text)}
      editable={false}
    />
    </TouchableOpacity>

     <Input
      label="Tarefa"
      value={tarefa}
      onChangeText={(text) => setTarefa(text)}
    />

     <Button 
    mode="contained"
    style={styles.buttom}
    color={'#659cf4'}
    onPress={handleSalvar}>
    Salvar 
    </Button>

    {
      item &&
      <Button
      mode ="contained"
      color={'red'}
      style={styles.button}
      onPress={handleExcluir}>
      Excluir
      </Button>
    }
    
    </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
   buttom: {
    margin: 8
  }
});
 

export default NovoProjeto;
