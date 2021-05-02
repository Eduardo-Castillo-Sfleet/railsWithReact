import React, { useState, useEffect } from 'react'
import Card from './Card'

//AntDesign
import { Row, Col } from 'antd';

const Subject = (props) => {
    
    const [subject, setSubject] = useState({})
    const [session, setSession] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const subjectId = props.match.params.id
        const url = `/api/v1/subjects/${subjectId}`
        fetch(url)
        .then( resp => resp.json() )
        .then( data => {
            setSubject(data.data)
            setLoaded(true)
        })
        .catch( error => console.error(error) )
    }, [])

    return(
        <Row>
            { loaded &&
                <Col>
                    <Card key={subject.id} attributes={subject.attributes} />
                </Col>
            }
        </Row>
        )
}

export default Subject