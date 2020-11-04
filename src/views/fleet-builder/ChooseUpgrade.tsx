import React, { FC } from 'react'
import { Container, Header, Icon, Right, Button, Title, Body, Left, Text } from 'native-base'
import styled from 'styled-components/native'

import { chooseShip } from '../../constants/navigation'
import { NavigationProps } from '../../interfaces/'
import { Ship, UpgradeSet } from '../../interfaces/cards'
import Upgrade from '../../components/upgrade/Upgrade'

const ChooseShip: FC<Props> = ({ navigation, selectedShip }) => {
  return (
    <Container>
      <ChooseUpgradeHeader navigate={navigation.navigate} />
      <ShipHeader>{selectedShip?.title}</ShipHeader>
      {Object.entries(selectedShip?.upgrades || {}).map(([upgradeName, upgrade]) => (
        <Upgrade upgradeKey={upgradeName as UpgradeSet} />
      ))}
    </Container>
  )
}

interface Props extends NavigationProps {
  selectedShip?: Ship
}

const ChooseUpgradeHeader: FC<UpgradeProps> = ({ navigate }) => (
  <Header transparent>
    <Left>
      <Icon onPress={() => navigate(chooseShip)} name='arrow-back' />
    </Left>
    <Right>
      <Button transparent>
        <Icon name='menu' />
      </Button>
    </Right>
  </Header>
)

interface UpgradeProps {
  navigate: (routeName: string) => void
}

const ShipHeader = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

export default ChooseShip
