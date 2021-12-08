import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Title from './SectionTitle'
import FrameImage from '../assets/imgs/frame.png'
import Steven from '../assets/imgs/steven.jpg'
import Ting from '../assets/imgs/ting.jpg'

const StyledWrapper = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 0.3rem 0;
  .cp {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 414px) {
      flex-direction: column;
      margin: 0;
    }
    .profile {
      color: #222;
      padding: 0.4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: inherit.4rem;
      .pic {
        width: 2.8rem;
        height: 2.8rem;
        background-repeat: no-repeat;
        background-size: 80%, 100%;
        background-position: center;
        overflow: hidden;
        &.boy {
          background-image: url(${Steven});
          background-size: 75%, 100%;
          background-position-y: 5px;
        }
        &.girl {
          background-image: url(${Ting});
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        font-size: 0.4rem;
        padding: 0.2rem 0;
        margin: 0.2rem 0;
      }
      .intro {
        font-size: 0.12rem;
        white-space: nowrap;
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
      <Title title="新郎 · 新娘" />
      <div className="cp">
        <div className="profile">
          <div className="pic boy" />
          <div className="name">Steven Wu🤵🏻</div>
          {/* <div className="intro">我有三样东西不可或缺：水，空气，以及{tips[pos].m}那个女人</div> */}
        </div>
        <div className="profile">
          <div className="pic girl" />
          <div className="name">Yi-Ting Ho👰🏻</div>
          {/* <div className="intro">我有三样东西不可或缺：水，空气，以及{tips[pos].w}那男人</div> */}
        </div>
      </div>
    </StyledWrapper>
  )
}
