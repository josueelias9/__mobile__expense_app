import * as React from 'react'

import { AuthContext } from '../../App'
import { Button, Text, View } from 'react-native'

function HomeScreen() {
  const { signOut } = React.useContext(AuthContext)

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title='Sign out' onPress={signOut} />
    </View>
  )
}

export default HomeScreen
