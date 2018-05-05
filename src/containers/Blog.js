
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ posts }) => (
  <div>
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <Link to={`/blog/post/${post.slug}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
