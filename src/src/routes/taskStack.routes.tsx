import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Tarefa from '../pages/Tarefa'
import NovaTarefa from '../pages/NovaTarefa'
import EditarTarefa from '../pages/EditarTarefa'



const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    
    return (
        <Navigator initialRouteName='viewTarefa' >
            <Screen
                name='tarefa'
                options={{
                    headerShown: false,
                }}
                component={Tarefa}
            />
            <Screen
                name='novaTarefa'
                options={{
                    headerShown: false,
                }}
                component={NovaTarefa}
            />
            <Screen
                name='editarTarefa'
                options={{
                    headerShown: false,
                }}
                component={EditarTarefa}
            />
        </Navigator>
    )
}