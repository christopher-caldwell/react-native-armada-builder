import React, { FC } from 'react'
import { Image, StyleSheet, View, ImageSourcePropType } from 'react-native'

import { maxHeaderHeight } from '../../constants/upgrades'

const ShipImage: FC<Props> = ({ imgSrc }) => {
  const scale: number = 1
  const opacity = 0.2
  return (
    <View style={[styles.container, { transform: [{ scale }] }]}>
      <Image style={styles.image} source={imgSrc} />
      <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: blackColor, opacity }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: maxHeaderHeight,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
  },
})

const blackColor = 'black'

interface Props {
  imgSrc: ImageSourcePropType
}


export default ShipImage
