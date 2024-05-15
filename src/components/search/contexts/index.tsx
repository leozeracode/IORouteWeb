import React, { type Dispatch, useContext, useState, type PropsWithChildren, type SetStateAction } from 'react'

type Filter = {
  origin: string
  destination: string
}

type ContextProps = {
  filter: Filter
  setFilter: Dispatch<SetStateAction<Filter>>
}

const SearchContext = React.createContext<ContextProps>({} as ContextProps)

const SearchProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [filter, setFilter] = useState<Filter>({
    origin: '',
    destination: ''
  })

  return (
    <SearchContext.Provider value={{ filter, setFilter }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = (): ContextProps => {
  return useContext(SearchContext)
}

export default SearchProvider
