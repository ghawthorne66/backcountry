import React from "react"
import AniLink from  "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import {graphql} from 'gatsby'
import FeaturedTours from '../components/Home/FeaturedTours'

export default ({data}) => (
    <Layout>
      <StyledHero home='true' img={data.defaultBcg.childImageSharp.fluid}>
        <Banner 
        title="continue exploring" 
        info="Parfaite l'art charme musculeux tant a pleure-t-elle. Vois faudra frémir abondent dans. Voici au dans déplore doué. Tete adorablement d'un doué a vraiment fatuité face. Trésor de tes atrocement ce. "
        >
        <AniLink fade to="/tours" className="btn-white">
        explore tours
        </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
      <FeaturedTours />
      
    
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
