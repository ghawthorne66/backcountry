import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import {graphql} from 'gatsby'

export default ({data}) => (
    <Layout>
      <StyledHero home='true' img={data.defaultBcg.childImageSharp.fluid}>
        <Banner 
        title="continue exploring" 
        info="Parfaite l'art charme musculeux tant a pleure-t-elle. Vois faudra frémir abondent dans. Voici au dans déplore doué. Tete adorablement d'un doué a vraiment fatuité face. Trésor de tes atrocement ce. "
        >
        <Link to="/tours" className="btn-white">
        explore tours
        </Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
      
    
  </Layout>
 
)

export const query = graphql`
query{
  defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        src
      }
    }
  }
}`
