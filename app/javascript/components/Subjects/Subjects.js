import React, { useState, useEffect, Fragment } from 'react'
import Subject from './Subject'

//AntDesign
import { Row, Col } from 'antd';

const Subjects = () => {
    
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        fetch('/api/v1/subjects')
        .then( resp => resp.json() )
        .then( data => {
            console.log(data)
            setSubjects(data.data)
        })
        .catch( error => console.error(error) )
    }, [subjects.length])

    const list = subjects.map( item => {
        return(
            <Col key={item.id} span={8} className="rowSubjects">
                <Subject 
                    attributes={item.attributes}
                    id={item.id}
                    />
            </Col>
        )
    })

    return(
        <Fragment>
            <h2>Materias</h2>
            <Row>{list}</Row>
        </Fragment>
        )
}

export default Subjects