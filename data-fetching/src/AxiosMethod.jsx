import { useEffect, useState } from "react";
import axios from "axios";

const AxiosMethod = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=ba937063e188d2d1c8277436b13ea409&units=metric";

    const fetchWeatherData = async () => {
      try {
        const responce = await axios.get(url);
        setWeatherData(responce.data);
        console.log(responce.data);
      } catch (error) {
        // console.log(error);

        setError(error.response ? error.response.data.message : error.message);
      } finally {
        setLoding(false);
      }
    };
    fetchWeatherData();
  }, []);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="box">
      <i>AxiosMethod</i>
      <h2>weather in {weatherData.name}</h2>
      <p>Temprerature: {weatherData.main.temp}</p>
      <p>weather: {weatherData.weather[0].description}</p>
      <p>humidility: {weatherData.main.humidility}</p>
      <p>wind speed: {weatherData.wind.speed}</p>
    </div>
  );
};

export default AxiosMethod;
