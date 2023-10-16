import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function ProfileScreen({ navigation }) {
  // Suponha que você tenha informações de perfil do usuário, como nome, email, foto, etc.
  const userProfile = {
    name: 'Seu Nome',
    email: 'seuemail@example.com',
    // Outras informações do perfil
  };

  return (
    <View style={styles.container}>
      {/* Exibir a foto do perfil aqui */}
      {/* <Image source={userProfile.photo} style={styles.profileImage} /> */}

      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.text}>{userProfile.name}</Text>

      <Text style={styles.label}>E-mail:</Text>
      <Text style={styles.text}>{userProfile.email}</Text>

      {/* Outras informações do perfil podem ser exibidas aqui. */}

      <Button title="Editar Perfil" onPress={() => navigation.navigate('EditarPerfil')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  // profileImage: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50,
  // },
});

export default ProfileScreen;
