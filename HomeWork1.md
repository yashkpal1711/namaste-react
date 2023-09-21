# 1- Difference between a Library and Framework?
Ans 1: Libraries and frameworks are both tools that developers use to build software, but they serve different purposes and have distinct characteristics:

    Purpose:

    Library: A library is a collection of pre-written code that provides reusable functions, classes, and procedures. It simplifies common tasks by providing ready-made solutions for specific functionalities, such as file handling, data manipulation, or user interface components.
    Framework: A framework is a more comprehensive, pre-structured environment that dictates the architecture and overall flow of an application. It provides a set of rules, guidelines, and design patterns for building an application. Developers build their code within the framework's structure.
    Control:

    Library: When you use a library, you retain control over the flow of your application. You can choose which parts of the library to use and how to integrate them into your code.
    Framework: A framework often dictates the control flow of your application. It provides a scaffold, and your code fills in the blanks. You work within the framework's structure and follow its conventions.
    Inversion of Control (IoC):

    Library: Libraries follow the principle of "you call us." In other words, you use a library when you need a specific functionality, and you invoke its methods or functions when necessary.
    Framework: Frameworks often follow the principle of "we call you." The framework controls the flow of the application and calls your code at specific points or in response to events. This is known as Inversion of Control (IoC).

# 2- What is CDN? Why do we use it?
Ans 2: CDN stands for Content Delivery Network. It is a network of distributed servers strategically placed at various data centers around the world. The primary purpose of a CDN is to deliver web content, such as web pages, images, videos, stylesheets, and JavaScript files, to users more efficiently and quickly
    Why Do We Use CDNs?

    Improved Website Performance: CDNs significantly reduce load times and latency, resulting in faster website and application performance. This improved speed enhances the user experience and can lead to higher user engagement and conversion rates.

    Global Reach: CDNs help websites and applications serve users around the world more effectively by delivering content from servers located closer to the end-users. This global reach is crucial for international businesses and online services.

    Reliability: CDNs enhance the reliability and availability of web content. With multiple server locations and load balancing, CDNs ensure that content remains accessible even during traffic spikes or server failures.

    Scalability: CDNs provide scalability options to accommodate traffic growth, making them suitable for websites and applications of all sizes.

# 3- Why is React known as React?
Ans 3: React, the JavaScript library for building user interfaces, is known as "React" because its core philosophy revolves around the idea of "reacting" to changes in data and efficiently updating the user interface (UI) accordingly.

# 4- What is diference between React and ReactDOM
Ans 4: React and ReactDOM are two related but distinct libraries in the React ecosystem:

    React:

    Purpose: React is a JavaScript library for building user interfaces. It provides the core functionality for creating components, managing component state, and rendering UI elements efficiently.
    Usage: You use React to define and create UI components, handle component lifecycle, manage state, and handle user interactions.
    Example Usage:
    ```jsx
        import React from 'react';

        function MyComponent() {
        return <div>Hello, React!</div>;
        } 
    ```

    ReactDOM:

    Purpose: ReactDOM is a package that serves as the glue between React and the DOM (Document Object Model). It is used for rendering React components into the actual DOM elements of a web page.
    Usage: You use ReactDOM when you want to take a React component and render it onto the web page. It provides methods for rendering components into a specific DOM container, updating the DOM when component data changes, and handling events.
    Example Usage:
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';

    function MyComponent() {
    return <div>Hello, React!</div>;
    } 

    ReactDOM.render(<MyComponent />, document.getElementById('root'));
    ```
