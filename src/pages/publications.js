import React from "react"
import Layout from "../components/layout"
import Publication from "../components/publication"
import Citations from "../components/citations"
import PublicationData from "../../content/publications.yaml"

export default props => {
  const publications = PublicationData.map((item, index) => (
    <Publication
      key={index}
      title={item.Title}
      authors={item.Authors}
      journal={item.Journal}
      year={item.Year}
      preprint={item.Preprint}
      badges = {item.URLs || []}
    />
  ))

  return (
    <Layout
      pageTitle="Publications"
      pageDescription="an overview of my scientific publications"
      showTitle={true}
    >
      <Citations />
      <div className="citations">
      * These authors contributed equally to this work
      </div>
      {publications}
    </Layout>
  )
}
