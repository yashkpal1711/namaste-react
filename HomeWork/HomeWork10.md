#  What is the order of life cycle method calls in Class Based Components?

    The order of lifecycle method calls in Class Based Components is as follows:

    1. constructor() - This method is called when an instance of a class is created. It allows you to initialize any variables or properties.
    2. render()   
    3. componentDidMount()
    4. componentDidUpdate()
    5. componentWillUnmount()

# Why do we use componentDidMount?
    componentDidMount is a lifecycle method in React. It is called automatically by React immediately after a component is added to the DOM.

    Here's why we use it:

    To perform side effects like fetching data or setting up a subscription: React components should ideally be concerned only with rendering data and not with fetching it. By moving such tasks into componentDidMount, we make our components more modular and easier to understand.

    To manipulate the DOM directly: In cases where a third-party library needs to directly manipulate the DOM, componentDidMount is the appropriate place to do it. This approach helps in encapsulating such direct DOM manipulations within the lifecycle method itself.

# Why do we use componentWillUnmount? Show with example?
    The componentWillUnmount method is used to perform cleanup tasks before the component is unmounted and destroyed.

    One common use case for this method is to remove any event listeners that were added in the componentDidMount method.

    For example, let's say we have a WindowResize component that listens for window resize events and updates the component state accordingly. We would need to remove this event listener when the component is unmounted to prevent memory leaks.
        javascript
        ```import React, { Component } from 'react';

        class WindowResize extends Component {
        constructor(props) {
            super(props);
            this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            };
        }

        componentDidMount() {
            window.addEventListener('resize', this.handleResize);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }

        handleResize = () => {
            this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
            });
        };

        render() {
            return (
            <div>
                <p>Window width: {this.state.width}px</p>
                <p>Window height: {this.state.height}px</p>
            </div>
            );
        }
        }

        export default WindowResize; ```