import React from 'react'
import { Text } from 'react-native'
import { People } from '../../types/people'

const Card = (person: People) => {
  return (
    <Text>name: {person.name}</Text>
  )
}

export default Card
