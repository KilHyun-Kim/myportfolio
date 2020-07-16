import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { FcCheckmark } from "react-icons/fc";
import LastFooter from "./LastFooter";
import { useScrollFadeIn } from "../../../hooks";

const F = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    padding-top: 3rem;
    background-color: #252934;
    display: flex;
    flex-direction: column;
  `,
  ContactWrapper: styled.div`
    width: 80%;
    height: 70%;
    margin: 0 auto;
  `,
  Title: styled.div`
    text-align: center;
    font-weight: bold;
  `,
  CenterP: styled.p`
    font-size: 3em;
    color: white;
  `,
  Question: styled.h4`
    font-family: "Lato", sans-serif;
    color: #04c2c9;
    letter-spacing: 1px;
  `,

  WhiteLine: styled.div`
    margin: 1rem auto;
    width: 8%;
    height: 3px;
    background-color: white;
  `,
  FormContainer: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 40%;
    height: 300px;
    margin: 2rem auto;
  `,
  EmailInput: styled.input`
    height: 10%;
    background-color: #1e242c;
    border: 0;
  `,
  EmailTextArea: styled.textarea`
    height: 60%;
    background-color: #1e242c;
    border: 0;
  `,
  EmailSendButtonBlock: styled.div`
    width: 100%;
    text-align: right;
    margin-top: 0.5rem;
    position: relative;
  `,
  EmailSendButton: styled.button`
    width: 30%;
    padding: 0.5rem 0;
    border-radius: 15px;
    color: white;
    font-weight: bold;
    background-color: #252934;
    border: 1px solid #ffffff;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    &:hover {
      color: white !important;
      background-color: #04c2c9;
      text-shadow: none;
      border: 1px solid #04c2c9;
    }
  `,
  SuccessEmail: styled.div`
    position: absolute;
    top: 110%;
    color: #2ecc71;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-family: "Lato", sans-serif;
  `,
};

const Footer = () => {
  const [email, setEmail] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "kilikili",
        "template_UN6BBGLo",
        e.target,
        "user_5OLDa6Ulb0kvB7IvtN48o"
      )
      .then(
        (result) => {
          setEmail(true);
          setTimeout(() => {
            setEmail(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  }
  function reset() {
    var el = document.getElementsByClassName("input-text");
    for (let i = 0; i < el.length; i++) {
      el[i].value = "";
    }
  }

  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.5),
    1: useScrollFadeIn("right", 1, 0.8),
    2: useScrollFadeIn("right", 1, 0.9),
    3: useScrollFadeIn("up", 1, 1.5),
  };
  return (
    <>
      <F.Container>
        <F.ContactWrapper>
          <F.Title {...animatedItem[0]}>
            <F.CenterP>Contact</F.CenterP>
            <F.WhiteLine />
            <F.Question>Have a question or want to work together?</F.Question>
          </F.Title>
          <F.FormContainer onSubmit={sendEmail} {...animatedItem[1]}>
            <input type="hidden" name="contact_number" />
            <F.EmailInput
              className="input-text"
              type="text"
              name="from_name"
              placeholder="Name"
            />
            <F.EmailInput
              className="input-text"
              type="email"
              name="user_email"
              placeholder="E-mail"
            />
            <F.EmailTextArea
              className="input-text"
              name="message"
              placeholder="Message"
            />
            <F.EmailSendButtonBlock {...animatedItem[2]}>
              <F.EmailSendButton type="submit">SUBMIT</F.EmailSendButton>
              {email ? (
                <F.SuccessEmail>
                  <FcCheckmark />
                  &nbsp; 이메일을 성공적으로 보냈습니다.
                </F.SuccessEmail>
              ) : (
                <></>
              )}
            </F.EmailSendButtonBlock>
          </F.FormContainer>
        </F.ContactWrapper>
        <LastFooter />
      </F.Container>
    </>
  );
};

export default Footer;
