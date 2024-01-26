import React from 'react'
import { Center, Image, NativeBaseProvider } from 'native-base'

function Example() {
  return (
    <Center>
      <Image source={require('../../assets/mainLogo.png')} alt='Alternate Text' size='2xl' />
    </Center>
  )
}

export default Example
