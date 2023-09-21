import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'

const Home = ({navigation}) => {
    const [textWrited, setTextWrited] = useState('')
   // const textWrited = ""

  return (
    <View>
           
      
      <TextInput style={{width:400, height:40}}
       onChangeText={setTextWrited} placeholder='Ingrese Aquí texto'></TextInput>
      <Pressable onPress={()=>navigation.navigate('NextScreen', {textWrited})}>
        <Text style={{backgroundColor: '#aabbcc', widht:'80%', height:30 }}>Entrar</Text>
      </Pressable>
    </View>
  )
}

export default Home