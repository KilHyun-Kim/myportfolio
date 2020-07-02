import React from "react";

const API_KEY = "01478b1046e705bec4b4eeda91b15f7b";

const Weather = () => {
  const [temPla, setTemPla] = useState(0);
  const [icon, setIcon] = useState(0);

  const getWeather = (lat, lng) => {
    if (currentLatitude === undefined && currentLontitude === undefined) {
      return;
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          const temperature = json.main.temp;
          const place = json.name;
          const weather = json.weather[0].main;
          const icon = json.weather[0].icon;
          // console.log(weather);
          const temPlaObj = {
            temperature,
            place,
            weather,
            icon,
          };
          return setTemPla(temPlaObj);
        });
    }
  };
  const makeIcon = (icon) => {
    if (icon === "04d" || icon === "04n") {
      return cloudy;
    } else if (icon === "9d" || icon === "9n") {
      return showerRain;
    } else if (icon === "10d" || icon === "10n") {
      return Rain;
    }
  };
  useEffect(() => {
    getWeather(currentLatitude, currentLontitude);
  }, [currentLatitude, currentLontitude]);

  useEffect(() => {
    const iconValue = makeIcon(temPla.icon);
    setIcon(iconValue);
  }, [getWeather]);
  return <div></div>;
};

export default Weather;
