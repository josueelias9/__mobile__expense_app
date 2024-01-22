import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from './src/screens/HomeScreen'
import Detail from './src/screens/Detail'
import Dashboard from './src/screens/Dashboard'
import AddScreen from './src/screens/AddScreen'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialTopTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: 'powderblue' }
        }}
      >
        <Tab.Screen name='AddScreen' component={AddScreen} />
        <Tab.Screen name='Dashboard' component={Dashboard} />
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Detail' component={Detail} />
      </Tab.Navigator>
      <Icon name='md-star' size={30} color='#000' style={styles.icon} />
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 10
  }
})
