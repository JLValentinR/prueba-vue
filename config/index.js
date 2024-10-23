export const dataEnv = () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      API_URL: 'http://localhost:3000/api/v1'
    }
  } else {
    return {
      API_URL: 'http://api.radiodesk.com.mx'
    }
  }
}
