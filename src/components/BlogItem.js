import React from 'react'
import { Link } from 'react-static'

export default ({post}) => (
  <li className="blog-item">
    <Link to={`/blog/post/${post.slug}/`}>
      <time dateTime={post.created}>{post.created}</time>
      <div className="blog-item__title">{post.title}</div>
    </Link>
  </li>
)
