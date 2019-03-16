import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { City } from './'

const Wrapper = styled.div`
    padding: 50px 100px 50px 100px;
`

storiesOf('City', module)
    .add('single closed', () => (
        <Wrapper>
            <City
                isOpen={false}
                handleClick={() => null}
                cityName="Warsaw"
                description="Some description"
            />
        </Wrapper>
    ))
    .add('single open', () => (
        <Wrapper>
            <City
                isOpen={true}
                handleClick={() => null}
                cityName="Warsaw"
                description="Some description"
            />
        </Wrapper>
    ))
    .add('multiple closed', () => (
        <Wrapper>
            {[1, 2, 3, 4, 5].map(i => (
                <City
                    isOpen={false}
                    handleClick={() => null}
                    cityName="Warsaw"
                    description="Some description"
                />
            ))}
        </Wrapper>
    ))
    .add('multiple open', () => (
        <Wrapper>
            {[1, 2, 3, 4, 5].map(i => (
                <City
                    isOpen={true}
                    handleClick={() => null}
                    cityName="Warsaw"
                    description="Some description"
                />
            ))}
        </Wrapper>
    ))
