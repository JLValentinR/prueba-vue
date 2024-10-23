import axios from 'axios'
/**
 * Function to get token
 * @param {Object} payload
 * @return AxiosPromise
 */
export const login = () => {
  return axios.get('url')
}

/**
 * Function to get token
 * @param {Object} payload
 * @return AxiosPromise
 */
export const setLogin = (payload) => {
  return axios.post('url', payload)
}

/**
 * Function to know if the user is authenticated
 * @return Boolean
 */
export const isAuthenticated = () => {
  const token = ''
  return (token)
}
