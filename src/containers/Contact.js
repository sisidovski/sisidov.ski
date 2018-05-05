import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'

export default withRouteData(({ contact }) => (
  <div>
    {convert(contact.contents)}
  </div>
))
