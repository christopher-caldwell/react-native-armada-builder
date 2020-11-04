import React, { FC, createContext, useState } from 'react'

const FleetContext = createContext<IFleetContext>({
  hasChosenCommander: false,
  toggleHasChosenCommander: () => {},
  points: 0,
  handlePointsUpdate: () => {},
})

const FleetProvider: FC = () => {
  const [hasChosenCommander, setHasChosenCommander] = useState(false)
  const [points, setPoints] = useState(0)

  const toggleHasChosenCommander = () => {
    setHasChosenCommander(prevValue => !prevValue)
  }

  const handlePointsUpdate = (numberToChange: number, isAdding: boolean) => {
    setPoints(prevPoints => {
      return isAdding ? prevPoints + numberToChange : prevPoints - numberToChange
    })
  }

  const contextValue = {
    hasChosenCommander,
    toggleHasChosenCommander,
    points,
    handlePointsUpdate,
  }
  return <FleetContext.Provider value={contextValue}></FleetContext.Provider>
}

interface IFleetContext {
  hasChosenCommander: boolean
  toggleHasChosenCommander: () => void
  points: number
  handlePointsUpdate: (numberToChange: number, isAdding: boolean) => void
}

export default FleetProvider
