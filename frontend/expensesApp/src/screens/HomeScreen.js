import { Text, View } from 'react-native'
import MyForm from '../components/MyForm'
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <MyForm />
    </View>
  )
}

export default HomeScreen
