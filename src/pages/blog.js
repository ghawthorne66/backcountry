import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export const blog = props => {
    console.log(props)
    
    return (
        <Layout>
            hello from blog pag
            <Link to="/">home</Link>
            
        </Layout>
    )
}

export default blog