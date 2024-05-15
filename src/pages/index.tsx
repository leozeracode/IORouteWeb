import React from 'react'
import { Head } from 'next/document'
import { Search } from '@/components'

const SearchPage: React.FC = () => {
  <Head>
    <title>Login page</title>

    <meta
      name='description'
      content='Search page'
    />
  </Head>

  return (<Search />)
}

export default SearchPage
