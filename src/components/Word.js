import React from 'react'
import styled from 'styled-components'
import words from '../assets/imgs/words.jpeg'

const Words = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${words});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 52%;
  ${'' /* background-attachment: fixed; */}
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 769px) {
    background-position: 53%;
    height: 39vh;
  }
`
export default function Word({}) {
  return <Words />
}
