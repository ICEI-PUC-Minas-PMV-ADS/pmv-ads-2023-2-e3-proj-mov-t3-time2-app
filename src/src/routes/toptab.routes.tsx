import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { StackRoutes } from './stack.routes';

function ProjetoScreen() {
    return (
        <StackRoutes />
    );
}

function EmAndamentoScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Em andamento</Text>
        </View>
    );
}

function FinalizadosScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Finalizados</Text>
        </View>
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
