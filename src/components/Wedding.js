import React from 'react'
import styled from 'styled-components'
import Map2Image from '../assets/angel-imgs/map-hotel.png'

const StyledWrapper = styled.section`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 65vh;
  padding: 0.3rem 0;
  background: #c79fd0;
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
            font-weight: bold;
            font-size: 0.5rem;
            color: #fff;
          }
          @media screen and (max-width: 768px) {
            .txt {
              font-family: sans-serif;
              font-size: 0.3rem;
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
        width: 500px;
        height: 300px;
        @media screen and (max-width: 768px) {
          width: 330px;
          height: 220px;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: 45vh;
  }
`
export default function Wedding() {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="box">
          <ul className="items">
            <li className="item">
              <span className="txt">2022.05.08 星期日 18:00</span>
            </li>
            <li className="item">
              <span className="txt">台中林酒店 THE LIN 《3F國際廳》</span>
            </li>
            <li className="item">
              <span className="txt">台中市西屯區朝富路99號</span>
            </li>
          </ul>
          <div className="loc">
            <a
              className="map"
              target="_blank"
              href={'https://goo.gl/maps/ZJC1opMbz59pJCwA8'}
            >
              <img className="imgMap" src={Map2Image} alt="map" />
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}
