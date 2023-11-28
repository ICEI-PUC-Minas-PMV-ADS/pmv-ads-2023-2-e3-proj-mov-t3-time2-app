import React, { Component, useState } from 'react';
import { TextInput, Button, Text, Appbar } from 'react-native-paper';
import { StyleSheet, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'

import Container from '../components/Container.js';
import Body from '../components/Body.js';
import Logo from '../components/Logo.js';
import Input from '../components/Input';

import { useUser } from '../contexts/UserContext'
import { login } from '../services/auth.services';

const Login = () => {

  const navigation = useNavigation();
  const { setSigned, setNome } = useUser();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // TESTE LOGIN TRUE
 // const handleLoginTrue = () => {
    //setSigned(true)
 // }

  const handleLogin = () => {
    login({
      email: email,
      senha: senha,
    }).then((res) => {
      console.log("handleLogin",res);

      if (res && res.status == 200) {
        setSigned(true);
        console.log(res.user)
        //setNome(res.user[0].nome);
        setNome('Marcos Vini');
      } else {
        Alert.alert(
          'Atenção',
          'Usuário ou senha inválidos!'
        );
      }
    });
  };

  return (
    <Container>

      <View style={styles.header}>
        <Logo />
      </View>
      <Body>

        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          label="Senha"
          value={senha}
          secureTextEntry
          onChangeText={(text) => setSenha(text)}
          left={<TextInput.Icon name="key" />}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => handleLogin()}>
          Login
        </Button>
        <Button
          uppercase={false}
          mode="text"
          onPress={() => console.log('Pressed')}>
          Esqueci minha senha
        </Button>
        <Button mode="outlined"
          onPress={() => navigation.navigate('Register')}>
          Registrar
        </Button>
      </Body>

    </Container>

  );

}

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
    marginTop: 18,
    backgroundColor: '#124698',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12
  },

});

export default Login;