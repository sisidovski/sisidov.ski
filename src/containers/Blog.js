import React from 'react'
import { withRouteData, Link } from 'react-static'
//
import BlogItem from '../components/BlogItem'

export default withRouteData(({ posts }) => (
  <div>
    All Posts:
    <ul className="blog-items">
      {posts.map(post => (
        <BlogItem post={post} key={post.slug} />
      ))}
    </ul>
  </div>
))
