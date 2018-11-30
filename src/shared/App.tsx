import React from 'react'
import { ThemeProvider } from 'styled-components'
import * as theme from './theme'
import NotFound from './pages/NotFound'

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <>
                    <div id="app__container">
                        <NotFound />
                    </div>
                </>
            </ThemeProvider>
        )
    }
}

export default App
