# Virtual DOM

A virtual DOM is a lightweight JavaScript representation of the DOM. It  is an abstraction over the real DOM intended to handle possible complex calculations without touching real DOM until it is necessary. Reflects changes on real DOM. Created for performance improvement and cross-browser compatability. Used in declarative web frameworks such as React, Vue.js, and Elm. Updating the virtual DOM is comparatively faster than updating the actual DOM. Thus, the framework is free to make necessary changes to the virtual DOM relatively cheaply. The framework then finds the differences between the previous virtual DOM and the current one, and only makes the necessary changes to the actual DOM. It's called [Reconciliation](./reconciliation.md)

DOM - in-memory representation of HTML in form of objects, has a tree structure, and manipulated with DOM API

Shadow DOM (browser's technology) allows to create web (custom) components (i.e. HTML video element with all buttons, sliders, volume etc. From dev tools it looks like a single element). It creates isolated DOM tree with its own scope inside host element. All elements inside the scope won't be affected by the outer CSS styles and scripts (?).

## What is the difference between Virtual DOM and Shadow DOM?

- Virtual DOM: Representation of the UI is kept in memory as nodes and synced to the real DOM for performance.
- Shadow DOM: Mechanism to encapsulate a custom web component to be used in the DOM under a "shadow root".