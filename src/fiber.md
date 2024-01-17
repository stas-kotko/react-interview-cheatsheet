# React Fiber

## What is React Fiber?

__React Fiber__ is a set of internal algorithms and data structures that enables the implementation of a new [reconciliation](./reconciliation.md) algorithm.

React Fiber implements a "fiber-based reconciliation" algorithm which introduces the concept of __"fibers"__ - lightweight units of work representing individual components or elements in the component tree that can be paused, aborted, or resumed.

The __goal__ of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its __headline feature__ is _incremental rendering_: the ability to split rendering work into chunks and spread it out over multiple frames.

It is similar to a virtual DOM node, but it also contains additional information about the work's state, priority, and other metadata. Each fiber is associated with a component instance and represents a part of the component tree.

This allows React to prioritize and interrupt work, making it more adaptable and enabling features like asynchronous rendering and better support for concurrent updates.

> Details:  
> It was introduced with React version 16 and provides a more flexible, incremental rendering approach compared to the previous stack-based approach. The primary motivation behind React Fiber is to enable more efficient handling of asynchronous events, such as user interactions and data fetching.

## How does React Fiber work?

At a high level, React Fiber works by breaking down the work of rendering components into small units called "fibers". These fibers represent individual components or subtrees of components and contain information about the current state of the component, the work that needs to be done, and pointers to other fibers in the component tree.

## The Fiber Lifecycle

React Fiber introduces a new lifecycle for processing updates and rendering components. This lifecycle consists of three main phases:

1. __Render Phase:__   
  In this phase, React computes the new component tree based on the updates (e.g., new state or props). This phase is also known as the "reconciliation phase." During this phase, React can pause and resume the work as needed, allowing it to yield control back to the browser and maintain responsiveness.
1. __Commit Phase:__  
  Once the render phase is complete, React moves to the commit phase, where it applies the changes calculated during the render phase to the DOM. This phase is also known as the "flush phase." Unlike the render phase, the commit phase cannot be interrupted, as it involves making actual changes to the DOM.
1. __Cleanup Phase:__  
  After the commit phase, React performs any necessary cleanup, such as unmounting components that are no longer needed, and running side effects like `componentDidUpdate` or `componentWillUnmount`.

---

React Fiber - JS object, a unit of work. React processes it and when it's finished, the result is commited to the DOM
an async JS object which:
- split tasks into chunks an prioritize them
- pause work and come back to it later
- reuse work or abort it if it's not needed 


SOURCES:
- [Exploring React’s Fiber Architecture: A Comprehensive Guide](https://codedamn.com/news/reactjs/react-fiber-architecture)
- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)