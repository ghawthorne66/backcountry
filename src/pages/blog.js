import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Images from "../examples/Images"

export const blog = props => {
    
    return (
        <Layout>
            hello from blog page
            <Link to="/">home</Link>
            <Images />
            
        </Layout>
    )
}

export default blog