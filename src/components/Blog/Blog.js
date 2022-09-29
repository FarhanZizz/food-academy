import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blog'>
                <h3>How does React Work?</h3>
                <p>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries</p>
            </div>
            <div className='blog'>
                <h3>Difference between prop and state?</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. </p>
            </div>
            <div className='blog'>
                <h3>What is the purpose of useEffect in react?</h3>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>
        </div>
    );
};

export default Blog;