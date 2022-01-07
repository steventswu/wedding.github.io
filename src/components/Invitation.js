import React from 'react'
import styled from 'styled-components'
import invitation from '../assets/imgs/invitation.jpeg'

const Invite = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${invitation});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  ${'' /* background-attachment: fixed; */}
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 769px) {
    background-position: 50%;
    height: 43vh;
  }
`
export default function Invitation({}) {
  return <Invite />
}
