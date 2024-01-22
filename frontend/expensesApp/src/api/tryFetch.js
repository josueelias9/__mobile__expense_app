// https://reactnative.dev/docs/network

const postExpensesFromApiAsync = async ({ amount, shortDescription }) => {
  try {
    const response = await fetch('http://localhost:8080/api/expenses', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: amount,
        shortDescription: shortDescription
      })
    })
  } catch (error) {
    console.error(error)
  }
}

const getExpensesFromApiAsync = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/expenses')
    const json = await response.json()
    return json
  } catch (error) {
    console.error(error)
  }
}

export { getExpensesFromApiAsync, postExpensesFromApiAsync }
