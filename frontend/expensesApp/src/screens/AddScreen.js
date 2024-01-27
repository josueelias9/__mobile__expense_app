import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'

import BaseModal from '../baseComponents/BaseModal'
const NewScreen = () => (
  <View>
    <BaseModal buttonName={'Add expense'} labelOne={'Item name'} labelTwo={'Price'} />
    <BaseModal
      buttonName={'Add income'}
      labelOne={'Short description'}
      labelTwo={'Long description'}
    />
  </View>
)

export default NewScreen
