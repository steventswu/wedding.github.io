import React from 'react'
import styled from 'styled-components'
import GrassView from '../assets/imgs/grassview.jpg'

const GalleryPhoto = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${GrassView});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 57%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 769px) {
    background-position: 57%;
    height: 35vh;
  }
`

export default function Gallery() {
  return <GalleryPhoto />
}
