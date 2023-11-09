import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { StackRoutes } from './stack.routes';
import EmAndamento from '../pages/EmAndamento'
import { Provider } from 'react-native-paper';
import Finalizado from '../pages/Finalizados';

function ProjetoScreen() {
      return (
        <Provider>
            <StackRoutes />
        </Provider>
    );
}

function EmAndamentoScreen() {
    return (
        <EmAndamento />
    );
}

function FinalizadosScreen() {
    return (
        <Finalizado/>
    );
}

const { Screen, Navigator } = createMaterialTopTabNavigator();

const TopTabRoutes = () => {

    return (
        <Navigator>
            <Screen name="Projetos" component={ProjetoScreen} />
            <Screen name="Em Andamento" component={EmAndamentoScreen} />
            <Screen name="Finalizados" component={FinalizadosScreen} />
        </Navigator>
    );
};

export default TopTabRoutes;
