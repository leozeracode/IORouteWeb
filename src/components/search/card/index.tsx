import React from 'react';
import { Col, Row, Typography } from 'antd';

import styles from './style.module.scss';

const Card: React.FC = () => {
  return (
    <Col span={18} className={styles.colContainer}>
      <Row justify={'center'} align={'middle'} className={styles.rowContainer}>
        <Col span={1} className={styles.colOrange}></Col>
        <Col span={23} className={styles.colYellow}>
          <Row justify={'center'} align={'middle'} className={styles.rowContent}>
            <Col><Typography.Text>GRU - BRC - SCL - ORL - CDG ao custo de $40</Typography.Text></Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default Card;