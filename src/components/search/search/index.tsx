import { Col, Row, Tabs } from 'antd'
import React from 'react'
import FormSearch from '../form'

import styles from './style.module.scss'

const Search: React.FC = () => {
  return (
    <Col span={20} className={styles.searchContent}>
    <Row justify={'center'} align={'middle'} style={{ height: ' 100%' }}>
      <Col span={18} className={styles.searchContentTab}><Tabs defaultActiveKey="1" items={[
        {
          key: '1',
          label: 'Buy Tickets',
          children: <FormSearch/>
        }]} />
      </Col>
    </Row>
  </Col>
  )
}

export default Search
