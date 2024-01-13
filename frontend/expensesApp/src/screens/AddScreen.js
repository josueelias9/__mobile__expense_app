import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'

const AddScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const handlePress = option => {
    setSelectedOption(option)
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={() => handlePress('expense')}>
        <Text style={styles.optionText}>expense</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handlePress('budget')}>
        <Text style={styles.optionText}>budget</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handlePress('category')}>
        <Text style={styles.optionText}>category</Text>
      </TouchableOpacity>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        {/* Modal content based on selectedOption */}
        <View style={styles.modalView}>
          <Text>{selectedOption} content</Text>
          <TouchableOpacity onPress={closeModal}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    // Add more styling to match the provided image
  },
  option: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#FFF'
    // Add more styling to match the provided image
  },
  optionText: {
    // Add text styling
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
  // ... Add more styles for other components
})

export default AddScreen
