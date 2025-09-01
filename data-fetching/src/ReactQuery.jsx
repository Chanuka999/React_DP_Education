import { useQuery } from "@tanstack/react-query";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=ba937063e188d2d1c8277436b13ea409&units=metric";

const fetchWeatheData = async () => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("something went wrong");
  }
  return response.json();
};

const ReactQuery = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: fetchWeatheData,
  });
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="box">
      <i>react query</i>
      <h2>weather in {data.name}</h2>
      <p>Temprerature: {data.main.temp}</p>
      <p>weather: {data.weather[0].description}</p>
      <p>humidility: {data.main.humidility}</p>
      <p>wind speed: {data.wind.speed}</p>
    </div>
  );
};

export default ReactQuery;
