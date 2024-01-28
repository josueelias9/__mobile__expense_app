import React from 'react'
import { HStack, Center } from 'native-base'
import { limitString } from '../utils/general'

function Example({ items, maxLength }) {
  return (
    <HStack space={3} justifyContent='center'>
      {items.map((item, index) => (
        <Center h='20' w='20' bg='primary.000' rounded='md' shadow={0} key={index}>
          {limitString(item, maxLength)}
        </Center>
      ))}
    </HStack>
  )
}

export default Example
