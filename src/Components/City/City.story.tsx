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
                i={1}
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
                i={1}
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
                    i={i}
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
                    i={i}
                    isOpen={true}
                    handleClick={() => null}
                    cityName="Warsaw"
                    description="Some description"
                />
            ))}
        </Wrapper>
    ))
