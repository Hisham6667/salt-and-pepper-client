import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }

    return (
        <div className='lg:container mx-auto'>
            <Navigation></Navigation>
            <div className="hero h-auto min-w-full my-10">
                <form id='regForm' onSubmit={handleRegister} className="card w-5/12 mx-auto hero-content rounded-none border-amber-700 border-2 font-serif py-10">
                    <div className="form-control w-4/6 mb-3">
                        <p className='text-xl font-semibold text-center border-dashed border-y-2 py-3 rounded-lg border-amber-500'>Register Now</p>
                    </div>

                    <div className="form-control w-4/6 mb-3">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name' placeholder="enter your name" className="input input-bordered rounded-none border-none bg-amber-500/10 focus:outline-none" required />
                    </div>

                    <div className="form-control w-4/6 mb-3">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" name='email' placeholder="enter a valid email" className="input input-bordered rounded-none border-none bg-amber-500/10 focus:outline-none" required />
                    </div>

                    <div className="form-control w-4/6 mb-6">
                        <label className="label">
                            <span className="label-text">Create Password</span>
                        </label>
                        <input type="password" name='password' placeholder="type at least 6 characters" className="input input-bordered rounded-none border-none bg-amber-500/10 focus:outline-none" required />
                    </div>

                    <div className="form-control w-4/6">
                        <button type='submit' className="btn bg-amber-600 border border-amber-500 hover:border hover:border-amber-700 hover:bg-white text-white hover:text-amber-600">create profile</button>
                    </div>

                    <hr className='w-4/6 my-4'/>

                    <div className="w-4/6">
                        <p className='text-sm font-medium hover:text-amber-500 transition-all duration-300 w-28 mx-auto'><Link to='/login'>Already a <span className='text-amber-500 hover:text-black'>user</span> ?</Link></p>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;