import React, { FC, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ChooseShip from './ChooseShip'
import ChooseUpgrade from './ChooseUpgrade'
import { chooseShip, chooseUpgrade } from '../../constants/navigation'
import { Ship } from '../../interfaces/cards'

const Stack = createStackNavigator()

const FleetBuilder: FC = () => {
  const [selectedShip, setSelectedShip] = useState<Ship | undefined>(undefined)
  console.log('selected ship', selectedShip)
  return (
    <Stack.Navigator initialRouteName={chooseShip} headerMode='none'>
      <Stack.Screen name={chooseShip}>
        {props => <ChooseShip {...props} updateSelectedShip={setSelectedShip} />}
      </Stack.Screen>
      <Stack.Screen name={chooseUpgrade}>
        {props => <ChooseUpgrade {...props} selectedShip={selectedShip} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default FleetBuilder
