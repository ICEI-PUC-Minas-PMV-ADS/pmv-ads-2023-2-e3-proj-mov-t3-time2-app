import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import TopTabRoutes from '../routes/toptab.routes';

const ProjetoHome = () => {
  return (
    <Container>
      <Header title="TaskBook" />
      <View style={styles.usuario}>
          <Avatar.Text size={48} label="H" />
          <Text style={styles.usuarioTxt}> Hugo Ferreira</Text>
        </View>
      <NavigationContainer independent={true}>
        <TopTabRoutes/>
      </NavigationContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  usuario: {
    backgroundColor: '#FFF',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 8
  },
  usuarioTxt: {
    paddingLeft: 16,
    fontSize: 18
  }
});

export default ProjetoHome;
