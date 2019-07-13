import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './pages/main'
import Chat from './pages/chat/chat'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/chat/:username' component={Chat} />
        </Switch>
    </BrowserRouter>
)

export default Routes