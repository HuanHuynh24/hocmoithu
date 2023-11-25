---
sidebar_position: 1
---

# React Getting Started

To use React in production, you need npm which is included with Node.js.

To get an overview of what React is, you can write React code directly in HTML.

But in order to use React in production, you need npm and [Node.js](https://nodejs.org/en) installed.

## React Directly in HTML

The quickest way start learning React is to write React directly in your HTML files.
Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.

You will learn more about JSX in the React JSX chapter.

```js
 title=" Example"
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>

    <div id="mydiv"></div>

    <script type="text/babel">
      function Hello() {
        return <h1>Hello World!</h1>;
      }

      const container = document.getElementById('mydiv');
      const root = ReactDOM.createRoot(container);
      root.render(<Hello />)
    </script>

  </body>
</html>
```

This way of using React can be OK for testing purposes, but for production you will need to set up a React environment.

## Setting up a React Environment

If you have npx and Node.js installed, you can create a React application by using `create-react-app`
If you've previously installed `create-react-app` globally, it is recommended 
that you uninstall the package to ensure npx always uses the latest version of `create-react-app`.
To uninstall, run this command: `npm uninstall -g create-react-app`.

Run this command to create a React application named my-react-app:
```md title="
npx create-react-app my-react-app
```

The `create-react-app` will set up everything you need to run a React application.

## Run the React Application
Now you are ready to run your first real React application!

Run this command to move to the `my-react-app` directory:

``` md title="
cd my-react-app
```
Run this command to run the React application `my-react-app`:
``` cd title="
run start
```
A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar.
## Modify the React Application
So far so good, but how do I change the content?

Look in the `my-react-app` directory, and you will find a `src` folder. Inside the `src` folder there is a file called `App.js`, open it and it will look like this:
```jsx title=" /myReactApp/src/App.js: "
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
---
```
Try changing the HTML content and save the file.

**Example**
``` jsx title="
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
```
