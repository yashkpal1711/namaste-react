# JSX -> React.createElement -> object -> DOM.
# babel is used for converting ES6+ code into older code, so that is could run on every browser.
# Is JSX mandatory for React?
    No, its not mandetory but it makes the code more readable, clean , short.
    Some benefits of using JSX are:
        - Readability
        - Component Based: Each JSX element can represent a component, which makes it easy to manage and reuse UI elements.
        -JavaScript Integration: JSX allows you to embed JavaScript expressions within curly braces {} directly in the markup.
        -Consistency
# What is Virtual DOM?
    - The Virtual DOM is an abstract representation of the Real DOM, maintained by React. It's essentially a lightweight copy of the Real DOM.
    - When you build a React component and render it for the first time, React creates a Virtual DOM that mirrors the structure of the UI you intend to display.
    -  This Virtual DOM is a JavaScript object with properties corresponding to the elements in your UI.
    Diffing and Reconciliation:
        -React then performs a process called "reconciliation" or "diffing" by comparing the new Virtual DOM with the previous one.
        -It identifies the differences (or "diffs") between the old and new Virtual DOM.
    Efficient Updates:
        -React determines the most efficient way to update the Real DOM based on the identified differences.
        -It calculates a minimal set of changes needed to update the Real DOM to match the new Virtual DOM.

# What is Reconciliation in React?
    Reconciliation is a crucial process in React that ensures the Virtual DOM (VDOM) stays synchronized with the actual DOM (Real DOM) and efficiently updates the user interface. It's the process of determining the differences between the current Virtual DOM and the new Virtual DOM created as a result of a state or props change

# What is React Fiber?
    React Fiber, often referred to simply as "Fiber," is a complete rewrite of React's core algorithm for rendering user interfaces. It was introduced in React version 16 to address several key issues and to enable more efficient rendering and better support for asynchronous operations. React Fiber represents a fundamental change in how React manages the update process and handles component rendering.
       - Improved Rendering Performance
       - Support for Asynchronous Rendering

# Can we use index as keys in React?(Also remember to use NanoId for generating unique keys on the fly)
    In React, it is generally not recommended to use the index of an element in an array as the "key" prop. While it is possible to use index as keys, it can lead to issues in certain situations and is considered an anti-pattern. It's important to understand why this is the case and when it might be acceptable to use index as keys.

    The purpose of the "key" prop in React is to help React identify individual elements in a list and optimize the rendering process. When you use index as keys, React may have difficulty distinguishing between elements, especially when the list is dynamic and items are added, removed, or re-ordered. This can lead to unexpected behavior and issues such as:

    Lost State: When elements are re-ordered or removed, React may not correctly update the component state associated with each element. This can result in state inconsistencies and cause errors in your application.

    Performance Degradation: Using index as keys can negatively impact the performance of your application, especially when dealing with long lists. React relies on keys to efficiently update the DOM, and using index can lead to unnecessary re-renders and increased rendering times.

    Accessibility: If your application involves accessibility features, using index as keys can hinder screen readers' ability to navigate and interpret the content correctly.

#
