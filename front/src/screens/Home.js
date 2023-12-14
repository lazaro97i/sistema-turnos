import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const Home = ({ navigation }) => {

  return (
    <View>
      <Text>Home</Text>
      <Button title='Ir al login' onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

export default Home