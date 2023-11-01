#  What would happen if we do console.log(useState())?
    If you use console.log(useState()) directly within a functional component in a React application, it will log an array with two elements:

    The first element will be the current state value.
    The second element will be a function that allows you to update that state.
        ```
            import React, { useState } from 'react';

            const MyComponent = () => {
            console.log(useState());

            return (
                // Your component JSX
            );
            };

            export default MyComponent;

            ---OUTPUT
            [initialState, function]


        ```

#  How will useEffect behave if we don't add a dependency array ?
    When you use the useEffect hook in React and you omit the dependency array, it means that the effect will run after every render. This happens because React will consider the effect as having an empty dependency array, signifying that it doesn't depend on any values from the component scope. Therefore, it will run on every render, causing the effect to execute after every update of the component.

# What is SPA?
    Single Page Application.

# What is difference between Client Side Routing and Server Side Routing?
    Client-side routing and server-side routing are two different approaches to handling routing in web applications, differing in where and how the routing logic is processed and executed.

        ### Client-Side Routing:

        **Definition:** In client-side routing, the routing logic and navigation happen within the user's web browser.

        **How it works:**
        - The entire web application, including its components, templates, and navigation, is loaded initially when the user visits the site.
        - Subsequent navigation or route changes are managed within the browser itself using JavaScript.
        - The URL changes are detected, and the relevant components or views are rendered without making a request to the server.

        **Key Points:**
        - Faster: Since most of the resources are loaded on the initial visit, subsequent navigation is generally quicker as only data and components specific to the new route are fetched.
        - Smooth Transitions: Transitions between routes often appear smooth because only the necessary parts of the page get updated, leading to a more responsive user experience.
        - Examples: React Router and Vue Router are examples of client-side routing libraries used in respective frameworks.

        ### Server-Side Routing:

        **Definition:** In server-side routing, the routing and navigation logic is handled by the server.

        **How it works:**
        - Each user request to a specific route results in a request to the server.
        - The server processes the request and generates an appropriate response, which typically includes the HTML for the requested page.
        - For each navigation change, a new request is made to the server, resulting in a full page reload.

        **Key Points:**
        - Simplicity: Each route change involves a new request to the server, which simplifies the implementation and can be more natural for traditional web applications.
        - SEO: Server-side rendering can be beneficial for search engine optimization (SEO) as the server returns fully rendered HTML pages that are easily parsed by search engines.
        - Examples: Express.js in Node.js or Django's built-in routing mechanism in Python are examples of server-side routing.

        ### Comparison:

        - **Performance:** Client-side routing can be faster after the initial load because it doesn't need to fetch the entire page again, whereas server-side routing often leads to full page reloads.
        - **Responsiveness:** Client-side routing typically offers a more responsive user experience due to its ability to update only the necessary parts of the page.
        - **SEO:** Server-side routing can be better for SEO because search engines can easily crawl and index pages that are fully rendered on the server.
        - **Implementation Complexity:** Client-side routing often involves more initial setup for routing logic, while server-side routing might be simpler but can lead to slower user experiences on subsequent navigations.

        Both types of routing have their strengths and ideal use cases, and sometimes hybrid approaches that combine aspects of both are also used in more complex applications to leverage the benefits of each method.