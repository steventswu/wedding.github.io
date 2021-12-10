import React from 'react'
import styled from 'styled-components'
const StyledTitle = styled.h2`
  font-weight: 800;
  z-index: 998;
  width: 100%;
  text-align: center;
  font-size: 0.4rem;
  color: #434142;
  font-weight: 800;
`
export default function SectionTitle({ title = '' }) {
  return <StyledTitle>{title}</StyledTitle>
}
