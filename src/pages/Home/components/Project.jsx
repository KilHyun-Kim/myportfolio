import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const Pro = {
  Container: styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    font-family: "Ubuntu", sans-serif;
  `,
  Header: styled.div`
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    padding: 1rem 0;
    font-size: 2rem;
    font-weight: bold;
  `,
  BlackLine: styled.div`
    margin: 1.5rem auto;
    width: 5%;
    height: 3px;
    background-color: black;
  `,
  ItemWrapper: styled.div`
    width: 90%;
    margin: 0 auto;
  `,
};
const Project = ({ className }) => {
  return (
    <Pro.Container className={className}>
      <Pro.ItemWrapper>
        <ProjectItem />
      </Pro.ItemWrapper>
    </Pro.Container>
  );
};

export default Project;
