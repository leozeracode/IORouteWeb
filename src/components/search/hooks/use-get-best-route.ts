import { type AxiosError } from 'axios'
import { type UseQueryResult } from 'react-query'
import { useGetDataDecorator } from './use-get-data-decorator'
import { makeUrl } from '@/common/helpers'
import { useSearch } from '../contexts'

namespace GetBestRoute {
  export type Input = {
    origin: string
    destination: string
  }
  export type Output = string
}

export const useGetBestRoute = (): UseQueryResult<GetBestRoute.Output, AxiosError<any>> => {
  const { filter } = useSearch()
  return useGetDataDecorator<GetBestRoute.Input, GetBestRoute.Output>({
    url: makeUrl('route'),
    filter,
    queryOptions: {
      enabled: !!filter.origin && !!filter.destination
    }
  })
}
