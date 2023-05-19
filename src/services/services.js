import { apiCall } from './config'

export const Login = async data => {
  const options = {
    url: '/api/auth-documental-login',
    method: 'POST',
    data: data
  }

  return await apiCall(options)
    .then(result => {
      return result
    })
    .catch(e => {
      throw e
    })
}
