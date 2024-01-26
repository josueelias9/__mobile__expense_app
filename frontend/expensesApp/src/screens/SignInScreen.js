import { Button, Text, TextInput, View } from 'react-native'
import * as React from 'react'
import { AuthContext } from '../../App'

function SignInScreen() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { signIn } = React.useContext(AuthContext)

  return (
    <View>
      <TextInput placeholder='Username' value={username} onChangeText={setUsername} />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Sign in' onPress={() => signIn({ username, password })} />
    </View>
  )
}

export default SignInScreen
