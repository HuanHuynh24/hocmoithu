---
sidebar_position: 11
---
# React Router
Create React App doesn't include page routing.

React Router is the most popular solution.

## Add React Router
To add React Router in your application, run this in the terminal from the root directory of the application:

`npm i -D react-router-dom`

If you are upgrading from v5, you will need to use the @latest flag:

`npm i -D react-router-dom@latest`
##  Folder Structure
To create an application with multiple page routes, let's first start with the file structure.

Within the <span>src</span> folder, we'll create a <span>folder</span> named pages with several files:

<span>src\pages\ </span>:

- Layout.js
- Home.js
- Blogs.js
- Contact.js
- NoPage.js
Each file will contain a very basic React component.

## Basic Usage
Now we will use our Router in our <span>index.js</span> file.

``` js title="Example"
//Use React Router to route to pages based on URL:

index.js:

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
## Example Explained
We wrap our content first with `<span><BrowserRouter></span>`.

Then we define our `<span><Routes></span>`. An application can have multiple `<span><Routes></span>`. Our basic example only uses one.

`<span><Route></span>`s can be nested. The first `<span><Route></span>` has a path of / and renders the Layout component.

The nested `<span><Route></span>`s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.

The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.

Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.

## Pages / Components
The Layout component has `<span><Outlet></span>` and `<span><Link></span>` elements.

The `<span><Outlet></span>` renders the current route selected.

`<span><Link></span>` is used to set the URL and keep track of browsing history.

Anytime we link to an internal path, we will use `<span><Link></span>` instead of `<a href="">`.

The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.

Layout.js:
``` js
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
Home.js:

const Home = () => {
  return <h1>Home</h1>;
};

export default Home;
Blogs.js:

const Blogs = () => {
  return <h1>Blog Articles</h1>;
};

export default Blogs;
Contact.js:

const Contact = () => {
  return <h1>Contact Me</h1>;
};

export default Contact;
NoPage.js:

const NoPage = () => {
  return <h1>404</h1>;
};

export default NoPage;
```