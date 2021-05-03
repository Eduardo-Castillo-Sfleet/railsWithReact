import React, { useState, useEffect } from 'react'
import Header from './Header'
import Comment from './Comment'

//AntDesign
import { Row, Col, Form, Input, Button, List  } from 'antd';

const Subject = (props) => {
    
    const [subject, setSubject] = useState({})
    const [session, setSession] = useState({})
    const [comments, setComments] = useState([])
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

        var urlComment = new URL('http://localhost:3000/api/v1/subjectComments')
        var params = { subject_id: subjectId }
        urlComment.search = new URLSearchParams(params)
        fetch(urlComment)
        .then( resp => resp.json())
        .then( data => {
            console.log(data.data.map(item => item.attributes.comment))
            var commentArray = data.data.map(item => item.attributes.comment)
            setComments(commentArray)
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
                <List
                    header={<div>Comentarios</div>}
                    bordered
                    dataSource={comments}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                        )}
                    />
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