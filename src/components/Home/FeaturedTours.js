import React from "react"
import Tour from "../Tours/Tours"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link"

const getTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true} }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
const FeaturedTours = () => {
    const response = useStaticQuery(getTours)
    const tours = response.featuredTours.edges
    console.log(tours)
    
  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      hello from featured tours
      <Tour />
      <AniLink fade to="/tours" className="btn-primary">
        all Tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
