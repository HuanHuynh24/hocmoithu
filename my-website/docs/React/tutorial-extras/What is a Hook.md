---
sidebar_position: 1
---

# What is a Hook ?

Hooks were added to React in version 16.8.

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

Hooks allow us to "hook" into React features such as state and lifecycle methods.

``` js title="Example"
//Here is an example of a Hook. Don't worry if it doesn't make sense. We will go into more detail in the next section.

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
```
You must <span>import</span> Hooks from <span>react</span>.

Here we are using the <span>useState</span> Hook to keep track of the application state.

State generally refers to application data or properties that need to be tracked.

## Hook Rules
There are 3 rules for hooks:

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional
## Custom Hooks
If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.

We'll go into more detail in the _Custom Hooks section_.