import React from 'react'

import { ReactWebMonetizationMeta } from 'react-webmonetization-meta'
import 'react-webmonetization-meta/dist/index.css'

const App = () => {
  const ExamplePaymentPointer = '$ilp.uphold.com/B3wYJrpHiUyQ' // Please change to your own Interledger payment pointer
  return <ReactWebMonetizationMeta PaymentPointer={ExamplePaymentPointer} />
}

export default App
