import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Reset } from 'styled-reset'
import FirstView from '../components/FirstView'
import Couple from '../components/Couple'
import Wedding from '../components/Wedding'
import Rsvp from '../components/Rsvp'
import Welcome from '../components/Welcome'
import CommonStyle from '../components/CommonStyle'

export default function Index({ data }) {
  const { title: siteTitle, description: siteDescription } =
    data.site.siteMetadata
  return (
    <div>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <CommonStyle />
      <Reset />
      <FirstView />
      <Couple />
      <Rsvp />
      <Wedding />
    </div>
  )
}

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
