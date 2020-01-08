import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default () => (
    <Layout>
      Hello world!<Link to="/blog/"> blog page</Link>
      <h1 style={{fontSize: '18px', textTransform:'capitalize', color: 'red'}}>Hello Styling</h1>
     
  </Layout>
 
)
