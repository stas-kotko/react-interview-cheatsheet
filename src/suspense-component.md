# \<Suspense>

`<Suspense>` is a component that lets you display a fallback until its children have finished loading.

```js
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

Typically, used with [`React.lazy`](./lazy-loading.md) for improving initial load time of the app by only loading the needed components (a.k.a. [code splitting](./code-splitting.md)).

### Props 

- `children`: The actual UI you intend to render. If `children` suspends while rendering, the Suspense boundary will switch to rendering `fallback`.
- `fallback`: An alternate UI to render in place of the actual UI if it has not finished loading.

### Caveats 
- React does not preserve any state for renders that got suspended before they were able to mount for the first time. When the component has loaded, React will retry rendering the suspended tree from scratch.
- If Suspense was displaying content for the tree, but then it suspended again, the fallback will be shown again unless the update causing it was caused by startTransition or useDeferredValue.
- If React needs to hide the already visible content because it suspended again, it will clean up layout Effects in the content tree. When the content is ready to be shown again, React will fire the layout Effects again. This ensures that Effects measuring the DOM layout don’t try to do this while the content is hidden.
- React includes under-the-hood optimizations like Streaming Server Rendering and Selective Hydration that are integrated with Suspense. Read an architectural overview and watch a technical talk to learn more.

> Note
>
> Only Suspense-enabled data sources will activate the Suspense component. They include:
> - Data fetching with Suspense-enabled frameworks like __Relay__ and __Next.js__
> - Lazy-loading component code with `lazy`
> - Reading the value of a Promise with `use`

By default, the whole tree inside Suspense is treated as a single unit. For example, even if only one of these components suspends waiting for some data, all of them together will be replaced by the loading indicator.


--- 

### Resources
- https://react.dev/reference/react/Suspense