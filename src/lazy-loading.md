# Lazy Loading

## `lazy(load)`

`lazy` lets you defer loading component’s code until it is rendered for the first time.

```js
const SomeComponent = lazy(load)
```

Call lazy outside your components to declare a lazy-loaded React component:

```js
import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
```

### Parameters 

- `load`: A function that returns a Promise or another thenable (a Promise-like object with a then method). React will not call load until the first time you attempt to render the returned 
component.

### Returns

`lazy` returns a React component you can render in your tree. While the code for the lazy component is still loading, attempting to render it will _suspend_.

---

## `load` function 

### Parameters 

`load` receives no parameters.

### Returns 

You need to return a Promise or some other thenable (a Promise-like object with a `then` method). It needs to eventually resolve to an object whose `.default` property is a valid React component type, such as a function, `memo`, or a `forwardRef` component.

> :warning: IMPORTANT
>
> This code relies on dynamic `import()`, which might require support from your bundler or framework. Using this pattern requires that __the lazy component you’re importing__ was exported as the __default export.__


---

### Resources

- https://react.dev/reference/react/lazy