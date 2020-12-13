module.exports = async event => {
  const data = {
    message: 'Hello, World!',
    input: event
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(data, null, 2)
  }

  return response
}
