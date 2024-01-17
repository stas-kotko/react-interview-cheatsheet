# React Hooks

> Question:
>
> What are React hooks and how do they work? Why are they needed? Are there any limitations/gotchas? Explain custom hooks with examples

React Hooks are top level functions that let you “hook into” React state and lifecycle features from function components.
  
Hooks don’t work inside classes.

## Requirements:

- can only be called inside React __function components__
- can only call it at the __top level__ of your component or your own Hooks
- can __NOT__ call it inside __loops__, __conditions__, or __nested functions__

## Hooks can be divided into several groups:

### State Hooks

State Hook lets a component “remember” information.
- `useState` declares a state variable that you can update directly.
- `useReducer` declares a state variable with the update logic inside a reducer function.


### Effect Hook

Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.

- `useEffect` connects a component to an external system. Also, it 'hooks' into component's lifecycle (can execute code on "mount", "update", and "unmount")


### Context Hook

- `useContext` let a component receive information from distant parents without passing it as props.


### Ref Hooks 

Ref Hooks let a component hold some information that isn’t used for rendering (like a DOM node or a timeout ID). Unlike with state, updating a ref _does not re-render your component_. They are useful when you need to work with non-React systems, such as the built-in browser APIs.

- `useRef` declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.
- `useImperativeHandle` lets you customize the ref exposed by your component.


### Performance Hooks

Performance Hooks are a common way to optimize re-rendering performance and skip unnecessary work. For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render.

To __skip calculations__ and unnecessary re-rendering, use:

- `useMemo` lets you cache the result of an expensive calculation.
- `useCallback` lets you cache a function definition before passing it down to an optimized component.
  
To __prioritize rendering__, use:

- `useTransition` lets you mark a state transition as non-blocking and allow other updates to interrupt it.
- `useDeferredValue` lets you defer updating a non-critical part of the UI and let other parts update first.


## Your own Hooks 

You can also define your own custom Hooks as JavaScript functions.
Hook names must start with `use` followed by a capital letter. 
Hooks may return arbitrary values.

The code inside your custom Hooks will re-run during every re-render of your component. This is why, like components, custom Hooks need to be pure. Think of custom Hooks’ code as part of your component’s body!

---

### Resources

1. https://react.dev/reference/react/hooks
1. https://legacy.reactjs.org/docs/hooks-rules.html
1. https://react.dev/learn/reusing-logic-with-custom-hooks
