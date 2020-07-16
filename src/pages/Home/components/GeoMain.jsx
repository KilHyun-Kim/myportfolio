import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fullLine from "../../../images/합체.png";
import { useScrollFadeIn } from "../../../hooks";
import cloudy from "../../../images/cloudy-weather.gif";
import showerRain from "../../../images/rainy-weather.gif";
import rain from "../../../images/torrential-rain-weather.gif";
import sun from "../../../images/sun-weather.gif";
import stomy from "../../../images/stormy-weather.gif";
import lightsnowy from "../../../images/lightning-weather.gif";
import haze from "../../../images/haze-weather.gif";

const API_KEY = "01478b1046e705bec4b4eeda91b15f7b";
const K = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    .intro_line {
      height: 10%;
    }
    .intro_line2 {
      height: 10%;
      transform: rotate(180deg);
    }
    .intro_line img,
    .intro_line2 img {
      width: 100%;
      height: 100%;
    }
  `,
  ValueWrapper: styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-family: "Fredoka One", cursive;
    & + & {
    }
    .value {
      font-family: "Fredoka One", cursive;
      color: #000;
      font-size: 4rem;
      justify-content: center;
      width: 33.3%;
    }
  `,
  YourWrapper: styled.div`
    width: 33.3%;
    margin: 0 auto;
    position: relative;
    font-family: "Ubuntu", sans-serif;
    p {
      color: #000;
      width: 100%;
    }
  `,
  DistanceWrapper: styled.div`
    position: absolute;
    width: 100%;
    height: 60%;
    top: 130%;
    left: 0%;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    /* display: flex; */
    p {
      color: #000;
      height: 50%;
      justify-content: center;
      align-items: center;
      span {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  `,
  WeatherWrapper: styled.div`
    position: absolute;
    background-color: #000;
    width: 15%;
    height: 60%;
    top: -80%;
    left: 42.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    img {
      width: 80%;
      height: 80%;
      border-radius: 50%;
    }
  `,
};

// 내위치

