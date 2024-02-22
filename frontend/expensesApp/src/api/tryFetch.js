// https://reactnative.dev/docs/network

let endpoint = 'http://localhost:3000/'
// let endpoint = 'http://localhost:8080/api/'

const postFromApiAsync = async (value, type) => {
  try {
    const response = await fetch(endpoint + type, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    })
  } catch (error) {
    console.error(error)
  }
}

const getExpensesFromApiAsync = async type => {
  try {
    const response = await fetch(endpoint + type)
    const json = await response.json()
    return json
  } catch (error) {
    console.error(error)
  }
}

export { getExpensesFromApiAsync, postFromApiAsync }
