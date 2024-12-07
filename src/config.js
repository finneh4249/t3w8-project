const apiKey = import.meta.env.VITE_API_KEY

if (!apiKey) {
  throw new Error('API key not found')
}

export default apiKey
