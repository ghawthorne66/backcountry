import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
// import Day from "../components/SingleTour/Day"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Template = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey,
  } = data.tour

  const [mainImage, ...tourImages] = images

  return (<Layout>
      <StyledHero img={mainImage.fluid}/>
      <section className={styles.template}>
      <div className={styles.center}>
      <div className={styles.images}>
      {tourImages.map((item, index) => {
          return (
          <Img 
          key={index}
          fluid={item.fluid}
          alt="single tour"
          className={styles.image}
          />
          )
      })}
      </div>
      </div>
      </section>

      </Layout>
  )
}
  

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default Template
