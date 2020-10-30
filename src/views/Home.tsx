import React, { FC } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import { fleetBuilder } from '../constants/navigation'

const FleetBuilder: FC<Props> = props => {
  console.log('props', props)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Looks like you don't have any saved fleets.</Text>
      <Button title='Go to Fleet Builder' onPress={() => props.navigation.navigate(fleetBuilder)}></Button>
    </View>
  )
}

interface Props {
  navigation: {
    navigate: (nameOfScreen: string) => void
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center'
  }
})

export default FleetBuilder
