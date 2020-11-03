import React, { FC, useEffect, useState } from 'react'
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import Home from './views/Home'
import FleetBuilder from './views/fleet-builder'
import { homePage, fleetBuilder } from './constants/navigation'

const Tab = createBottomTabNavigator()

const App: FC = () => {
  useEffect(() => {
    const loadAssets = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      })
    }
    loadAssets()
  })
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
