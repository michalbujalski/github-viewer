import axios from 'axios'
import { Repository } from '../models'
import { GHRepository } from '../models/api'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export const searchRepository = async (
  query: string
): Promise<Repository[]> => {
  const params = {
    q: query,
  }
  const { data } = await api.get<{ items: GHRepository[] }>(
    '/search/repositories',
    { params }
  )

  return data.items.map((item) => {
    const { id, name } = item
    return {
      id,
      name,
      owner: item.owner.login,
      stars: item.stargazers_count,
      createdAt: item.created_at,
    }
  })
}
