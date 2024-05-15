import React, { useEffect } from 'react'
import { Button, Col, Form, type FormProps, Row, Input } from 'antd'
import { useGetBestRoute } from '../hooks'
import { useSearch } from '../contexts'

type FieldType = {
  origin: string
  destination: string
}

const FormSearch: React.FC = () => {
  const { isLoading, refetch } = useGetBestRoute()
  const { setFilter, filter } = useSearch()

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    if (!values.origin || !values.destination) {
      return
    }
    setFilter(values)
  }

  useEffect(() => {
    if (!filter.origin || !filter.destination) {
      return
    }

    refetch()
  }, [filter])

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={() => { }}
    >
      <Col span={24}>
        <Row gutter={[16, 16]} justify={'center'}>
          <Col span={12}>
            <Form.Item<FieldType>
              label="Origin"
              name="origin"
              rules={[{ required: true, message: 'Please input the origin!' }]}
            >
              <Input
                style={{ height: 34, borderRadius: 3 }}
              />
            </Form.Item>

          </Col>
          <Col span={12}>
            <Form.Item<FieldType>
              label="Destination"
              name="destination"
              rules={[{ required: true, message: 'Please input the destination!' }]}
            >
              <Input
                style={{ height: 34, borderRadius: 3 }}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item >
              <Button loading={isLoading} type="primary" htmlType="submit" style={{ width: 244, height: 34, borderRadius: 3 }}>Buy now!</Button>
            </Form.Item>
          </Col>
        </Row>
      </Col>
    </Form>
  )
}

export default FormSearch
