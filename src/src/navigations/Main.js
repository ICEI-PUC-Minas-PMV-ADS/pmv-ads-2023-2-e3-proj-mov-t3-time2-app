import React, {useState} from 'react';
import { BottomNavigation } from 'react-native-paper';

import Projeto from '../pages/Projeto';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';

const Main = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'projeto', title: 'Projetos', icon: 'file-chart' },
    { key: 'perfil', title: 'Perfil', icon: 'account-edit' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    projeto: Projeto,
    perfil: Perfil,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Main;
