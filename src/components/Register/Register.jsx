import React, { useContext, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const { createUser, loading } = useContext(AuthContext)

    const from = location.state?.from?.pathname || '/';

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <progress className="progress progress-warning w-52"></progress>
        </div>
    }


    const handleRegister = event => {

        setError('');
        setSuccess('');
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;
        const photo = form.photo.value;
        // console.log(photo, email, pass);

        //validate 
        if (name.length < 4) {
            setError('your name should be 4 characters')
            return
        }
        else if (/(?=.*[!@#$&*])/.test(pass)) {
            setError('dont use these characters !,@,#,$,&,*')
            return
        }
        else if (!/(?=.*[A-Z])/.test(pass)) {
            setError('please type at least 1 uppercase letters')
            return
        }
        else if (pass.length < 6) {
            setError('please type at least 6 characters')
            return
        }
        // else if (photo.length < 15) {
        //     setError('the photo should be a link')
        //     return
        // }

        createUser(email, pass)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                setSuccess('Profile created successfully')
                form.reset()
                navigate(from, { replace: true})
            })
            .catch(error => setError(error.message))


    }

    return (
        <div className='lg:container mx-auto'>
            <Navigation></Navigation>
            <div className="hero h-auto min-w-full my-10">
                <form id='regForm' onSubmit={handleRegister} className="card w-5/12 mx-auto hero-content rounded-none border-amber-700 border-2 font-serif pt-10 pb-5">
                    <div className="form-control w-4/6 mb-3">
                        <p className='text-xl font-semibold text-center border-dashed border-y-2 py-3 rounded-lg border-amber-500'>Register Now !</p>
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
                        <input type="email" name='email' placeholder="enter a valid email" className="input input-bordered rounded-none border-none bg-amber-500/10 focus:outline-none" required />
                    </div>

                    <div className="form-control w-4/6 mb-3">
                        <label className="label">
                            <span className="label-text">Create Password</span>
                        </label>
                        <input type="password" name='password' placeholder="type at least 6 characters" className="input input-bordered rounded-none border-none bg-amber-500/10 focus:outline-none" required />
                    </div>

                    <div className="form-control w-4/6 mb-6">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" name='photo' placeholder="enter your photo link" className="input input-bordered rounded-none border-none bg-amber-500/10 focus:outline-none" required />
                    </div>

                    <div className="form-control w-4/6">
                        <button type='submit' className="btn bg-amber-600 border border-amber-500 hover:border hover:border-amber-700 hover:bg-white text-white hover:text-amber-600">create profile</button>
                    </div>

                    <div className='w-4/6 border-b pb-2'>
                        <p className='text-red-500 text-center'>{error}</p>
                        <p className='text-green-500 text-center'>{success}</p>
                    </div>

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