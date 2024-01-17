# Higher-Order Components

A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

Concretely, __a higher-order component is a function that takes a component and returns a new component.__

Note that a HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior. Rather, a HOC _composes_ the original component by _wrapping_ it in a container component. A HOC is a pure function with zero side-effects.

## Caveats

Higher-order components come with a few caveats that aren’t immediately obvious if you’re new to React.

### Don’t Use HOCs Inside the render Method

React’s diffing algorithm (called Reconciliation) uses component identity to determine whether it should update the existing subtree or throw it away and mount a new one. If the component returned from render is identical (===) to the component from the previous render, React recursively updates the subtree by diffing it with the new one. If they’re not equal, the previous subtree is unmounted completely.

### Static Methods Must Be Copied Over

When you apply a HOC to a component, though, the original component is wrapped with a container component. That means the new component does not have any of the static methods of the original component.

To solve this, you could copy the methods onto the container before returning it

However, this requires you to know exactly which methods need to be copied. You can use `hoist-non-react-statics` to automatically copy all non-React static methods

Another possible solution is to export the static method separately from the component itself


### Refs Aren’t Passed Through

While the convention for higher-order components is to pass through all props to the wrapped component, this does not work for refs. That’s because ref is not really a prop — like key, it’s handled specially by React. If you add a ref to an element whose component is the result of a HOC, the ref refers to an instance of the outermost container component, not the wrapped component.

The solution for this problem is to use the React.forwardRef API (introduced with React 16.3).

---

### Resources

1. [Higher-Order Components | Legacy doc](https://legacy.reactjs.org/docs/higher-order-components.html)