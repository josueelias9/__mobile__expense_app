// https://reactnative.dev/docs/flatlist
// https://reactnative.dev/docs/network

import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native'

const Detail = () => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getExpenses = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/expenses')
      const json = await response.json()
      setData(json)
      console.log(Object.keys(json[0]))
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getExpenses()
  }, [])

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          ListHeaderComponent={ <View style={styles.row}>
          <Text style={styles.cell}>{Object.keys(data[0])[1]}</Text>
          <Text style={styles.cell}>{Object.keys(data[0])[2]}</Text>
          <Text style={styles.cell}>{Object.keys(data[0])[3]}</Text>
          <Text style={styles.cell}>{Object.keys(data[0])[4]}</Text>
        </View>}
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.cell}>{item.amount}</Text>
              <Text style={styles.cell}>{item.expenseTypeId}</Text>
              <Text style={styles.cell}>{item.shortDescription}</Text>
              <Text style={styles.cell}>{item.date}</Text>
            </View>

          )}
        />
      )}
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  cell: {
    flex: 1,
    textAlign: 'center'
  }
})


