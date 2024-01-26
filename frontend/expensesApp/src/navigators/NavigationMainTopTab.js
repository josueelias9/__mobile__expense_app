import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { camelCaseToWords } from '../utils/general'
import AddScreen from '../screens/AddScreen'
import Dashboard from '../screens/Dashboard'
import HomeScreen from '../screens/HomeScreen'
import Detail from '../screens/Detail'
import LogoutScreen from '../screens/LogoutScreen'
import SettingsScreen from '../screens/SettingsScreen'
const Tab = createMaterialTopTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={camelCaseToWords('SettingsScreen')} component={SettingsScreen} />
      {/* <Tab.Screen name='Dashboard' component={Dashboard} /> */}
      <Tab.Screen name={camelCaseToWords('AddScreen')} component={AddScreen} />
      <Tab.Screen name={camelCaseToWords('Detail')} component={Detail} />
      <Tab.Screen name={camelCaseToWords('LogoutScreen')} component={LogoutScreen} />
    </Tab.Navigator>
  )
}

export default MyTabs
