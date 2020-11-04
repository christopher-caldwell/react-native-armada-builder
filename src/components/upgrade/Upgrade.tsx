import React, { FC } from 'react'
import styled from 'styled-components/native'

import { upgradeMapForDisplayText } from '../../constants/upgrades'

import { UpgradeSet } from '../../interfaces/cards'

const Upgrade: FC<Props> = ({ upgradeKey }) => {
  const upgradeDisplayName = upgradeMapForDisplayText[upgradeKey]
  return (
    <UpgradeContainer>
      <UpgradeTitle>{upgradeDisplayName}</UpgradeTitle>
    </UpgradeContainer>
  )
}

interface Props {
  upgradeKey: UpgradeSet
}

const UpgradeTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`

const UpgradeContainer = styled.View`
  margin-left: 5%;
  margin-bottom: 5%;
`

export default Upgrade
