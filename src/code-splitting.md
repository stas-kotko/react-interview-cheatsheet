# Code Splitting

Code-Splitting is a feature which can create multiple small bundles instead of one big, that can be dynamically loaded at runtime. Supported by bundlers like Webpack, Rollup and Browserify.

Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

The best way to introduce code-splitting into your app is through the dynamic `import()` syntax.

Create React App, and  Next.js are using it out of the box.

When using Babel, you’ll need to make sure that Babel can parse the dynamic import syntax but is not transforming it. For that you will need [`@babel/plugin-syntax-dynamic-import`](https://classic.yarnpkg.com/en/package/@babel/plugin-syntax-dynamic-import).

The `React.lazy` function lets you render a dynamic import as a regular component.

```js
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

## Route-based code splitting

Deciding where in your app to introduce code splitting can be a bit tricky. A good place to start is with routes. Here’s an example of how to setup route-based code splitting into your app using libraries like React Router with `React.lazy`:

```js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);
```