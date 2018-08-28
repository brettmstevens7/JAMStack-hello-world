import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello!</h1>
    <p>My name is Brett.</p>
    <p>Looking forward to building something great!</p>
    <Link to="/page-2/">Don't go to page 2... there's nothing there!</Link>
  </div>
)

export default IndexPage
