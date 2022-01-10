import React, { useState } from 'react'
import styled from 'styled-components'
import Title from './SectionTitle'
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
    font-size: 25px;
    @media screen and (max-width: 414px) {
      font-size: 15px;
    }
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
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
`
export default function Rsvp({}) {
  const [status, setStatus] = useState()

  const radioHandler = (value) => {
    setStatus(value)
  }

  return (
    <StyledWrapper>
      <Title title="RSVP" />
      <div className="formWrapper">
        <form
          name="RSVP"
          action="/success/"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="RSVP" />
          <label className="label">姓名</label>
          <input name="Name" id="name" />
          <label className="label">您是...</label>
          <select name="Guests" id="guests">
            <option value="" selected disabled>
              請選擇
            </option>
            <option value="steven-friend">Steven 朋友</option>
            <option value="steven-family">Steven 家人</option>
            <option value="steven-parents-friend">吳爸媽朋友</option>
            <option value="ting-friend">Ting 朋友</option>
            <option value="ting-family">Ting 家人</option>
            <option value="ting-parents-friend">何爸媽朋友</option>
            <option value="common-friend">共同朋友</option>
          </select>
          <fieldset className="fieldset">
            <legend className="legend">3/26 有空來我們的婚禮嗎</legend>
            <input type="radio" name="Attend" value="attend" id="attend" />
            <label for="attend">會呦，不見不散!</label>
            <br />
            <input type="radio" name="Attend" value="busy" id="busy" />
            <label for="absence">那天有事，祝福你們!</label>
            <br />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="legend">是否需要喜帖</legend>
            <input
              type="radio"
              name="Card"
              value="email"
              id="email"
              onClick={() => radioHandler('email')}
            />
            <label for="email">需要，請寄電子喜帖給我</label>
            <br />
            <input
              type="radio"
              name="Card"
              value="paper"
              id="paper"
              onClick={() => radioHandler('paper')}
            />
            <label for="paper">需要，請寄紙本喜帖給我</label>
            <br />
            <input
              type="radio"
              name="Card"
              value="none"
              id="none"
              onClick={() => radioHandler(undefined)}
            />
            <label for="none">不用唷，婚禮相關資訊我知道了</label>
          </fieldset>
          <label className={`${status === 'email' ? 'show' : 'hide'} label`}>
            電子信箱
          </label>
          <input
            className={`${status === 'email' ? 'show' : 'hide'}`}
            name="emailaddress"
            id="emailaddress"
          />
          <label className={`${status === 'paper' ? 'show' : 'hide'} label`}>
            收件地址
          </label>
          <input
            className={`${status === 'paper' ? 'show' : 'hide'}`}
            name="paperaddress"
            id="paperaddress"
          />
          <label className="label">共幾個人出席 (包含自己唷)</label>
          <input type="number" name="People" id="people" min="1" />
          <label className="label">另外需要幾張兒童座椅</label>
          <input type="number" name="Infant" id="infant" min="0" />
          <fieldset className="fieldset">
            <legend className="legend">您...</legend>
            <input type="radio" name="meal" value="meat" id="meat" checked />
            <label for="meat">吃葷</label>
            <input type="radio" name="meal" value="veg" id="veg" />
            <label for="veg">吃素</label>
          </fieldset>
          <label className="label">有什麼話想跟我們說嗎</label>
          <textarea name="comments" id="comments" rows="4"></textarea>
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
