import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(({ post }) => (
  <article>
    <h3>{post.title}</h3>
    <time dateTime={post.created}>{post.created}</time>
    {convert(post.contents)}
  </article>
))
