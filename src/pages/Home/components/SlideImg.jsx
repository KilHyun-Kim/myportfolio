import React from "react";
import styled from "styled-components";

export default function SlideImg({ img }) {
  return <IMG src={img} />;
}

const IMG = styled.img`
  width: 100%;
  height: 100%;
`;
