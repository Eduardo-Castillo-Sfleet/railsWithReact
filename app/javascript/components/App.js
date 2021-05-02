import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Subjects from './Subjects/Subjects'
import Subject from './Subject/Subject'

const App = () => {

    return (<Switch>
        <Route exact path="/" component={Subjects}></Route>
        <Route exact path="/subjects/:id" component={Subject}></Route>
    </Switch>)

}

export default App