import logo from "./logo.svg";
import "./App.css";
//import FetchMethod from "./FetchMethod";
//import AxiosMethod from "./AxiosMethod";
//import HttpMethod from "./HttpMethod";
import ReactQuery from "./ReactQuery";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GraphqlMethod from "./GraphqlMethod";
import ApolloClientProvider from "./ApolloClient";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <FetchMethod />
        <AxiosMethod /> */}
        {/* <HttpMethod /> */}
        {/* <QueryClientProvider client={queryClient}>
          <ReactQuery />
        </QueryClientProvider> */}
        <ApolloClientProvider>
          <GraphqlMethod />
        </ApolloClientProvider>
      </header>
    </div>
  );
}

export default App;
//api key=ba937063e188d2d1c8277436b13ea409
