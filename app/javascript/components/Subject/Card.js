import React from 'react'

import { Card } from 'antd'

const Card = (props) => {

    return(
            <Card title={props.name} extra={<a href="#">More</a>}>
                {props.description}
            </Card>
        )
}

export default Card