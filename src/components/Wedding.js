import React from 'react'
import styled from 'styled-components'
import SeaView from '../assets/imgs/seaview.jpg'
import Map2Image from '../assets/imgs/map.hotel.png'

const StyledWrapper = styled.section`
  z-index: 1;
  position: relative;
  width: 100%;
  height: 96vh;
  background-color: #fff;
  padding: 0.3rem 0;
  background: url(${SeaView});
  ${'' /* background: #c8d9e4; */}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 55%;
  &:after {
    /* content: ""; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(2, 2, 2, 0.3);
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .box {
      min-height: 4.4rem;
      width: 100%;
      z-index: 9;
      color: #fff;
      font-size: 22px;
      border-radius: 5px;
      .title {
        font-size: 0.8rem;
        width: 100%;
        text-align: center;
      }
      .items {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.2rem 0;
        .item {
          display: flex;
          align-items: flex-start;
          margin: 0.1rem 0;

          .label {
            color: #000;
            white-space: nowrap;
            &:after {
              content: '：';
            }
          }
          .txt {
            white-space: nowrap;
            font-weight: 800;
            font-size: 0.4rem;
          }
          @media screen and (max-width: 768px) {
            .label {
              margin-bottom: 0.12rem;
            }
          }
        }
      }
      .loc {
        display: flex;
        justify-content: center;
        .map {
          img {
            border-radius: 5px;
          }
          &:hover img {
            box-shadow: 0px 1px 20px black;
          }
        }
      }
      .imgMap {
        width: 395px;
        height: 265px;
        @media screen and (max-width: 414px) {
          width: 300px;
          height: 175px;
        }
      }
    }
  }
`
export default function Wedding() {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="box">
          <h1 className="title">Ceremony/Wedding</h1>
          <ul className="items">
            <li className="item">
              <span className="label">時間</span>
              <span className="txt">2022.03.26 18:00（星期六）</span>
            </li>
            <li className="item">
              <span className="label">地點</span>
              <span className="txt">In Between | 誠品行旅 | Eslite</span>
            </li>
          </ul>
          <div className="loc">
            <a
              className="map"
              target="_blank"
              href={'https://goo.gl/maps/q45X54VxhaM3QwT76'}
            >
              <img className="imgMap" src={Map2Image} alt="map" />
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}
