import React, { useState, useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { HiChevronDoubleDown } from 'react-icons/hi'
import Confetti from 'confetti-react'

import HomeImage from '../assets/imgs/first.jpg'

const AniDown = keyframes`
    from{
        transform:translateY(-10px);
        opacity:.1;
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
`
const StyledWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${HomeImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 769px) {
    background-attachment: fixed;
  }
  .down {
    position: absolute;
    width: 0.44rem;
    left: 50%;
    bottom: 0.1rem;
    margin-left: -0.22rem;
    animation-direction: alternate-reverse;
    animation: ${AniDown} 1s infinite;
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
      <HiChevronDoubleDown className="down" />
    </StyledWrapper>
  )
}
