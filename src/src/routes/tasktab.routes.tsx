import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { StackRoutes } from './taskStack.routes';
import TarefaEmAndamento from '../pages/TarefaEmAndamento'
import { Provider } from 'react-native-paper';
import TarefaFinalizada from '../pages/TarefaFinalizadas';


function TarefaScreen() {
      return (
        <Provider>
            <StackRoutes />
        </Provider>
    );
}

function TarefaEmAndamentoScreen() {
    return (
        <TarefaEmAndamento />
    );
}

function TarefaFinalizadasScreen() {
    return (
        <TarefaFinalizada/>
    );
}

const { Screen, Navigator } = createMaterialTopTabNavigator();

const TaskRoutes = () => {

    return (
        <Navigator>
            <Screen name="Tarefa" component={TarefaScreen} /> 
            <Screen name="Em Andamento" component={TarefaEmAndamentoScreen} />
            <Screen name="Finalizados" component={TarefaFinalizadasScreen} />
        </Navigator>
    );
};

export default TaskRoutes;
