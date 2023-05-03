import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const Login = () => {
    return (
        <div className='lg:container mx-auto'>
            <Navigation></Navigation>
            <div className="h-screen"></div>
            <Footer></Footer>
        </div>
    );
};

export default Login;