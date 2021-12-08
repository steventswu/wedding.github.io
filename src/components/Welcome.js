import React from 'react'
import styled from 'styled-components'
import Title from './SectionTitle'

const StyledWrapper = styled.section`
  width: 100%;
  background-color: #eee;
  padding: 0.3rem 0 1rem 0;
  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
`
export default function Welcome() {
  return (
    <StyledWrapper>
      <Title title="RSVP" />
    </StyledWrapper>
  )
}
