import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { getExpensesFromApiAsync } from '../api/tryFetch'
import BaseHStack from '../baseComponents/BaseHStack'
import BaseVStack from "../baseComponents/BaseVStack"
import { filterObjectKeys } from '../utils/general'
const App = () => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getMovies = async () => {
    try {
      setData(await getExpensesFromApiAsync())
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
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          {/* <BaseVStack items={["uno","dos","tres"]}/> */}
          {data.map((expense, index) => (
            <BaseHStack key={index} items={Object.values(expense)} maxLength={2} />
          ))}
        </>
      )}
    </View>
  )
}

export default App
