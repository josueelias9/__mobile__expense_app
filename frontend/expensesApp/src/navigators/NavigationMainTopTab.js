import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import AddScreen from '../screens/AddScreen'
import Dashboard from '../screens/Dashboard'
import HomeScreen from '../screens/HomeScreen'
import Detail from '../screens/Detail'
import LogoutScreen from '../screens/LogoutScreen'
const Tab = createMaterialTopTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='AddScreen' component={AddScreen} />
      {/* <Tab.Screen name='Dashboard' component={Dashboard} /> */}
      {/* <Tab.Screen name='Home' component={HomeScreen} /> */}
      <Tab.Screen name='Detail' component={Detail} />
      <Tab.Screen name='LogoutScreen' component={LogoutScreen} />
    </Tab.Navigator>
  )
}

export default MyTabs
