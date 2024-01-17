# Redux Middleware and Side Effects

By itself, a Redux store doesn't know anything about async logic. Any asynchronicity has to happen outside the store.

Redux reducers must never contain "side effects"

Redux middleware were designed to enable writing logic that has side effects.

A "side effect" is any change to state or behavior that can be seen outside of returning a value from a function:

> Side effect examples:
> 
> - Logging a value to the console
> - Saving a file
> - Setting an async timer
> - Making an HTTP request
> - Modifying some state that exists outside of a function, or mutating arguments to a function
> - Generating random numbers or unique random IDs (such as Math.random() or Date.now())

Redux Middleware intercepts the dispatched action to handle it before passing further to the reducer. It is an extension point between dispatching an action, and the moment it reaches the reducer.

Middleware form a pipeline around the store's `dispatch` method. When we call `store.dispatch(action)`, we're actually calling the first middleware in the pipeline. Typically, a middleware will check to see if the action is a specific type that it cares about, much like a reducer would. If it's the right type, the middleware might run some custom logic. Otherwise, it passes the action to the next middleware in the pipeline.

Redux middleware are written as a series of three nested functions:

```javascript
function exampleMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // Do anything here: pass the action onwards with next(action),
      // or restart the pipeline with storeAPI.dispatch(action)
      // Can also use storeAPI.getState() here

      return next(action)
    }
  }
}

// or the same with arrow funcs

const anotherExampleMiddleware = storeAPI => next => action => {
  // Do something in here, when each action is dispatched

  return next(action)
}
```

- `exampleMiddleware`: The outer function is actually the "middleware" itself. It will be called by `applyMiddleware`, and receives a `storeAPI` object containing the store's `{dispatch, getState}` functions. These are the same `dispatch` and `getState` functions that are actually part of the store. If you call this `dispatch` function, it will send the action to the start of the middleware pipeline. This is only called once.
- `wrapDispatch`: The middle function receives a function called `next` as its argument. This function is actually the _next middleware_ in the pipeline. If this middleware is the last one in the sequence, then `next` is actually the original `store.dispatch` function instead. Calling `next(action)` passes the action to the _next_ middleware in the pipeline. This is also only called once
- `handleAction`: Finally, the inner function receives the current `action` as its argument, and will be called every time an action is dispatched.


![redux store general scheme](https://redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif)

---

## Resources

- https://redux.js.org/tutorials/fundamentals/part-4-store#middleware
- https://redux.js.org/tutorials/fundamentals/part-6-async-logic#redux-middleware-and-side-effects