import React from 'react'
import { Input, Box, Center, NativeBaseProvider } from 'native-base'

const Example = () => {
  const [value, setValue] = React.useState('')

  const handleChange = text => setValue(text)

  return (
    <Box alignItems='center'>
      <Input
        value={value}
        w='100%'
        onChangeText={handleChange}
        placeholder='Value Controlled Input'
      />
    </Box>
  )
}

export default Example
