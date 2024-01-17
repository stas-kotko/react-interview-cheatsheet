# Reconciliation

_React Reconciliation_ is the algorithm React uses to diff one tree with another to determine which parts need to be changed.

_React reconciliation_ is the process through which React updates the user interface to reflect changes in the underlying data or state. When the state or props of a React component change, React needs to figure out what changes occurred and how to efficiently update the DOM to reflect those changes. Reconciliation is the algorithmic process that achieves this efficiently.

Simplified process: 

- React maintains a virtual representation of the DOM called the Virtual DOM ("current tree")
- When state or props of a component change, React creates a new virtual DOM representation of the entire component tree ("work in progress tree")
- Then React performs a "diffing" or "reconciliation" process to identify the differences between the old virtual DOM and the new virtual DOM. React aims to update the actual DOM in the most efficient way possible. Instead of updating the entire DOM, React calculates the minimal set of changes needed to transition from the old state to the new state.
- React applies that changes to the real DOM
- Finally, the WIP tree becomes the current tree

During the reconciliation process, React components go through their [lifecycle hooks](./component-lifecycle.md) to allow developers to execute custom logic at specific points in the update process.

By efficiently identifying and applying only the necessary changes, React minimizes the performance impact of updating the UI in response to changes in the application state.
