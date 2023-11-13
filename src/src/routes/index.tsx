import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ProjetoHome from '../pages/Home';
import NovoProjeto from '../pages/NovoProjeto'
import NovoColaborador from '../pages/NovoColaborador';
import NovaTarefa from '../pages/NovaTarefa';

const { Screen, Navigator } = createNativeStackNavigator();

export function IndexRoutes() {
    
    return (
        <Navigator initialRouteName='HomeMain' >
            <Screen
                name='HomeMain'
                options={{
                    headerShown: false,
                }}
                component={ProjetoHome}
            />
            <Screen
                name='NovoProjeto'
                options={{
                    headerShown: false,
                }}
                component={NovoProjeto}
            />
            <Screen
                name='NovoColaborador'
                options={{
                    headerShown: false,
                }}
                component={NovoColaborador}
            />
                        <Screen
                name='NovaTarefa'
                options={{
                    headerShown: false,
                }}
                component={NovaTarefa}
            />
        </Navigator>
    )
}