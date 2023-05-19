import axios from 'axios'

export const apiCall = async function (getOptions) {
  const options = getOptions
  const api = process.env.NEXT_PUBLIC_API_DOCUMENTAL
  const config = {
    method: options.method,
    url: `${api}${options.url}`,
    headers: { Authorization: `Bearer`, 'content-Type': 'application/json; charset=utf-8', ...options.headers },
    data: options.data
  }
  console.log(config)

  return await axios(config)
    .then(async function (response) {
      const responseObject = await response.data

      return responseObject
    })
    .catch(async function (error) {
      console.log(error)
      const responseError = await error.response
      if (responseError.statusCode == 401 && responseError.message == 'Unauthorized') {
        localStorage.clear()
        window.location.href = process.env.NEXT_PUBLIC_API_DOCUMENTAL
      } else {
        throw responseError
      }
    })
}
