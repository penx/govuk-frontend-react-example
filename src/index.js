import React from "react";
import ReactDOM from "react-dom";
import { Header, Button } from "govuk-frontend-react";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello CodeSandbox</h1>
      <Button>Start editing to see some magic happen!</Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
