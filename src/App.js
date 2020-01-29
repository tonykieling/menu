/**
 * source: https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-with-react-hook-ba77c37c7e82
 * https://codesandbox.io/s/react-hook-use-onclickoutside-optimized-1rohw
 */

import React, { useState } from "react";

import Dropdown from "./Dropdown";
import "./styles.css";

export default function App() {
  const [vegetagle, setVegetable] = useState(undefined);
  const [fruit, setFruit] = useState(undefined);
  const [color, setColor] = useState(undefined);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Dropdown
        placeholder="Select Vegetable"
        value={vegetagle}
        onChange={v => setVegetable(v)}
        options={["Tomato", "Cucumber", "Potato"]}
      />
      <Dropdown
        placeholder="Select Fruit"
        value={fruit}
        onChange={v => setFruit(v)}
        options={["Apple", "Banana", "Orange", "Mango"]}
      />
      <Dropdown
        placeholder="Select Color"
        value={color}
        onChange={v => setColor (v)}
        options={["Green", "Blue", "Yellow"]}
      />
    </div>
  );
}
