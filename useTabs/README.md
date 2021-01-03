# @jshooks/use-tabs

React Hook to manage tabs

## Installation

```bash
npm install @jshooks/use-tabs
```

## Usage

```js
import useTabs from "@jshooks/use-tabs";

const tabs = [
  {
    tab: "Section 1",
    content: "Content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "Content of the Section 2",
  },
];

const App = () => {
  const { currentItem, changeItem } = useTabs(0, tabs);
  return (
    <div className="App">
      {tabs.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.tabs}</div>
    </div>
  );
};
```