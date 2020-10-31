import React, { FC, useState } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

const ChooseShip: FC = () => {
  return (
    <View>
      <Text>Choose a Ship</Text>
      <SearchInput onChange={} />
    </View>
  )
}

interface TextProps {
  title?: boolean
  heavy?: boolean
}
const Text = styled.Text<TextProps>`
  text-align: center;
  flex: 0.1;
  ${({ title }) => (title ? 'font-size: 36px;' : '')}
  ${({ heavy }) => (heavy ? 'font-weight: bold;' : '')}
`

const SearchInput = styled.TextInput<TextProps>`
  flex: 0.1;
`

export default ChooseShip
