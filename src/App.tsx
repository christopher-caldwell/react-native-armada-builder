import React, { FC, useEffect, useState } from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components'
import * as Font from 'expo-font'

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
    <StyleProvider>
      <NavigationContainer theme={DarkTheme}>
        <Tab.Navigator initialRouteName={homePage}>
          <Tab.Screen name={homePage} component={Home} />
          <Tab.Screen name={fleetBuilder} component={FleetBuilder} />
        </Tab.Navigator>
      </NavigationContainer>
    </StyleProvider>
  )
}

export default App
