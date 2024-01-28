import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { camelCaseToWords } from '../utils/general'

import AddScreen from '../screens/AddScreen'
import Dashboard from '../screens/Dashboard'
import LogoutScreen from '../screens/LogoutScreen'
import SettingsScreen from '../screens/SettingsScreen'
import DetailScreen from '../screens/DetailScreen'

const Tab = createMaterialTopTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name='Dashboard' component={Dashboard} /> */}
      <Tab.Screen name={camelCaseToWords('AddScreen')} component={AddScreen} />
      <Tab.Screen name={camelCaseToWords('DetailScreen')} component={DetailScreen} />
      <Tab.Screen name={camelCaseToWords('SettingsScreen')} component={SettingsScreen} />
      <Tab.Screen name={camelCaseToWords('LogoutScreen')} component={LogoutScreen} />
    </Tab.Navigator>
  )
}

export default MyTabs
