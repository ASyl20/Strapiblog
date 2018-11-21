import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <form 
    name="contact"
    method="post"
    data-netlify='true'
    data-netlify-honeypot='bot-filed'
    >
      <input name="name" placeholder="Your Name" type="text"/>
      <button>Send</button>
    </form>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
