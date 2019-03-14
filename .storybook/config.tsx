import * as React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react'
import { create } from '@storybook/theming'

import { GlobalStyle } from '../src/Theme'

const req = require.context('../src', true, /.story.tsx$/)

function loadStories() {
    req.keys().forEach(req)
}

const theme = create({
    base: 'dark',
    colorPrimary: '#FF4785',
    colorSecondary: '#1EA7FD'
})
addParameters({ options: { theme } })

const withGlobal = cb => (
    <>
        <GlobalStyle />
        {cb()}
    </>
)

addDecorator(withGlobal)

configure(loadStories, module)
