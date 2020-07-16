import React from "react";
import styled from "styled-components";
import { FiChevronsUp, FiInstagram } from "react-icons/fi";
import { FaGithub, FaCodepen } from "react-icons/fa";
import { useScrollFadeIn } from "../../../hooks";

const F = {
  Container: styled.div`
    width: 100%;
    height: 30%;
    /* padding: 5rem 0; */
    background-color: #1b242f;
    position: relative;
    display: flex;
    flex-direction: column;
  `,
  UpButton: styled.button`
    position: absolute;
    top: -10%;
    width: 3%;
    left: 48.5%;
    height: 17%;
    border: 0;
    /* border-radius: 10px; */
    font-size: 2rem;
    color: white;
    text-align: center;
    cursor: pointer;
    background-color: #e31b6d;
  `,
  SnsIconsBlock: styled.div`
    display: flex;
    width: 30%;
    height: 60%;
    /* background: white; */
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
  `,
  SnsButtonBlock: styled.div`
    width: 15%;
    height: 50%;
    background: #252934;
    border: 1px solid #1b242f;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    &:hover {
      background-color: #04c2c9;
    }
  `,
  SnsButton: styled.a`
    color: white;
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
      color: white;
    }
    svg {
      width: 80%;
      height: 80%;
    }
  `,
  Info: styled.div`
    width: 100%;
    height: 40%;
    text-align: center;
    color: white;
    font-family: "Lato", sans-serif;

    letter-spacing: 3px;
  `,
};

const SNS_ICONS = [
  {
    name: "Insta",
    href: "https://www.instagram.com/kiryeonee_wj/",
    icon: <FiInstagram />,
  },
  {
    name: "Github",
    href: "https://github.com/KilHyun-Kim",
    icon: <FaGithub />,
  },
  {
    name: "CodePen",
    href: "https://codepen.io/Kilikili",
    icon: <FaCodepen />,
  },
];
const clickPageUp = () => {
  window.scrollTo(0, 0);
};

const LastFooter = ({ animate }) => {
  const animatedItem = {
    0: useScrollFadeIn("down", 1, 0.5),
  };

  return (
    <F.Container {...animatedItem[0]}>
      <F.UpButton onClick={clickPageUp}>
        <FiChevronsUp />
      </F.UpButton>
      <F.SnsIconsBlock>
        {SNS_ICONS.map((item, index) => (
          <F.SnsButtonBlock key={index}>
            <F.SnsButton
              key={index}
              href={item.href}
              alt={item.name}
              target="_blank"
            >
              {item.icon}
            </F.SnsButton>
          </F.SnsButtonBlock>
        ))}
      </F.SnsIconsBlock>
      <F.Info>
        KILIKILI{" "}
        <span style={{ color: "#e31b6d", letterSpacing: "0" }}>©2020</span>
      </F.Info>
    </F.Container>
  );
};

export default LastFooter;
