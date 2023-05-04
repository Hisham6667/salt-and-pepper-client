import React, { useContext } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../Providers/AuthProvider';

const Main = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <progress className="progress progress-warning w-52"></progress>
        </div>
    }
    return (
        <div className='lg:container mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;