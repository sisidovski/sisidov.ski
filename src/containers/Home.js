import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import Cover from '../components/Cover'
//

export default withRouteData(({ about, posts }) => (
  <div>
    <ul>
      {posts
        .slice(0, 5)
        .map(post => (
        <li key={post.slug}>
          <Link to={`/blog/post/${post.slug}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
