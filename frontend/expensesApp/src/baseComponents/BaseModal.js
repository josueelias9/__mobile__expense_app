// https://docs.nativebase.io/input#h3-controlled-input
//@ts-nocheck
import React from 'react'
import { Button, Modal, Stack, FormControl, Input } from 'native-base'
import { useState } from 'react'
import { postFromApiAsync } from '../api/tryFetch'
import { camelCaseToWords } from '../utils/general'

const Example = ({ fields, startValues, endpoint }) => {
  const [placement, setPlacement] = useState(undefined)
  const [open, setOpen] = useState(false)
  const [value, setValue] = React.useState(startValues)

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
        <Button onPress={() => openModal('bottom')}>{endpoint}</Button>
      </Stack>
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth='350' {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>Add {endpoint}</Modal.Header>
          <Modal.Body>
            {fields.map((item, index) => {
              return (
                <FormControl key={index}>
                  <FormControl.Label>{camelCaseToWords(item.name)}</FormControl.Label>
                  <Input
                    value={value[item.name]}
                    w='100%'
                    onChangeText={x => item.handler(x, setValue, value)}
                    placeholder='Value Controlled Input'
                  />
                </FormControl>
              )
            })}
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
                  postFromApiAsync(value, endpoint)
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
