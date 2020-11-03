import React, { FC, useState, useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import {
  Container,
  Form,
  Item,
  Header,
  Input,
  Icon,
  Right,
  Button,
  Title,
  Body,
  Left,
  Text,
  ListItem,
} from 'native-base'

// import styled from 'styled-components/native'

import { imperialShipCards } from '../../data/cards'
import { chooseUpgrade } from '../../constants/navigation'
import { NavigationProps } from '../../interfaces/'
import { Ship } from '../../interfaces/cards'

const ChooseShip: FC<Props> = ({ navigation, updateSelectedShip }) => {
  const [searchInput, setSearchInput] = useState('')
  const [cardsToRender, setCardsToRender] = useState<Ship[]>([...imperialShipCards])

  const handleSearchTermUpdate = (searchInput: string): void => {
    setSearchInput(searchInput)
    handleSearchChange(searchInput)
  }

  const handleSearchChange = (searchInput: string) => {
    if (searchInput === '') {
      setCardsToRender([...imperialShipCards])
      return
    }
    const cardsThatMatchSearch = cardsToRender.filter(({ title }) =>
      title.toLowerCase().includes(searchInput.toLowerCase())
    )
    setCardsToRender(cardsThatMatchSearch)
  }

  const bind = {
    value: searchInput,
    onChangeText: handleSearchTermUpdate,
  }

  const handleShipPress = (ship: Ship) => {
    updateSelectedShip(ship)
    navigation.navigate(chooseUpgrade)
  }

  return (
    <Container>
      <ChooseShipHeader />
      <Form style={styles.form}>
        <Item>
          <Input placeholder='Search' {...bind} />
          <Icon name='search' />
        </Item>
      </Form>
      <FlatList
        data={cardsToRender}
        renderItem={card => (
          <ListItem key={card.item.id.toString()} button onPress={() => handleShipPress(card.item)}>
            <Left>
              <Text style={styles.shipName}>{card.item.title}</Text>
            </Left>
            <Right>
              <Button transparent>
                <Icon name='arrow-forward' />
              </Button>
            </Right>
          </ListItem>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  )
}

interface Props extends NavigationProps {
  updateSelectedShip: (ship: Ship) => void
}

const styles = StyleSheet.create({
  form: {
    marginBottom: '5%',
  },
  shipName: {
    flexWrap: 'nowrap',
  },
})

const ChooseShipHeader = () => (
  <Header transparent>
    <Left />
    <Body>
      <Title>
        <Text>Choose a Ship</Text>
      </Title>
    </Body>
    <Right>
      <Button transparent>
        <Icon name='menu' />
      </Button>
    </Right>
  </Header>
)

export default ChooseShip
