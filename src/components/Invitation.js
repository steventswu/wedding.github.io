import React from 'react'
import styled from 'styled-components'
import invitation from '../assets/angel-imgs/invitation.jpg'

const Invite = styled.section`
  position: relative;
  width: 100%;
  height: 150vh;
  background-image: url(${invitation});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  ${'' /* background-attachment: fixed; */}
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 769px) {
    background-position: 51%;
    height: 48vh;
  }
`
export default function Invitation({}) {
  return <Invite />
}
