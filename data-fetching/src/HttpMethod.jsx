import { useEffect, useState } from "react";

const HttpMethod = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=ba937063e188d2d1c8277436b13ea409&units=metric";

    const fetchWeatheData = () => {
      const xhr = new XMLHttpRequest();

      xhr.open("GET", url);

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          const data = JSON.parse(xhr.responseText);
          setWeatherData(data);
        } else {
          setError("something went wrong");
        }
        setLoding(false);
      };

      xhr.onerror = function () {
        setError("Network error");
      };
      xhr.send();
    };

    fetchWeatheData();
  }, []);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error : {error}</p>;
  return (
    <div className="box">
      <i>Http Method</i>
      <h2>weather in {weatherData.name}</h2>
      <p>Temprerature: {weatherData.main.temp}</p>
      <p>weather: {weatherData.weather[0].description}</p>
      <p>humidility: {weatherData.main.humidity}</p>
      <p>wind speed: {weatherData.wind.speed}</p>
    </div>
  );
};

export default HttpMethod;
