 # Topics we studied today?
    1-How to make Custom hooks, Why is it important to make custom hooks rather than functions.
        Custom hooks in React are a way to reuse stateful logic across components. They are regular JavaScript functions, but they have a special naming convention: they start with the word "use". Custom hooks allow you to extract and share logic between components, making your code more modular, readable, and easier to maintain.

            Here's an example of how to create a custom hook:

            jsx
            Copy code
            // useCounter.js
            import { useState } from 'react';

            function useCounter(initialValue = 0) {
            const [count, setCount] = useState(initialValue);

            const increment = () => {
                setCount(count + 1);
            };

            const decrement = () => {
                setCount(count - 1);
            };

            return {
                count,
                increment,
                decrement,
            };
            }

            export default useCounter;
            Now, you can use this custom hook in your components:

            jsx
            Copy code
            // ExampleComponent.js
            import React from 'react';
            import useCounter from './useCounter';

            function ExampleComponent() {
            const { count, increment, decrement } = useCounter(0);

            return (
                <div>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                </div>
            );
            }

            export default ExampleComponent;
            Why Use Custom Hooks?
            Reusability: Custom hooks allow you to encapsulate and reuse complex logic across different components. This promotes a DRY (Don't Repeat Yourself) codebase.

            Separation of Concerns: Custom hooks help in separating the concerns of state management and logic from the visual representation. This can lead to cleaner and more maintainable components.

            Abstraction of Logic: Custom hooks allow you to abstract away complex logic into a single function, making the component code cleaner and more focused on its specific responsibilities.

            Testing: Custom hooks can be unit-tested independently of components, improving the overall testability of your code.

            Community and Code Sharing: With the growing React ecosystem, many developers create and share custom hooks through npm packages or online repositories. This allows developers to benefit from each other's work and build on top of existing solutions.

            By using custom hooks, you can create a library of reusable and shareable logic that can significantly improve the efficiency of your React developmen
    2-How to do lazy loading, why is it done 
        lazy(), suspense