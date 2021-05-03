import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

//AntDesign
import { Card, Progress } from 'antd';
import {
    ArrowRightOutlined
} from '@ant-design/icons';


const Subject = (props) => {

    const subjectUrl = `/materias/${props.id}`

    return( 
        <Fragment>
             <Card title={props.attributes.name} extra={<Link to={subjectUrl}><ArrowRightOutlined className="iconHeadCard"/></Link>} style={{ width: 300 }}>
                <p className="card">{props.attributes.description}</p>
                <Progress percent={props.attributes.avg_score*20} steps={5} strokeColor="#F2D00C"/>
            </Card>
        </Fragment>
    )
}

export default Subject