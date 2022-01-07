import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Confetti from 'confetti-react'

import HomeImage from '../assets/imgs/first.jpg'

const Cover = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${HomeImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 57%;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 769px) {
    background-attachment: initial;
  }
`

export default function CoverPhoto() {
  return <Cover />
}
