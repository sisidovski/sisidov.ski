import React from 'react'

const isBrowser = () => typeof document !== 'undefined'

const Analytics = isBrowser() ? require('react-router-ga').default : {}

export default ({ children, ...rest }) => {
  return isBrowser() ? <Analytics {...rest}>{children}</Analytics> : children
}
