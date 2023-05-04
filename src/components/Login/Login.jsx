import React, { useContext, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { GoMarkGithub } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const {loginUser} = useContext(AuthContext)

    const handleLogin = event => {
        setError('');
        setSuccess('');
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        loginUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('login successful')
        })
        .catch(error => setError(error.message))






    }

    return (
        <div className='lg:container mx-auto'>
            <Navigation></Navigation>

            <div className="hero h-auto min-w-full my-10">
                <form id='regForm' onSubmit={handleLogin} className="card w-5/12 mx-auto hero-content rounded-none border-amber-700 border-2 font-serif py-10">
                    <div className="form-control w-4/6 mb-3">
                        <p className='text-xl font-semibold text-center border-dashed border-y-2 py-3 rounded-lg border-amber-500'>Login Now !</p>
                    </div>

                    <div className="form-control w-4/6 mb-3">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" name='email' placeholder="enter your email" className="input input-bordered rounded-none border-none bg-amber-500/10 focus:outline-none" required />
                    </div>

                    <div className="form-control w-4/6 mb-6">
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input type="password" name='password' placeholder="enter your password" className="input input-bordered rounded-none border-none bg-amber-500/10 focus:outline-none" required />
                    </div>

                    <div className="form-control w-4/6">
                        <button type='submit' className="btn bg-amber-600 border border-amber-500 hover:border hover:border-amber-700 hover:bg-white text-white hover:text-amber-600">Login</button>
                    </div>

                    <div className='w-4/6 border-b pb-2'>
                        <p className='text-red-500 text-center'>{error}</p>
                        <p className='text-green-500 text-center'>{success}</p>
                    </div>

                    <div className="w-4/6">
                        <p className='text-sm font-medium hover:text-amber-500 transition-all duration-300 w-20 mx-auto'><Link to='/register'>New <span className='text-amber-500 hover:text-black'>here</span> ?</Link></p>
                    </div>

                    <div className="form-control w-4/6 justify-between items-center">

                        <button type='submit' className="btn bg-white border border-blue-500 hover:border hover:border-none hover:bg-blue-500/80 text-blue-500 hover:text-white w-full flex flex-row justify-center mb-3">
                            <FcGoogle className='text-xl mx-3' />
                            <p className='text-sm lowercase font-normal font-sans'>Login with google</p>
                        </button>
                        <button type='submit' className="btn bg-white border border-black hover:border hover:border-none hover:bg-black text-black hover:text-white w-full flex flex-row justify-center">
                            <GoMarkGithub className='text-xl mx-3' />
                            <p className='text-sm lowercase font-normal font-sans'>Login with github</p>
                        </button>
                    </div>
                </form>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;