import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from '../pages/Home'
import Projeto from '../pages/Projeto'
import Perfil from '../pages/Perfil'

const { Screen, Navigator } = createBottomTabNavigator()

export default function TabRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home' size={size} color={color} />
                }}

            />
            <Screen
                name='Projeto'
                component={Projeto}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='file-chart' size={size} color={color} />
                }}
            />
            <Screen
                name='Perfil'
                component={Perfil}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='account-edit' size={size} color={color} />
                }}
            />

        </Navigator>
    )
}