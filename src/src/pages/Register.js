import React, { useState } from 'react';
import { TextInput, Button, Text, Appbar } from 'react-native-paper';
import { StyleSheet, View, Alert } from 'react-native';

import Container from '../components/Container.js';
import Body from '../components/Body.js';
import Logo from '../components/Logo.js';
import Input from '../components/Input';

import { register } from '../services/auth.services';

import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState('Junia Campos');
  const [email, setEmail] = useState('juniacamposjc@gmail.com');
  const [password, setPassword] = useState('pucminas');

  const handleRegister = () => {
    register({
      nome: nome,
      email: email,
      password: password,
    }).then((res) => {
     console.log(res);

     if (res) {
        Alert.alert('Atenção', ' Usuário Cadastrado com sucesso!', [
          { text: 'OK', onPress: () => navigation.goBack() },
        ]);
     } else {
       Alert.alert(
          'Atenção',
          'Usuário não cadastrado! Tente novamente mais tarde.'
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
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="email" />}
        />
        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key" />}
        />
        <Button style={styles.button} mode="contained" onPress={handleRegister()}>
          Registrar
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate('Login')}>
          Voltar
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
    marginTop: 18,
    backgroundColor: '#124698',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12,
  },
});

export default Register;
