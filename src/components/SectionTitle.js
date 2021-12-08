import React from 'react'
import styled from 'styled-components'
const StyledTitle = styled.h2`
  font-weight: 800;
  z-index: 998;
  width: 100%;
  text-align: center;
  font-size: 0.4rem;
  margin: 0.4rem 0;
  color: #434142;
  font-weight: 800;
  &:after {
    content: '';
    display: block;
    background-size: 30%;
    background-repeat: no-repeat;
    background-position: center;
    height: 0.4rem;
    width: 100%;
    margin-top: 0.1rem;
  }
`
export default function SectionTitle({ title = '' }) {
  return <StyledTitle>{title}</StyledTitle>
}
