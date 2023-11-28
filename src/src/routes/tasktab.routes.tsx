import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { StackRoutes } from './stack.routes';
import EmAndamento from '../pages/EmAndamento'
import { Provider } from 'react-native-paper';
import Finalizado from '../pages/Finalizados';
import Tarefa from '../pages/HomeTarefa';
import NovaTarefa from '../pages/NovaTarefa';

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

const TaskRoutes = () => {

    return (
        <Navigator>
            <Screen name="Tarefa" component={NovaTarefa} /> 
            <Screen name="Em Andamento" component={EmAndamentoScreen} />
            <Screen name="Finalizados" component={FinalizadosScreen} />
        </Navigator>
    );
};

export default TaskRoutes;
