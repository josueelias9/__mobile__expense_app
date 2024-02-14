// https://docs.nativebase.io/input#h3-controlled-input
//@ts-nocheck
import React from 'react'
import { Button, Modal, Stack, FormControl, Input, Center, NativeBaseProvider } from 'native-base'
import { useState } from 'react'
import { postExpensesFromApiAsync } from '../api/tryFetch'

const Example = () => {
  const [placement, setPlacement] = useState(undefined)
  const [open, setOpen] = useState(false)
  const [value, setValue] = React.useState({
    amount: '',
    shortDescription: '',
    longDescription: ''
  })

  const handleChangeText = text =>
    setValue({
      ...value,
      amount: text
    })

  const handleChangeShortDescription = text =>
    setValue({
      ...value,
      shortDescription: text
    })

  const handleChangeLongDescription = text =>
    setValue({
      ...value,
      longDescription: text
    })

  const openModal = placement => {
    setOpen(true)
    setPlacement(placement)
  }

  return (
    <>
      <Stack
        direction={{
          base: 'column',
          md: 'row'
        }}
        space={2}
      >
        <Button onPress={() => openModal('bottom')}>Bottom</Button>
      </Stack>
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth='350' {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>amount</FormControl.Label>
              <Input
                value={value.amount}
                w='100%'
                onChangeText={handleChangeText}
                placeholder='Value Controlled Input'
              />{' '}
            </FormControl>
            <FormControl>
              <FormControl.Label>shortDescription</FormControl.Label>
              <Input
                value={value.shortDescription}
                w='100%'
                onChangeText={handleChangeShortDescription}
                placeholder='Value Controlled Input'
              />{' '}
            </FormControl>
            <FormControl>
              <FormControl.Label>longDescription</FormControl.Label>
              <Input
                value={value.longDescription}
                w='100%'
                onChangeText={handleChangeLongDescription}
                placeholder='Value Controlled Input'
              />{' '}
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant='ghost'
                colorScheme='blueGray'
                onPress={() => {
                  setOpen(false)
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setOpen(false)
                  postExpensesFromApiAsync(value)
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}

const styles = {
  bottom: {
    marginBottom: 0,
    marginTop: 'auto'
  }
}

export default Example
