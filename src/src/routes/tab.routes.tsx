import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Perfil from '../pages/Perfil'
import HomeTarefa from '../pages/HomeTarefa'
import { IndexRoutes } from '.';

const { Screen, Navigator } = createBottomTabNavigator()

export default function TabRoutes() {
    return (
        
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='Home'
                component={IndexRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home' size={36} color={color} />
                }}
            />
            <Screen
                name='Tarefa'
                component={HomeTarefa}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='book-edit' size={36} color={color} />
                }}
            />
            <Screen
                name='Perfil'
                component={Perfil}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='account-edit' size={36} color={color} />
                }}
            />

        </Navigator>
    )
}