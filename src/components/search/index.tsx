import React from 'react'
import { Col, Row } from 'antd'

import Search from './search'
import Logo from './logo'
import Card from './card'

import styles from './style.module.scss'
import SearchProvider from './contexts'

const SearchPage: React.FC = () => {
  return (
    <SearchProvider>
      <Col className={styles.hero} span={24}>
        <Row justify={'center'} align={'middle'} gutter={[16, 30]}>
          <div className={styles.overlay}>
            <p>Unlocking Global Opportunities <br /> with Cost-Effective Routes</p>
          </div>
          <Logo />
          <Search />
          <Card />
        </Row>
      </Col>
    </SearchProvider>
  )
}

export default SearchPage
