import React, { useEffect, useState } from 'react'

import { Text, View } from 'react-native'
import MyForm from '../components/MyForm'
function HomeScreen() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getMovies = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/expenses')
      const json = await response.json()
      console.log(json)
      // setData(json.movies);
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <MyForm />
    </View>
  )
}

export default HomeScreen
