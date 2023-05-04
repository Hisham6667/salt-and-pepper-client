import React, { useContext } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../Providers/AuthProvider';

const Blog = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <progress className="progress progress-warning w-52"></progress>
        </div>
    }

    return (
        <div className='lg:container mx-auto'>
            <Navigation></Navigation>
            <div className="min-h-screen w-10/12 mx-auto">
                <div className="q1 text-xl my-20 text-justify">
                    <p className='text-red-800 text-3xl mb-5 text-left'>Question: Tell us the differences between uncontrolled and controlled components ?</p>
                    <p>Answer:
                        In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                    </p>
                </div>
                <div className="q2 text-xl my-20 text-justify">
                    <p className='text-red-800 text-3xl mb-5 text-left'>Question: How to validate React props using PropTypes ?</p>
                    <p>Answer:
                        Validating React props using PropTypes is a way to ensure that the props passed into a component are of the correct data type and shape. PropTypes is a library provided by React that allows you to define the data types and shapes of your props, and React will automatically check them against the specified validators. This can help catch errors early on and ensure that your component is receiving the correct props.
                    </p>
                </div>
                <div className="q3 text-xl my-20 text-justify">
                    <p className='text-red-800 text-3xl mb-5 text-left'>Question: Tell us the difference between nodejs and express js ?</p>
                    <p>Answer:
                        Node.js and Express.js are two popular technologies used for building server-side applications in JavaScript. Here are three differences between Node.js and Express.js:
                        <li>
                            Node.js is a runtime environment for executing JavaScript code outside of a web browser, whereas Express.js is a web framework built on top of Node.js. This means that Node.js provides the core functionality for executing JavaScript on the server, while Express.js provides additional features and tools for building web applications.
                        </li>

                        <li>
                            Node.js provides a low-level API for handling network requests and responses, while Express.js provides a higher-level abstraction layer for building web applications. Express.js simplifies the process of handling HTTP requests, routing, middleware, and more, by providing a set of built-in functions and tools.
                        </li>

                        <li>
                            Node.js can be used to build a wide range of applications, including web servers, desktop applications, command-line tools, and more. Express.js is specifically designed for building web applications and provides a streamlined way to handle common web development tasks. While Node.js can be used for building web applications, it requires more work and setup to do so compared to using Express.js.
                        </li>
                    </p>
                </div>
                <div className="q4 text-xl my-20 text-justify">
                    <p className='text-red-800 text-3xl mb-5 text-left'>Question: What is a custom hook, and why will you create a custom hook ?</p>
                    <p>Answer:
                        <li>
                            A custom hook is a function that allows you to reuse code logic across multiple components in a React application. It's a way to abstract out functionality and state management that can be shared between components.
                        </li>
                        <li>
                            You would create a custom hook when you have a set of logic or state management that needs to be used across multiple components, but you don't want to repeat that code in each component. By creating a custom hook, you can encapsulate that logic and use it across multiple components without duplicating code.
                        </li>
                    </p>
                </div>
                <div className='text-red-500 mb-10 text-center text-lg'>
                    <p>Sorry for copy pasting. The problem was my time and also I had to study in the time of assignment. I read all this question and answer properly sir. Don't worry</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;