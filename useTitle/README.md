# @jshooks/use-title

React Hook to set title

## Installation

### NPM

```bash
npm install @jshooks/use-title
```

### Yarn

```bash
yarn add @jshooks/use-title
```

## Usage

```js
import React from "react";
import useTitle from "@jshooks/use-title";

function App() {
  useTitle("Welcome");
  return (
    <div className="App">
      <h1>Welcome</h1>;
    </div>
  )
}
```