import pune from "./Pune.png";
import cold from "./assets/cold.png";
import mild from "./assets/mild.png";
import sunny from "./assets/sunny.png";
import { useEffect, useState } from "react";

const MyTown = (props) => {
  //   let tmp = 0;/z
  const [tmp, setTemp] = useState(0);
  async function fetchTemperature() {
    let temp = await getWeather();
    temp = temp.temperature - 273.15;
    //console.log(temp);
    setTemp(temp);
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
      {console.log(tmp)}
      {tmp < 10 ? (
        <img src={cold}></img>
      ) : tmp > 10 && tmp < 20 ? (
        <img src={mild}></img>
      ) : (
        <img src={sunny}></img>
      )}
      }
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
