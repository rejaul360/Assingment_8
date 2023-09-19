import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='row blog'>
            <div>
                <h1 className='text-center fw-bold mb-4'>Question & Answer Blog</h1>
            </div>

            <div className='Regular shadow p-4 rounded mb-4'>
                <h2>1. Props vs state</h2>
                <h3 className='ms-3 mb-4'>Answer :</h3>
                <div className='ms-5'>
                    <h5 className='mb-3 text-secondary'> Props : Props are (immutable) values passed from a parent component to a child component. Props are used to configure a component when it is created. They are usually data that will not change during the lifetime of a component.</h5>
                    <h5 className='text-secondary'>State : State, on the other hand, is mutable data. State is used to store data that can change over time, such as user input or responses from API calls. When state changes, the component will rerender, allowing the user interface to update accordingly. </h5>
                </div>
            </div>
            <div className='Regular shadow p-4 rounded mb-4'>
                <h2>2. How does useState work?</h2>
                <h3 className='ms-3 mb-4'>Answer :</h3>
                <div className='ms-5'>
                    <h5 className='mb-3 text-secondary'>
                        useState is a React hook which allows you to add state to a functional component. It returns an array with two values: the current state and a function that allows you to update it. The first argument is the initial state, and the second argument is an optional callback function that will be invoked after the state has been updated. To update the state, you call the function returned from useState with a new value. React will then re-render the component with the new value. </h5>

                </div>
            </div>
            <div className='Regular shadow p-4 rounded mb-4'>
                <h2>3. Purpose of useEffect other than fetching data.</h2>
                <h3 className='ms-3 mb-4'>Answer :</h3>
                <div className='ms-5'>
                    <h5 className='mb-3 text-secondary'>

                        1. To perform DOM manipulation such as adding event listeners.
                        <br />
                        2. To initialize and clean up resources like subscriptions and timers.
                        <br />
                        3. To perform data fetching in specific lifecycle methods.
                        <br />
                        4. To set and clear local state (when using Hooks).
                        <br />
                        5. To share non-UI logic between components.</h5>
                </div>
            </div>
            <div className='Regular shadow p-4 rounded mb-4'>
                <h2>4. How Does React work?</h2>
                <h3 className='ms-3 mb-4'>Answer :</h3>
                <div className='ms-5'>
                    <h5 className='mb-3 text-secondary'>

                        React is a JavaScript library used to build user interfaces. It works by breaking down a user interface into components, which are then rendered using a virtual DOM. React components are written using a combination of JavaScript, HTML, and CSS. When a user interacts with a React application, the components re-render using the virtual DOM, allowing for fast and efficient updates to the user interface. React also uses Redux for state management, allowing for the efficient data flow between components.
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Blog;