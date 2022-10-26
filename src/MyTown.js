import pune from "./Pune.png";

const MyTown = (props) => {
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
      {getHighMsg()}
    </div>
  );
  async function getWeather() {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
      );
      return await response.json();
    } catch (error) {
      return [];
    }
  }
};
export default MyTown;
