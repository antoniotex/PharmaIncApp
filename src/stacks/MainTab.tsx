import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator()

import Home from '../screens/Home'
import { COLORS } from '../constants';

export default () => (
    <Tab.Navigator screenOptions={{ headerShown:false, tabBarStyle:{backgroundColor: COLORS.primaryBlue} }}>
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarShowLabel: false,
                tabBarIcon: () => (
                    <Icon name="home" color={COLORS.secondaryBlue} size={30} />
                )
            }} />
    </Tab.Navigator>
)