import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Appbar, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';

import { insertProjetos, deleteProjetos, updateProjetos } from '../services/ProjetosServicesDB';

const NovoProjeto = ({ route }) => {
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
  buttom: {
    margin: 8
  }
});


export default NovoProjeto;
