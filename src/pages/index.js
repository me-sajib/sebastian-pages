import React from "react"
import Layout from "../components/layout"
import Publication from "../components/publication"
import PublicationData from "../../content/publications.yaml"
import Citations from "../components/citations"
import { useStaticQuery, graphql, Link } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          about
        }
      }
    }
  `)

  const selected_publications = PublicationData.filter(
    publication => publication.Selected === 1
  ).map((item, index) => (
    <Publication
      key={index}
      title={item.Title}
      authors={item.Authors}
      journal={item.Journal}
      year={item.Year}
      badges={item.URLs || []}
    />
  ))

  return (
    <Layout pageTitle="About" pageDescription="Learn more about me" showTitle={false}>
      <div dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.about }} />
      <h3>
        Selected Publications{" "}
        <small>
          (<Link to="/publications">full list</Link>)
        </small>
      </h3>
      <Citations />
      {selected_publications}
    </Layout>
  )
}
