import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { getExpensesFromApiAsync } from '../api/tryFetch'
import BaseHStack from '../baseComponents/BaseHStack'
import BaseVStack from '../baseComponents/BaseVStack'
import { camelCaseToWords, filterObjectByKey } from '../utils/general'

const App = () => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getMovies = async () => {
    try {
      setData(await getExpensesFromApiAsync('expenses'))
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  const selectedKeys = ['amount', 'shortDescription', 'longDescription']

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <BaseHStack items={selectedKeys.map(item => camelCaseToWords(item))} />
          {data.map((expense, index) => {
            return (
              <BaseHStack
                key={index}
                items={Object.values(filterObjectByKey(expense, selectedKeys))}
                maxLength={20}
              />
            )
          })}
        </>
      )}
    </View>
  )
}

export default App
