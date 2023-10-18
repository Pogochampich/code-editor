import { useFetch } from "../hooks/useFetch"

const {loading, error, request} = useFetch()

const registerHandler = async () => {
  try {
    const data = await request('http://134.0.116.26:5551/api/user', 'POST', {...form})
  } catch (error) {
    console.log('registration error', error)
  }
}