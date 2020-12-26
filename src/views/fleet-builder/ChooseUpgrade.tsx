import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Icon, Right, Button, Left, Text } from 'native-base'
import styled from 'styled-components/native'

import { chooseShip } from '../../constants/navigation'
import { headerDelta } from '../../constants/upgrades'
import { NavigationProps } from '../../interfaces/'
import { Ship, UpgradeSet } from '../../interfaces/cards'
import Upgrade from '../../components/upgrade/Upgrade'
import ShipImage from '../../components/upgrade/Image'
import ShipBody from '../../components/upgrade/UpgradeBody'

const ChooseShip: FC<Props> = ({ navigation, selectedShip }) => {
  return (
    <Container>
      <ChooseUpgradeHeader navigate={navigation.navigate} />
      <ShipImage
        imgSrc={require('../../assets/images/cards/ship/imperial/trimmed-arquitens-class-command-cruiser.jpg')}
      />
      <ShipBody />

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
  bottom: 10px;
  left: 30px;
  right: 30px;
  display: flex;
  justify-content: center;
`

const UpgradesContainer = styled.ScrollView`
  margin-top: ${headerDelta + 10}px;
  padding-bottom: 300px;
`

const styles = StyleSheet.create({
  saveButton: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
})

export default ChooseShip
