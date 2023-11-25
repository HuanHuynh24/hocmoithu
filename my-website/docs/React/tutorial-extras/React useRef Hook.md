---
sidebar_position: 4
---
# React useRef Hook
The <span>useRef</span> Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.

## Does Not Cause Re-renders
If we tried to count how many times our application renders using the <span>useState</span> Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

To avoid this, we can use the <span>useRef</span> Hook.

``` js title="Example"
//Use useRef to track application renders.

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
<span>useRef()</span> only returns one item. It returns an Object called <span>current</span>.

When we initialize <span>useRef</span> we set the initial value: <span>useRef(0)</span>.

Run this on your computer and try typing in the input to see the application render count increase.

## Accessing DOM Elements
In general, we want to let React handle all DOM manipulation.

But there are some instances where <span>useRef</span> can be used without causing issues.

In React, we can add a ref attribute to an element to access it directly in the DOM.

``` js title="Example:"
//Use useRef to focus the input:

import { useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
## Tracking State Changes
The <span>useRef</span> Hook can also be used to keep track of previous state values.

This is because we are able to persist <span>useRef</span> values between renders.

``` js title="Example:"
//Use useRef to keep track of previous state values:

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </span0>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
This time we use a combination of _useState, useEffect, and useRef_ to keep track of the previous state.

In the _useEffect_, we are updating the _useRef_ current value each time the _inputValue_ is updated by entering text into the input field.