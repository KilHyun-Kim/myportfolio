import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const F = {
  Container: styled.div`
    width: 100%;
    height: 80%;
    background-color: #252934;
  `,
  ContactWrapper: styled.div`
    width: 80%;
    margin: 0 auto;
  `,
  Title: styled.div`
    text-align: center;
    font-weight: bold;
  `,
  CenterP: styled.p`
    font-size: 3em;
  `,
  Question: styled.h4`
    font-family: "Lato", sans-serif;
    color: #04c2c9;
  `,

  BlackLine: styled.div`
    margin: 1rem auto;
    width: 8%;
    height: 3px;
    background-color: black;
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
  EmailSendButton: styled.button`
    width: 30%;
    padding: 0.5rem 0;
    border: 1px solid #04c2c9;
    border-radius: 15px;
    color: #04c2c9;
    &:hover {
      color: white;
      background-color: #04c2c9;
    }
  `,
};

const Footer = () => {
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
          console.log(result.text);
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
  return (
    <F.Container>
      <F.ContactWrapper>
        <F.Title>
          <F.CenterP>Contact</F.CenterP>
          <F.BlackLine />
          <F.Question>Have a question or want to work together?</F.Question>
        </F.Title>
        <F.FormContainer onSubmit={sendEmail}>
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
            placeholder="e-mail"
          />

          <F.EmailTextArea
            className="input-text"
            name="message"
            placeholder="message"
          />
          <F.EmailSendButton type="submit">보내기</F.EmailSendButton>
        </F.FormContainer>
      </F.ContactWrapper>
    </F.Container>
  );
};

export default Footer;
