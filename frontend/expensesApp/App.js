import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SettingsScreen from './src/components/SettingsScreen'
import HomeScreen from './src/components/HomeScreen'
import Detail from './src/components/Detail'

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
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
        <Tab.Screen name='Detail' component={Detail} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
