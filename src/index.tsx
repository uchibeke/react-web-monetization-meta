import * as React from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  PaymentPointer: string
}

export const ReactWebMonetizationMeta = ({ PaymentPointer }: Props) => {
  return (
    <Helmet>
      <meta name='monetization' content={PaymentPointer} />
    </Helmet>
  )
}
