import React from 'react'
import App from './App'
import { render } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
})
