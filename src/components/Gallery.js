import React from 'react'
import styled from 'styled-components'
import WeddingShot from '../assets/angel-imgs/photo2.jpeg'

const GalleryPhoto = styled.section`
  position: relative;
  width: 100%;
  height: 125vh;
  background-image: url(${WeddingShot});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 64%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 769px) {
    background-position-y: 88%;
    height: 42vh;
  }
`

export default function Gallery() {
  return <GalleryPhoto />
}
