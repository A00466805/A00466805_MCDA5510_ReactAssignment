import pune from "./Pune.png";
import cold from "./assets/cold.png";
import mild from "./assets/mild.png";
import sunny from "./assets/sunny.png";
import { useEffect, useState } from "react";

const MyTown = (props) => {
  //   let tmp = 0;/z
  const [tmp, setTemp] = useState(0);
  const [tmpInCelsius, setTempInCelsius] = useState(0);
  const [buttonName, setButtonName] = useState("Convert to F");
  const [celcius, setCelsius] = useState(true);
  const convertToF = (e) => {
    setButtonName("Convert to C");
    let temp = tmp * (9 / 5) + 32;
    setTemp(temp);
    setCelsius(false);
  };
  const convertToC = (e) => {
    setButtonName("Convert to F");
    let temp = (tmp - 32) * (5 / 9);
    setTemp(temp);
    setCelsius(true);
  };
  async function fetchTemperature() {
    let temp = await getWeather();
    temp = temp.temperature - 273.15;
    //console.log(temp);
    setTemp(temp);
    setTempInCelsius(temp);
  }
  useEffect(() => {
    fetchTemperature();
  }, []);
  return (
    <div>
      <img src={pune} className="App-logo"></img>
      <h2>{props.name}'s place</h2>
      <h2>I'm from Pune, Maharashra, India</h2>
      <p>
        Pune , also known as Poona , is one of the most important industrial and
        educational hubs of India, with an estimated population of 7.4 million
        as of 2020.Pune is considered to be the cultural and educational capital
        of Maharashtra state. It has been ranked "the most liveable city in
        India" several times
      </p>
      {tmpInCelsius < 10 ? (
        <img src={cold}></img>
      ) : tmpInCelsius > 10 && tmpInCelsius < 20 ? (
        <img src={mild}></img>
      ) : (
        <img src={sunny}></img>
      )}
      {celcius === true ? (
        <div>
          <h2>{Math.trunc(tmp)} &#8451;</h2>
          <button className="App-link" onClick={(e) => convertToF()}>
            {buttonName}
          </button>
        </div>
      ) : (
        <div>
          <h2>{Math.trunc(tmp)} &#8457;</h2>
          <button className="App-link" onClick={(e) => convertToC()}>
            {buttonName}
          </button>
        </div>
      )}
    </div>
  );

  async function getWeather() {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=18.5204&lon=73.8567&appid=51031104c083849ac96df17e30cdb8e2"
      )
        .then((response) => response.json())
        .then((data) => {
          return data["main"]["temp"];
        });
      return {
        temperature: response,
      };
    } catch (error) {
      return [];
    }
  }
};
export default MyTown;
