import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Confetti from 'confetti-react'

import HomeImage from '../assets/angel-imgs/photo1.jpeg'

const Cover = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${HomeImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 57%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 769px) {
    background-position: 63%;
    height: 53vh;
  }
`

export default function CoverPhoto() {
  return <Cover />
}