const GeoMain = ({ currentLatitude, currentLongitude }) => {
  // 새로받은 위치값에대한 값 => Counter 함수 변화값 보여주는곳
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  /* number 변화 함수 */
  function numberCounter(target_number, setValue) {
    var count = 0;
    var diff = 0;
    var timer = null;
    const setValue2 = setValue;
    counter(count, diff, target_number, timer, setValue2);
  }
  function counter(count, diff, target_count, timer, setValue2) {
    const set = setValue2;
    diff = target_count - count;
    if (diff > 0) {
      count += Math.ceil(diff / 5);
      const countString = count
        .toString()
        .replace(/\B(?=(\d{4})+(?!\d))/g, ".");
      set(countString);
    }
    if (count < target_count) {
      timer = setTimeout(function () {
        counter(count, diff, target_count, timer, setValue2);
      }, 30);
    } else {
      clearTimeout(timer);
    }
  }

  function ceiling(lat, lng) {
    const latitude = Math.round(lat * 10000);
    const longitude = Math.round(lng * 10000);
    const position = {
      latitude,
      longitude,
    };
    return position;
  }

  const [calculate, setCalculate] = useState(0);
  const [distance, setDistance] = useState(false);

  useEffect(() => {
    const ceilingValue = ceiling(currentLatitude, currentLongitude);
    numberCounter(ceilingValue.latitude, setLatitude);
    numberCounter(ceilingValue.longitude, setLongitude);
  }, [currentLatitude]);

  const COORDS = "coords";
  const STATIC_LAT_HOURS = 37;
  const STATIC_LAT_MINUTES = 50;
  const STATIC_LAT_SECONDS = 4905;
  const STATIC_LNG_HOURS = 126;
  const STATIC_LNG_MINUTES = 93;
  const STATIC_LNG_SECONDS = 7002;

  function hourMinuteSec(Value, count) {
    const Calculates = Math.round(Value * 1000000);
    const hours = Number(String(Calculates).slice(0, count));
    const minutes = Number(String(Calculates).slice(count, count + 2));
    const seconds = Number(String(Calculates).slice(count + 2, count + 6));

    const values = [hours, minutes, seconds];
    return values;
  }

  function calculatedDistance(lat, lng) {
    const LatProcess = hourMinuteSec(lat, 2);
    const LngProcess = hourMinuteSec(lng, 3);
    const hoursLatDiff = Math.abs(STATIC_LAT_HOURS - LatProcess[0]);
    const minutesLatDiff = Math.abs(STATIC_LAT_MINUTES - LatProcess[1]);
    const secondLatDiff = Math.abs(STATIC_LAT_SECONDS - LatProcess[2]) / 100;
    const hoursLngDiff = Math.abs(STATIC_LNG_HOURS - LngProcess[0]);
    const minutesLngDIff = Math.abs(STATIC_LNG_MINUTES - LngProcess[1]);
    const secondsLngDIff = Math.abs(STATIC_LNG_SECONDS - LngProcess[2]) / 100;
    const result = Math.sqrt(
      Math.pow(
        hoursLatDiff * 111.3 + minutesLatDiff * 1.86 + secondLatDiff * 0.031,
        2
      ) +
        Math.pow(
          hoursLngDiff * 88.9 + minutesLngDIff * 1.48 + secondsLngDIff * 0.025,
          2
        )
    );
    if (result > 1) {
      if (result > 200) {
        setDistance(true);
        return `${Math.round(result)}km`;
      }
      setDistance(false);
      return `${Math.round(result)}km`;
    } else {
      return `${Math.round(result * 1000)}m`;
    }
  }

  useEffect(() => {
    if (localStorage.getItem(COORDS)) {
      const ValLat = JSON.parse(localStorage.getItem(COORDS)).latitude;
      const ValLng = JSON.parse(localStorage.getItem(COORDS)).longitude;
      const result = calculatedDistance(ValLat, ValLng);
      setCalculate(result);
    } else {
      const result = calculatedDistance(currentLatitude, currentLongitude);
      setCalculate(result);
    }
  }, [currentLatitude]);

  const [temPla, setTemPla] = useState(0);
  const [icon, setIcon] = useState(0);

  const getWeather = (lat, lng) => {
    if (lat === undefined && lng === undefined) {
      return;
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          const weather = json.weather[0].main;
          const icon = json.weather[0].icon;
          // console.log(weather);
          const temPlaObj = {
            weather,
            icon,
          };
          return setTemPla(temPlaObj);
        });
    }
  };

  useEffect(() => {
    const coordsValue = JSON.parse(localStorage.getItem(COORDS));
    if (coordsValue) {
      getWeather(coordsValue.latitude, coordsValue.longitude);
    } else {
      getWeather(currentLatitude, currentLongitude);
    }
  }, [currentLatitude]);
  useEffect(() => {
    if (temPla.icon) {
      const iconValue = makeIcon(temPla.icon);
      setIcon(iconValue);
    } else {
      setIcon(sun);
    }
  }, [temPla]);
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.2),
    1: useScrollFadeIn("up", 1, 0.4),
    2: useScrollFadeIn("left", 1, 1.2),
  };
  const makeIcon = (icon) => {
    if (icon === "01d" || icon === "01n") {
      return sun;
    } else if (
      icon === "02d" ||
      icon === "02n" ||
      icon === "03d" ||
      icon === "03n" ||
      icon === "04d" ||
      icon === "04n"
    ) {
      return cloudy;
    } else if (icon === "9d" || icon === "9n") {
      return showerRain;
    } else if (icon === "10d" || icon === "10n") {
      return rain;
    } else if (icon === "11d" || icon === "11n") {
      return stomy;
    } else if (icon === "13d" || icon === "13n") {
      return lightsnowy;
    } else if (icon === "50d" || icon === "50n") {
      return haze;
    } else {
      return;
    }
  };

  return (
    <K.Container>
      <div className="intro_line">
        <img src={fullLine} alt="fullLine" />
      </div>
      <K.ValueWrapper {...animatedItem[0]}>
        <p className="value">{latitude}</p>
        <K.YourWrapper {...animatedItem[1]}>
          <K.WeatherWrapper>
            <img src={icon} alt=" " />
          </K.WeatherWrapper>
          <p className="yourPosition">
            Your
            <br />
            Position
          </p>
          <K.DistanceWrapper {...animatedItem[2]}>
            {currentLatitude ? (
              <p>
                당신과의 거리는 약 <span>{calculate}</span> 입니다.
                {distance ? (
                  <p>거리가 조금 멀지만 연락 기다리겠습니다.</p>
                ) : (
                  <p>제가 이동할 수 있는 충분한 거리군요!</p>
                )}
              </p>
            ) : (
              <></>
            )}
          </K.DistanceWrapper>
        </K.YourWrapper>
        <p className="value">{longitude}</p>
      </K.ValueWrapper>
      <div className="intro_line2">
        <img src={fullLine} alt="fullLine" />
      </div>
    </K.Container>
  );
};

export default GeoMain;
