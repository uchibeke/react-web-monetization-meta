import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { ReactWebMonetizationMeta } from '.'

describe('ReactWebMonetizationMeta', () => {
  it('is truthy', () => {
    expect(ReactWebMonetizationMeta).toBeTruthy()
  })

  it('sets the web monitization meta', () => {
    expect(ReactWebMonetizationMeta).toBeTruthy()

    const container = document.createElement('div')
    document.body.appendChild(container)

    const PaymentPointer = '$ilp.uphold.com/B3wYJrpHiUyQ' // Please change to your own Interledger payment pointer

    act(() => {
      ReactDOM.render(
        <ReactWebMonetizationMeta PaymentPointer={PaymentPointer} />,
        container
      )
    })
    // TODO: Add tests
    // const monetizationMeta = document.querySelector("meta[name='monetization']")
    // console.log({ document })
    // console.log({ monetizationMeta })
    // expect(monetizationMeta).toBeDefined()
    // expect(monetizationMeta).not.toBeNull()
    // // @ts-ignore
    // expect(monetizationMeta && monetizationMeta.content).toEqual(PaymentPointer)
    ReactDOM.unmountComponentAtNode(container)
  })
})
