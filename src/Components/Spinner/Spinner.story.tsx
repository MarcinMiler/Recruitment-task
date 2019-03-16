import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Spinner } from './'

storiesOf('Spinner', module)
    .add('basic', () => <Spinner color="red" />)
    .add('bigger', () => <Spinner size={100} color="red" />)
