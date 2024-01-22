// https://reactnative.dev/docs/flatlist
// https://reactnative.dev/docs/network

import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native'
import { getExpensesFromApiAsync, postExpensesFromApiAsync } from '../api/tryFetch'
import { limitString } from '../utils/general'
const Detail = () => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getExpenses = async () => {
    try {
      setData(await getExpensesFromApiAsync())
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
          ListHeaderComponent={
            <View style={styles.row}>
              <Text style={styles.cell}>{Object.keys(data[0])[1]}</Text>
              <Text style={styles.cell}>{Object.keys(data[0])[2]}</Text>
              <Text style={styles.cell}>{Object.keys(data[0])[3]}</Text>
              <Text style={styles.cell}>{Object.keys(data[0])[4]}</Text>
            </View>
          }
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.cell}>{item.amount}</Text>
              <Text style={styles.cell}>{item.expenseTypeId}</Text>
              <Text style={styles.cell}>{limitString(item.shortDescription, 10)}</Text>
              <Text style={styles.cell}>{item.date}</Text>
            </View>
          )}
        />
      )}
    </View>
  )
}

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

export default Detail
