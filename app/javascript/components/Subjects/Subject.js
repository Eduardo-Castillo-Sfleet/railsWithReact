import React, { Fragment } from 'react'

//AntDesign
import { Card } from 'antd';

const Subject = (props) => {

    return( 
        <Fragment>
             <Card title={props.attributes.name} extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p className="card">{props.attributes.description}</p>
            </Card>
        </Fragment>
    )
}

export default Subject