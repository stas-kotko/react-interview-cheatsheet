# React Context

Context lets the parent component make some information available to any component in the tree below it — no matter how deep — without passing it explicitly through props.

Context API gives an access to `Context.Provider` component that wraps a part of component tree which has to be supplied with desired data.

### Before you use context 

Context is very tempting to use! However, this also means it’s too easy to overuse it. __Just because you need to pass some props several levels deep doesn’t mean you should put that information into context.__

Here’s a few alternatives you should consider before using context:

- Start by _passing props_. If your components are not trivial, it’s not unusual to pass a dozen props down through a dozen components. It makes it very clear which components use which data! The person maintaining your code will be glad you’ve made the data flow explicit with props.
- Extract components and _pass JSX as children_ to them. 

If neither of these approaches works well for you, consider context.

### Use cases for context

- _Theming_
- _Current account:_ Many components might need to know the currently logged in user. Putting it in context makes it convenient to read it anywhere in the tree.
- _Routing:_ Most routing solutions use context internally to hold the current route. This is how every link “knows” whether it’s active or not.
- _Managing state_


Context is applied in three steps:

1. __Create__ a context.
1. __Provide__ that context from the component that specifies the data.
1. __Use__ that context from the component that needs the data.


## API Reference

### `createContext`

__`createContext`__ lets you create a context that components can provide or read.

Call `createContext` outside of any components to create a context.

```js
const SomeContext = createContext(defaultValue)
```

_Parameters:_

- `defaultValue`: The value that you want the context to have when there is no matching context provider in the tree above the component that reads context. If you don’t have any meaningful default value, specify `null`. The default value is meant as a “last resort” fallback. It is static and never changes over time.

_Returns:_

- `createContext` returns a __context object__.

The __context object__ itself does not hold any information. It represents which context other components read or provide. Typically, you will use `SomeContext.Provider` in components above to specify the context value, and call `useContext(SomeContext)` in components below to read it. The context object has a few properties:

- `SomeContext.Provider` lets you provide the context value to components.
- `SomeContext.Consumer` is an alternative and rarely used way to read the context value.

```js
<SomeContext.Provider value={theme}>
	<Page />
</SomeContext.Provider>
```

### `useContext`

__`useContext`__ is a React Hook that lets you read and subscribe to context from your component.

```js
// Inside a component
const value = useContext(SomeContext)
```

_Parameters:_

- `SomeContext`: The context that you’ve previously created with createContext. 

_Returns:_

`useContext` returns the context value for the calling component. It is determined as the value passed to the closest `SomeContext.Provider` above the calling component in the tree. If there is no such provider, then the returned value will be the `defaultValue` you have passed to `createContext` for that context. The returned value is always up-to-date. React automatically re-renders components that read some context if it changes.


---

### Resources

- https://react.dev/reference/react/createContext
- https://react.dev/reference/react/useContext