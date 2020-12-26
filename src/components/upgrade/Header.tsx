import React, { FC } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import { minHeaderHeight } from '../../constants/upgrades'

const ShipTitle: FC<Props> = ({ shipName }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{shipName}</Text>
  </View>
)

const black = 'black'
const white = 'white'
const styles = StyleSheet.create({
  container: {
    backgroundColor: black,
    height: minHeaderHeight,
    left: 0,
    paddingTop: Constants.statusBarHeight,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  title: {
    color: white,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
})

interface Props {
  shipName: string
}

export default ShipTitle
