import React, { useState, useEffect } from 'react'
import Header from './Header'

//AntDesign
import { Row, Col, Form, Input, Button  } from 'antd';

const Subject = (props) => {
    
    const [subject, setSubject] = useState({})
    const [session, setSession] = useState({})
    const [loaded, setLoaded] = useState(false)

    const { TextArea } = Input;

    useEffect(() => {
        const subjectId = props.match.params.id
        const url = `/api/v1/subjects/${subjectId}`
        fetch(url)
        .then( resp => resp.json() )
        .then( data => {
            console.log(data.included)
            setSubject(data.data)
            setSession(data.included)
            setLoaded(true)
        })
        .catch( error => console.error(error) )
    }, [])

    return(
        <div>
        { loaded &&
            <Row className="subjectRow">
                <Col span={12} className="subjectCol">
                    <Header key={subject.id} attributes={subject.attributes} included={session}/>
                </Col>
                <Col span={12} className="subjectCol">
                <Form name="basic" initialValues={{ remember: true }}>
                    <Form.Item
                        name="comentario"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                    <TextArea rows={4} autoSize={{ minRows: 3, maxRows: 3  }} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Comentar
                        </Button>
                    </Form.Item>
                </Form>
                </Col>
            </Row>
        }
        </div>
    )
}

export default Subject