import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './views/Home'
import FleetBuilder from './views/FleetBuilder'
import { homePage, fleetBuilder } from './constants/navigation'

const Tab = createBottomTabNavigator()

const App: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={homePage}>
        <Tab.Screen name={homePage} component={Home} />
        <Tab.Screen name={fleetBuilder} component={FleetBuilder} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
