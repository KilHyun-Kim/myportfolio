import React from "react";
import "./App.css";

function App() {
  const [currentLatLong, setCurrentLatLong] = useState(0);

  /* navigator.geolocation.getCurrentPosition 수락했을경우 */
  const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude: latitude,
      longitude: longitude,
    };
    setCurrentLatLong(coordsObj);
    saveCoords(coordsObj);
  };
  /* navigator.geolocation.getCurrentPosition 거부 했을 경우 */
  const handleGeoError = () => {
    console.log("Can't access geo location.");
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
  return <></>;
}

export default App;
