import React from 'react'
import { HStack, Center } from 'native-base'
import { limitString } from '../utils/general'

function Example({ items, maxLength }) {
  return (
    <HStack space={3} justifyContent='center'>
      {items.map((item, index) => (
        <Center h='10' w='10' bg='primary.300' rounded='md' shadow={3} key={index}>
          {limitString(item, maxLength)}
        </Center>
      ))}
    </HStack>
  )
}

export default Example
