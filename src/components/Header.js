import React from 'react'
import { Link, NavLink } from 'react-static'

const publicCVURL = 'https://docs.google.com/document/d/1bI4G3AYuosCsoz959AqeF_8PZ2QIKB2TANqMx5ZIvgs/edit?usp=sharing'

export default () => (
  <header className="header">
    <Link className="header__title" to="/">Shunya Shishido</Link>
    <nav>
      <NavLink to="/about">About</NavLink>
    </nav>
  </header>
)
