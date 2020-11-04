import React, { FC } from 'react'
import styled from 'styled-components/native'
import { Left, Right, Text } from 'native-base'

import { upgradeMapForDisplayText } from '../../constants/upgrades'

import { UpgradeSet, Upgrade } from '../../interfaces/cards'

const EquippedUpgrade: FC<Props> = ({ upgradeKey, equippedUpgrade }) => {
  const upgradeDisplayName = upgradeMapForDisplayText[upgradeKey]

  const upgradeDisplay = !!equippedUpgrade ? (
    <>
      <Left>
        <Text>{equippedUpgrade.title}</Text>
      </Left>
      <Right>
        <Text>{equippedUpgrade.points}</Text>
      </Right>
    </>
  ) : (
    <Text>Empty</Text>
  )

  return (
    <UpgradeContainer>
      <UpgradeTitle>{upgradeDisplayName}</UpgradeTitle>
      <EquippedUpgradeContainer>{upgradeDisplay}</EquippedUpgradeContainer>
    </UpgradeContainer>
  )
}

interface Props {
  upgradeKey: UpgradeSet
  equippedUpgrade?: Upgrade
}

const UpgradeTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`

const UpgradeContainer = styled.View`
  margin-left: 5%;
  margin-bottom: 5%;
`

const EquippedUpgradeContainer = styled.View`
  height: 50px;
`

export default EquippedUpgrade
