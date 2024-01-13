// Dashboard.js
import React from 'react'
import { View, StyleSheet } from 'react-native'
import MyBarChart from '../components/MyBarChart'
import MyPieChart from '../components/MyPieChart'

const Dashboard = () => {
  return (
    <View style={styles.container}>
      Comparing two things
      <MyBarChart />
      Comparing two things
      <MyPieChart />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  }
})

export default Dashboard
