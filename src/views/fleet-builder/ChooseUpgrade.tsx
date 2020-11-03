import React, { FC } from 'react'
import { Container, Header, Icon, Right, Button, Title, Body, Left, Text } from 'native-base'

import { chooseShip } from '../../constants/navigation'
import { NavigationProps } from '../../interfaces/'
import { Ship } from '../../interfaces/cards'

const ChooseShip: FC<Props> = ({ navigation, selectedShip }) => {
  return (
    <Container>
      <ChooseUpgradeHeader navigate={navigation.navigate} />
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
    <Body>
      <Title>
        <Text>Choose your upgrades</Text>
      </Title>
    </Body>
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

export default ChooseShip
