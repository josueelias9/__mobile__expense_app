import React from 'react'
import { VStack, Center } from 'native-base'

// const items = ['item 1', 'item 2', 'item 3', 'item 4']

function Example({ items }) {
  return (
    <VStack space={4} alignItems='center'>
      {items.map((item, index) => (
        <Center w='64' h='20' bg='indigo.300' rounded='md' shadow={3} key={index}>
          {item}
        </Center>
      ))}
    </VStack>
  )
}

export default Example
