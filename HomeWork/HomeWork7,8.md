# What is a Microservice?

    A microservice is a software architectural style that structures an application as a collection of small, loosely coupled services.
    - Small and Focused:
    - Loosely Coupled: Each microservice operates independently and is loosely coupled with other services. Changes in one
      service do not impact others as long as the service's external interface remains consistent.
    - Independent Deployment: Microservices can be developed, deployed, and scaled independently. This means that you can update or replace one service without affecting the entire application.
    - Technology Agnostic: Microservices can use different programming languages, frameworks, and data storage technologies

# What is Monolith architecture?

    Monolithic architecture is a traditional software architectural style where all components of an application are combined into a single codebase and executed as a single program. In a monolithic application, all the functions, modules, and services are tightly integrated into one large and interconnected application.
    - Single Codebase
    - Tight Coupling: In monoliths, the various parts of the application are tightly interconnected. Changes to one part of the code can have cascading effects on other parts of the application.
    - Efficiency: Monolithic applications can be efficient for small to medium-sized projects with low to moderate complexity. They can have a smaller memory and resource footprint.
    - Easier to Secure: Security measures can be centralized, and it's relatively easier to manage security in a monolithic application because all components are within a single codebase.
    - Lower Development and Maintenance Overhead: For small to medium-sized projects, monolithic architecture may have lower initial development and maintenance costs compared to more complex architectures.

# Why do we need a useEffect Hook?

    he useEffect hook is a fundamental part of managing side effects in React functional components. It's used for a variety of purposes to handle side effects in a React application. Here are some of the main reasons why we need the useEffect hook:

    -Fetching Data: When you need to fetch data from an API, database, or any external source, you typically do it asynchronously. The useEffect hook allows you to make these asynchronous data fetches and update the component when the data is ready.

    -Updating the DOM: You can use useEffect to perform actions after the component has rendered, which is important for working with the Document Object Model (DOM). For example, you can use it to change the title of the page or add event listeners.

    -Managing Subscriptions: When working with web sockets, or any other form of real-time data source, you can subscribe to events and clean up those subscriptions when the component unmounts.

# What is Optional Chaining?

    Optional chaining, introduced in ECMAScript 2020, is a JavaScript feature denoted by `?.`. It enables safe property and method access on objects. If an object or any intermediate properties are undefined or null, it returns `undefined` instead of raising errors, enhancing code robustness, especially for complex object structures and APIs.

# What is Shimmer UI?

    Shimmer UI is a visual placeholder effect used in user interfaces, typically seen when loading content. It simulates a subtle, animated shimmering or sparkling effect, often applied to empty or loading components like image placeholders, text, or cards. It gives users feedback that content is loading without displaying blank spaces.

# What is the difference between JS expression and JS statement?

    In JavaScript, an expression is a piece of code that produces a value. It can be a single value, variable, function call, or a combination of these elements that returns a result. For example, 2 + 2 is an expression that evaluates to 4.

    A statement, on the other hand, is a larger piece of code that performs an action or task but does not produce a value. Statements include loops, conditionals, function declarations, and variable assignments. They are executed for their side effects, like changing the program's state.

# What is Conditional Rendering, explain with a code example.

    Conditional rendering in React is the process of displaying different content or components based on certain conditions or criteria. It allows you to control what gets rendered in your application based on the values of variables or the result of expressions. You can use conditional statements like if, ternary operators, or logical operators for this purpose.
    ```
        import React, { useState } from 'react';

        function App() {
        const [isLoggedIn, setIsLoggedIn] = useState(false);

        return (
        <div>
            <h1>Conditional Rendering Example</h1>
                {isLoggedIn ? (
                <p>Welcome, User!</p>
            ) : (
            <button onClick={() => setIsLoggedIn(true)}>Log In</button>
            )}
        </div>
        );
        }

        export default App;
    ```

# What is CORS?

    Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers to control web page requests that originate from different domains or origins. It is a security mechanism to prevent unauthorized access to or sharing of resources (like data and APIs) between web pages from different domains. In essence, CORS allows or restricts web applications running at one origin (domain) to make requests for resources from a different origin.

# What is the use of `const json = await data.json();`

    The line of code const json = await data.json(); is used to convert a response from a network request, typically in the form of raw data, into a JavaScript object (JSON object).
