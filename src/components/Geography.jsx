import React from "react";

const Geography = () => {
  // STATIC한 값에대한 Lat,Lng
  const [latLong, setLatLong] = useState(0);
  const [latLongNew, setLatLongNew] = useState({});
  // STATIC한 값에대한 Lat, Lng => Counter 함수 변화값 보여주는곳
  const [myLatitude, setMyLatitude] = useState(0);
  const [myLongitude, setMyLongitude] = useState(0);

  // 새로받은 위치값에대한 값 => Counter 함수 변화값 보여주는곳
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  /* number 변화 함수 */
  function numberCounter(target_number, setValue) {
    var count = 0;
    var diff = 0;
    // var target_count = parseInt(target_number);
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
      }, 20);
    } else {
      clearTimeout(timer);
    }
  }
  function ceiling(lat, lng) {
    const roundLat = Math.round(lat * 10000);
    const roundLng = Math.round(lng * 10000);
    const position = {
      roundLat,
      roundLng,
    };
    return position;
  }
  // useEffect로 렌더링 채워주기!
  useEffect(() => {
    const staticValue = ceiling(STATIC_LAT, STATIC_LNG);
    setLatLong(staticValue);
    numberCounter(latLong.roundLat, setMyLatitude);
    numberCounter(latLong.roundLng, setMyLongitude);
    //   // const value = ceiling(currentLatLong.latitude, currentLatLong.longitude);
    //   // setLatLongNew(value);
    //   // // console.log(latLongNew);
  }, [latLong.roundLat, latLong.roundLng]);
  useEffect(() => {
    const yourValue = ceiling(currentLatitude, currentLontitude);
    setLatLongNew(yourValue);
    numberCounter(latLongNew.roundLat, setLatitude);
    numberCounter(latLongNew.roundLng, setLongitude);
  }, [latLongNew.roundLat, latLongNew.roundLng]);
  return <div></div>;
};

export default Geography;
