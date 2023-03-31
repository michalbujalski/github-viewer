import axios from 'axios'
import { Repository } from '../models'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export const searchRepository = async (
  query: string
): Promise<Repository[]> => {
  const params = {
    q: query,
  }
  const { data } = await api.get('/search/repositories', { params })

  data.items.map((item) => {
    const { id, name } = item
    return {
      id,
      name,
      owner: item.owner.login,
    }
  })
  return data
}
