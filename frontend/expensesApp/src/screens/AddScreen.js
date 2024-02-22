import React from 'react'
import { Box } from 'native-base'
import { View } from 'react-native'

import BaseModal from '../baseComponents/BaseModal'

const mx = 5
const my = 5

const expenseStartValues = {
  amount: '',
  shortDescription: '',
  expenseTypeId: ''
}
const expenseFields = [
  {
    name: 'amount',
    handler: (text, setValue, value) => setValue({ ...value, amount: text })
  },
  {
    name: 'shortDescription',
    handler: (text, setValue, value) => setValue({ ...value, shortDescription: text })
  },
  {
    name: 'expenseTypeId',
    handler: (text, setValue, value) => setValue({ ...value, expenseTypeId: text })
  }
]

const incomeStartValues = {
  amount: '',
  source: '',
  destiny: '',
  description: ''
}
const incomeFields = [
  {
    name: 'amount',
    handler: (text, setValue, value) => setValue({ ...value, amount: text })
  },
  {
    name: 'source',
    handler: (text, setValue, value) => setValue({ ...value, source: text })
  },
  {
    name: 'destiny',
    handler: (text, setValue, value) => setValue({ ...value, destiny: text })
  },
  {
    name: 'description',
    handler: (text, setValue, value) => setValue({ ...value, description: text })
  }
]

const NewScreen = () => (
  <View>
    <Box mx={mx} my={my}>
      <BaseModal fields={expenseFields} startValues={expenseStartValues} endpoint={'expenses'} />
    </Box>
    <Box mx={mx} my={my}>
      <BaseModal fields={incomeFields} startValues={incomeStartValues} endpoint={'incomes'} />
    </Box>
  </View>
)

export default NewScreen
