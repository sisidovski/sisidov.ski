import React from 'react'
import { Link, NavLink } from 'react-static'

export default () => (
  <header className="header">
    <Link className="header__title" to="/">Shunya Shishido</Link>
    <nav>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </nav>
  </header>
)
