import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { postExpensesFromApiAsync } from '../api/tryFetch'

const MyForm = () => {
  const [amount, setAmount] = useState('')
  const [shortDescription, setShortDescription] = useState('')

  const handleSubmit = async () => {
    // Here you would handle the submission of the data, for example, with a POST request
    await postExpensesFromApiAsync({
      amount,
      shortDescription
    })
    // Reset the form
    setAmount('')
    setShortDescription('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Amount'
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder='ShortDescription'
        value={shortDescription}
        onChangeText={setShortDescription}
      />
      <Button title='Submit' onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 200,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10
  }
})

export default MyForm
