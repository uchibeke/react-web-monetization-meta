# react-webmonetization-meta

> Web monetization for React apps:
> This reusable React component will add a custom Web Monetization payment pointer to the document head.
> React Web Monetization takes a Payment pointer and outputs plain HTML Web monetization meta tag. It's dead simple, and React beginner friendly.

[![NPM](https://img.shields.io/npm/v/react-webmonetization-meta.svg)](https://www.npmjs.com/package/react-webmonetization-meta) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![CLA assistant](https://cla-assistant.io/readme/badge/uchibeke/react-webmonetization-meta)](https://cla-assistant.io/uchibeke/react-webmonetization-meta)

## Installation

Yarn:

```bash
yarn add react-webmonetization-meta
```

npm:

```bash
npm install --save react-webmonetization-meta
```

## Usage - Enabling Web Monetization

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

result (in console):

```html
<head>
  <title>react-webmonetization-meta</title>
  <meta name="monetization" content="$ilp.uphold.com/B3wYJrpHiUyQ" />
</head>
```

See below for a full reference guide.

## Features

- Supports customization of monetization pointer
- Nested components override duplicate Web monetization metas.

## Contributing to this project

Please take a moment to review the [guidelines for contributing](CONTRIBUTING.md).

- [Pull requests](CONTRIBUTING.md#pull-requests)
- [Development Process](CONTRIBUTING.md#development)

## License

MIT © [uchibeke](https://github.com/uchibeke)

<img align="left" height="200" src="https://i0.wp.com/www.africahacks.com/wp-content/uploads/2020/03/Brand-Colours-1.png?fit=1123%2C257&ssl=1" />
