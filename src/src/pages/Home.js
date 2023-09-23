import React, {useStare} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Perfil from './Perfil';
import Projetos from './Projetos';

const Home = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'projetos', title: 'Projetos', icon: 'gas-station' },
        { key: 'perfil', title: 'Perfil', icon: 'calculator' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        projetos: Projetos,
        perfil: Perfil,

    });

    return (
        <BottomNavigation
            state={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default Home;
