import React from 'react'
import ReactDOM from 'react-dom'
import App from '../shared/App'
import { BrowserRouter } from 'react-router-dom'
import { isPreRenderedOnServer } from '~/environment'

const renderFn = isPreRenderedOnServer() ? ReactDOM.hydrate : ReactDOM.render
renderFn(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
