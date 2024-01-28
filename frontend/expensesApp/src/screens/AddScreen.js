import React from 'react'
import { Box } from 'native-base'
import { View } from 'react-native'

import BaseModal from '../baseComponents/BaseModal'

const mx = 5
const my = 5

const NewScreen = () => (
  <View>
    <Box mx={mx} my={my}>
      <BaseModal buttonName={'Add expense'} labelOne={'Item name'} labelTwo={'Price'} />
    </Box>
    <Box mx={mx} my={my}>
      <BaseModal
        buttonName={'Add income'}
        labelOne={'Short description'}
        labelTwo={'Long description'}
      />
    </Box>
  </View>
)

export default NewScreen
