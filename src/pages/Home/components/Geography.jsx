import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GeographyLeft from "./GeographyLeft";
import GeographyRight from "./GeographyRight";
import GeoMain from "./GeoMain";

const K = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    color: #ccc;
    letter-spacing: 4px;
  `,
};
const COORDS = "coords";

function ChangeDegree(value) {
  const degree = Math.floor(value);
  const first = (value % 1) * 60;
  const minutes = Math.floor(first);
  const second =
    Math.floor(Number((first - minutes).toFixed(6)) * 60 * 100) / 1000000;

  return Number((degree + minutes / 100 + second).toFixed(6));
}
const Geography = ({ className }) => {
  const [currentLatLong, setCurrentLatLong] = useState(0);

  /* navigator.geolocation.getCurrentPosition 수락했을경우 */
  const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude, "?");
    const changeLatitude = ChangeDegree(latitude);
    const changeLongitude = ChangeDegree(longitude);

    const coordsObj = {
      latitude: changeLatitude,
      longitude: changeLongitude,
    };
    setCurrentLatLong(coordsObj);
    saveCoords(coordsObj);
  };
  /* navigator.geolocation.getCurrentPosition 거부 했을 경우 */
  const handleGeoError = () => {
    alert(
      "지역 값을 허용하지 않았습니다.\n사용자의 위치를 알아낼 수 있도록 위치값을 허용해 주십시오."
    );
  };

  const saveCoords = (coordsObj) => {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
  };
  /* 성공시 GeoSuccess / 실패시 GeoError */
  const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  };

  /* localStorage에 COORDS 유무에 따라 작용할 함수 (첫실행) */
  const loadCoords = () => {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
      askForCoords();
    } else {
      const parseCoords = JSON.parse(loadedCoords);
      setCurrentLatLong(parseCoords);
    }
  };

  useEffect(() => {
    loadCoords();
  }, []);

  return (
    <K.Container className={className}>
      <GeographyLeft />
      <GeoMain
        currentLatitude={currentLatLong.latitude}
        currentLongitude={currentLatLong.longitude}
        ChangeDegree={ChangeDegree}
      />
      <GeographyRight />
    </K.Container>
  );
};

export default Geography;
