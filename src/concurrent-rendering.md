# Concurrent Rendering in React

Concurrency is not a feature, per se. It’s a new behind-the-scenes mechanism that enables React to prepare multiple versions of UI at the same time.

It’s a foundational update to React’s core rendering model which came with React __version 18__.

A key property of Concurrent React is that rendering is interruptible. With __synchronous rendering__, once an update starts rendering, nothing can interrupt it until the user can see the result on screen. In a __concurrent render__, React may start rendering an update, pause in the middle, then continue later. It may even abandon an in-progress render altogether. 

React guarantees that the UI will appear consistent even if a render is interrupted. To do this, it waits to perform DOM mutations until the end, once the entire tree has been evaluated. With this capability, React can prepare new screens in the background without blocking the main thread. This means the UI can respond immediately to user input even if it’s in the middle of a large rendering task, creating a fluid user experience.

Concurrent rendering is a powerful new tool in React and most of its new features are built to take advantage of it, including `Suspense`, transitions, and streaming server rendering. 


---

###  Resources

- https://react.dev/blog/2022/03/29/react-v18