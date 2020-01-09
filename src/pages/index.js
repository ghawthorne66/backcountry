import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"

export default () => (
    <Layout>
      <SimpleHero>
        <Banner 
        title="continue exploring" 
        info="Parfaite l'art charme musculeux tant a pleure-t-elle. Vois faudra frémir abondent dans. Voici au dans déplore doué. Tete adorablement d'un doué a vraiment fatuité face. Trésor de tes atrocement ce. "
        >
        <Link to="/tours" className="btn-white">
        explore tours
        </Link>
        </Banner>
      </SimpleHero>
     
  </Layout>
 
)
