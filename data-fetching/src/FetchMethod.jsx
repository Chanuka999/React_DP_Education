import { useEffect, useState } from "react";

const FetchMethod = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=ba937063e188d2d1c8277436b13ea409&units=metric";

    const fetchWeatheData = async () => {
      try {
        const responce = await fetch(url);

        if (responce.ok) {
          const data = await responce.json();
          console.log(data.name);
          setLoding(false);
          setWeatherData(data);
        } else {
          setError("something went wrong");
        }
      } catch (error) {
        setError("something went role");
      }
    };
    fetchWeatheData();
  }, []);

  if (loading) return <p>Loading....</p>;
  return (
    <div className="box">
      <h3>Fetch method</h3>
      <h2>weather in {weatherData.name}</h2>
      <p>Temprerature: {weatherData.main.temp}</p>
      <p>weather: {weatherData.weather[0].description}</p>
      <p>humidility: {weatherData.main.humidility}</p>
      <p>wind speed: {weatherData.wind.speed}</p>
    </div>
  );
};

export default FetchMethod;
