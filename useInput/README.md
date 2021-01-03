# @jshooks/use-input

React Hook to input with validator

## Usage

```
import useInput from "@jshooks/use-input";

const App = () => {
  const validator = (value) => value.length <= 20;
  const name = useInput("Mr.", validator);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
```