import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Projeto from '../pages/Projeto'
import NovoProjeto from '../pages/NovoProjeto'
import EditarProjeto from '../pages/EditarProjeto'


const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    
    return (
        <Navigator initialRouteName='viewProjeto' >
            <Screen
                name='projeto'
                options={{
                    headerShown: false,
                }}
                component={Projeto}
            />
            <Screen
                name='novoProjeto'
                options={{
                    headerShown: false,
                }}
                component={NovoProjeto}
            />
            <Screen
                name='editarProjeto'
                options={{
                    headerShown: false,
                }}
                component={EditarProjeto}
            />
        </Navigator>
    )
}