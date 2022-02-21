import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Confetti from 'confetti-react'

import FamilyPortrait from '../assets/angel-imgs/coverphoto.jpg'

const StyledWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 245vh;
  background-image: url(${FamilyPortrait});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 769px) {
    height: 100vh;
  }
`

export default function FirstView() {
  const [size, setSize] = useState(null)
  const container = useRef(null)
  // Create reference to store the Typed instance itself
  useEffect(() => {
    if (container) {
      setTimeout(() => {
        const { width, height } = getComputedStyle(container.current)
        setSize({ width, height })
      }, 500)
    }
  }, [])
  return (
    <StyledWrapper ref={container}>
      {size && (
        <Confetti
          width={size.width}
          height={size.height}
          className="mask"
          recycle={true}
          numberOfPieces={99}
          wind={0.01}
          gravity={0.1}
          opacity={0.8}
          tweenDuration={8000}
        />
      )}
    </StyledWrapper>
  )
}
