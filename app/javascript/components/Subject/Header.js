import React from 'react'
import './styles.css'

import { Card, Progress, Timeline, Button } from 'antd';

const Header = (props) => {

    const list = props.included.slice(0, 3).map( item => {
        return(
            <Timeline.Item key={item.id}>{item.attributes.title}</Timeline.Item>
        )
    })

    return(
            <div>
                <Card title={props.attributes.name} extra={<Progress percent={props.attributes.avg_score*20} steps={5} strokeColor="#F2D00C"/>}>
                    {props.attributes.description}
                    <Timeline pending="Más clases" style={{ paddingTop: 25 }}>
                        {list}
                    </Timeline>
                    <Button type="primary" block>
                        Tomar curso
                    </Button>
                </Card>
            </div>
        )
}

export default Header