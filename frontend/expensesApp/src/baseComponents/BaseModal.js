//@ts-nocheck
import React from 'react'
import { Button, Modal, Stack, FormControl, Input } from 'native-base'
import { useState } from 'react'

const Example = ({ labelOne, labelTwo, buttonName }) => {
  const [placement, setPlacement] = useState(undefined)
  const [open, setOpen] = useState(false)

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
        <Button onPress={() => openModal('bottom')}>{buttonName}</Button>
      </Stack>
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth='350' {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>{labelOne}</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt='3'>
              <FormControl.Label>{labelTwo}</FormControl.Label>
              <Input />
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
