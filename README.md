# react-webmonetization-meta

> Web monetization for React apps
> This reusable React component will add a custom Web Monetization payment pointer to the document head.
> React Web Monetization takes a Payment pointer and outputs plain HTML Web monitization meta tag. It's dead simple, and React beginner friendly.

[![NPM](https://img.shields.io/npm/v/react-webmonetization-meta.svg)](https://www.npmjs.com/package/react-webmonetization-meta) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-webmonetization-meta
```

## Usage

```tsx
import React, { Component } from 'react'

import ReactWebMonetizationMeta from 'react-webmonetization-meta'

const Example = () => {
  // Change to:
  //   your Interledger payment pointer or
  //   the Interledger payment pointer of your user or
  //   the Interledger payment pointer of the content creator
  const PaymentPointer = '$ilp.uphold.com/B3wYJrpHiUyQ'
  return (
    <div>
      Some JSX
      <ReactWebMonetizationMeta PaymentPointer={PaymentPointer} />
      Some other JSX
    </div>
  )
}
```

## License

MIT © [uchibeke](https://github.com/uchibeke)
