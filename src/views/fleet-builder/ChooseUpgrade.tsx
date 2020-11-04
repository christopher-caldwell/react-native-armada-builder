import React, { FC } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Header, Icon, Right, Button, Left, Text } from 'native-base'
import styled from 'styled-components/native'

import { chooseShip } from '../../constants/navigation'
import { NavigationProps } from '../../interfaces/'
import { Ship, UpgradeSet } from '../../interfaces/cards'
import Upgrade from '../../components/upgrade/Upgrade'

const ChooseShip: FC<Props> = ({ navigation, selectedShip }) => {
  return (
    <Container>
      <ChooseUpgradeHeader navigate={navigation.navigate} />
      <ShipImageBackground />
      <Image
        style={styles.shipImage}
        source={require('../../assets/images/cards/ship/imperial/trimmed-arquitens-class-command-cruiser.jpg')}
      ></Image>
      <ShipHeader>{selectedShip?.title}</ShipHeader>

      <UpgradesContainer>
        {Object.entries(selectedShip?.upgrades || {}).map(([upgradeName, upgrade]) => (
          <Upgrade upgradeKey={upgradeName as UpgradeSet} />
        ))}
      </UpgradesContainer>
      <SaveButtonContainer>
        <Button style={styles.saveButton}>
          <Text>Save</Text>
        </Button>
      </SaveButtonContainer>
    </Container>
  )
}

interface Props extends NavigationProps {
  selectedShip?: Ship
}

const ChooseUpgradeHeader: FC<UpgradeProps> = ({ navigate }) => (
  <Header transparent>
    <Left>
      <Icon color='white' onPress={() => navigate(chooseShip)} name='arrow-back' />
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

const SaveButtonContainer = styled.View`
  position: absolute;
  bottom: 10;
  left: 30;
  right: 30;
  display: flex;
  justify-content: center;
`

const UpgradesContainer = styled.View`
  margin-top: 10%;
`

const ShipImageBackground = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1000;
  opacity: 0.8;
  height: 10%;
  background-color: black;
`

const ShipHeader = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-left: 15px;
  color: white;
`

const styles = StyleSheet.create({
  saveButton: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  shipImage: {
    position: 'absolute',
    top: 40,
    width: '100%',
    zIndex: -100,
    // height: '10%',
  },
})

export default ChooseShip
