import React from 'react'
import styled from 'styled-components'
import Title from './SectionTitle'
import WeddingNote from '../assets/imgs/weddingnote.png'
import WeddingNote2 from '../assets/imgs/weddingnote.png'
import * as styles from './rsvp.module.css'

const StyledWrapper = styled.section`
  position: relative;
  background-color: #fff;
  padding: 0.3rem 0.1rem;
  font-size: 18px;
  .formWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .label,
  .legend,
  .fieldset {
    margin-top: 20px;
    width: 100%;
  }
  .submitButton {
    display: flex;
    justify-content: center;
  }
`
export default function Rsvp({}) {
  return (
    <StyledWrapper>
      <Title title="RSVP" />
      <div className="formWrapper">
        <form name="RSVP" method="POST" data-netlify="true">
          <label className="label">
            Your name<span>*</span>
          </label>
          <input type="text" name="name" id="name" />
          <label className="label">
            E-mail<span>*</span>
          </label>
          <input type="email" name="email" id="email" />
          <label className="label">Phone number</label>
          <input type="tel" name="phone" id="phone" />
          <label className="label">
            Number of guests you'll bring (ex. you)<span>*</span>
          </label>
          <select name="guests" id="guests">
            <option value="0">0</option>
            <option value="1" selected>
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <fieldset className="fieldset">
            <legend className="legend">Are you...?</legend>
            <input type="radio" name="meal" value="veg" id="veg" />
            <label for="veg">Vegetarian</label>
            <input type="radio" name="meal" value="meat" id="meat" checked />
            <label for="meat">MeatLover</label>
          </fieldset>
          <label className="label">Comments</label>
          <textarea name="coments" id="comments" rows="4"></textarea>
          <div className="submitButton">
            <button name="submit" class="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </StyledWrapper>
  )
}
