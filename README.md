[![CircleCI](https://circleci.com/gh/MarcinMiler/test.svg?style=svg)](https://circleci.com/gh/MarcinMiler/test)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e4c46f2a-3c03-4ccd-9791-fb0364bb3e61/deploy-status)](https://app.netlify.com/sites/marcinmiler-test/deploys)

# Test app

Link to live site: [https://marcinmiler-test.netlify.com/](https://marcinmiler-test.netlify.com/)

Link to storybook: [https://marcinmiler-test-storybook.netlify.com](https://marcinmiler-test-storybook.netlify.com)

## Description

Technology stack: React (0 class components, 100% function components with hooks), Typescript, storybook, jest, react-testing-library, react-hooks-testing-library

I have a problem with openaq api, the https://api.openaq.org/v1/measurements endpoint is working only with country,limit parameters, when I specify order,sort,parameter query (https://api.openaq.org/v1/measurements?country=PL&parameter=pm25&order_by=value&limit=10&sort=desc) the api dont respond, I use https://api.openaq.org/v1/cities endpoint instead.

## Run local

### web:

1. `git clone https://github.com/MarcinMiler/test.git`

2. `yarn`

3. `yarn start`

### storybook

1. `yarn storybook`

### tests:

1. `yarn test`
