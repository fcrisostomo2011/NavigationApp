import { View, Text } from 'react-native'
import React from 'react'

const Result = ({ route}) => {
    const {textWrited} = route.params
  return (
    <View>
      <Text>El texto ingresado fue: {textWrited}</Text>
    </View>
  )
}

export default Result