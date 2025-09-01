import { useQuery, gql } from "@apollo/client";

const GET_CONTRIES = gql`
  query Getcountries {
    countries {
      code
      name
      emoji
    }
  }
`;

const GraphqlMethod = () => {
  const { loading, error, data } = useQuery(GET_CONTRIES);
  console.log(data);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="box">
      <i>Graphql method</i>
      <h2>Countries</h2>
      <ul>
        {data.countries.map((country) => (
          <li key={country.code}>
            {country.name} - {country.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GraphqlMethod;
