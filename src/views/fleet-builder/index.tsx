import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ChooseShip from './ChooseShip'
import { chooseShip } from '../../constants/navigation'

const Tab = createStackNavigator()

const FleetBuilder: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={chooseShip}>
        <Tab.Screen name={chooseShip} component={ChooseShip} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default FleetBuilder
