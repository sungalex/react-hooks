# @jshooks/use-input

React Hook to input with validator

## Usage

```
import React from "react";
import ReactDOM from "react-dom";
import { useInput } from "@react-hooks/use-input";

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```