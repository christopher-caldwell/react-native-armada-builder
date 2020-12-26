import * as React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { maxHeaderHeight } from '../../constants/upgrades'

export default () => {
  const height = maxHeaderHeight
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.gradient, { height }]}>
          <LinearGradient
            style={StyleSheet.absoluteFill}
            start={[0, 0.3]}
            end={[0, 1]}
            colors={['transparent', 'rgba(0, 0, 0, 0.2)', 'black']}
          />
        </View>
        <View style={styles.artistContainer}>
          <Text style={styles.artist}>Hello</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: maxHeaderHeight,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    bottom: '20%',
    right: 0,
    alignItems: 'center',
  },
  artistContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artist: {
    textAlign: 'center',
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
    zIndex: 10000
  },
  tracks: {
    paddingTop: 32,
    backgroundColor: 'black',
  },
})
