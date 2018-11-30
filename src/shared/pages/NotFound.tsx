import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import * as theme from '~/theme'

console.log('theme: ', theme)

const Wrapper = styled.div`
    margin: 50px auto;
    max-width: 640px;
    padding: 24px;
    text-align: center;

    h1 {
        margin-bottom: 40px;
    }
`

const FourOhFour: React.SFC = () => (
    <>
        <Helmet>
            <title>Not Found</title>
        </Helmet>
        <Wrapper>
            <h1>Error 404</h1>
            <p>Sorry, this page cannot be found.</p>
        </Wrapper>
    </>
)

export default FourOhFour
