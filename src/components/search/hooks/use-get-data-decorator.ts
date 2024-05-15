import axios, { type AxiosError } from 'axios'
import { useQuery, type UseQueryOptions, type UseQueryResult } from 'react-query'

export type UseGetDataQueryOutput<TResponse> = UseQueryResult<TResponse, AxiosError<any>>

export const useGetDataDecorator = <TRequest = any, TResult = any>({
  url,
  filter,
  queryOptions = {}
}: {
  url: string
  filter?: TRequest
  queryOptions?: UseQueryOptions<TResult, AxiosError<any>>
}): UseQueryResult<TResult, AxiosError<any>> => {
  return useQuery<TResult, AxiosError<any>>(
    [url, filter],
    async () => {
      const response = await axios.get(url, { params: filter })
      return response.data
    },
    {
      ...queryOptions
    }
  )
}
