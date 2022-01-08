import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Reset } from 'styled-reset'
import LandingPage from '../components/LandingPage'
import CoverPhoto from '../components/CoverPhoto'
import Word from '../components/Word'
import Invitation from '../components/Invitation'
import Wedding from '../components/Wedding'
import Gallery from '../components/Gallery'
import Rsvp from '../components/Rsvp'
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
      <LandingPage />
      <CoverPhoto />
      <Word />
      <Invitation />
      <Wedding />
      <Gallery />
      <Rsvp />
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
