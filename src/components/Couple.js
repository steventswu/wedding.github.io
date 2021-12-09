import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Title from './SectionTitle'
import Steven from '../assets/imgs/steven.jpg'
import Ting from '../assets/imgs/ting.jpg'
import WeddingNote from '../assets/imgs/weddingnote.png'

// background-image: url(${WeddingNote});
// background-size: cover;

const StyledWrapper = styled.section`
  width: 100%;
  background-color: #f9e4e4;
  padding: 0.3rem 0;
  .cp {
    display: flex;
    align-items: center;
    justify-content: center;
    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: inherit.4rem;
      .pic {
        width: 7.5rem;
        height: 3.8rem;
        background-image: url(${WeddingNote});
        background-size: 100%, 100%;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
        @media screen and (max-width: 414px) {
          width: 6rem;
          height: 2.8rem;
        }
      }
    }
  }
`
export default function Couple({}) {
  const [pos, setPos] = useState('h')
  useEffect(() => {
    if (window.innerWidth <= 414) {
      setPos('v')
    }
  }, [])
  return (
    <StyledWrapper>
      <div className="cp">
        <div className="profile">
          <div className="pic" />
          <div className="pic" />
        </div>
      </div>
    </StyledWrapper>
  )
}
