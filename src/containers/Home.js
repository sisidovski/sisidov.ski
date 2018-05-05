import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import Cover from '../components/Cover'
//
import BlogItem from '../components/BlogItem'

export default withRouteData(({ about, posts }) => (
  <div>
    Recent Posts:
    <ul className="blog-items">
      {posts
        .slice(0, 5)
        .map(post => (
          <BlogItem post={post} key={post.slug} />
        ))}
    </ul>
  </div>
))
