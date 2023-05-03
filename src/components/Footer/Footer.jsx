import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import logo from '/food.svg'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 border-b border-amber-600  bg-black text-white">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 bg-black text-white border-base-300">
                <div className="items-center grid-flow-col">
                    <span className='w-16 border-2 border-amber-500  rounded-full p-1'>
                        <img className='w-full m-0 p-0' src={logo} alt="" />
                    </span>
                    <div>
                        <p className='text-xl'>The kitchen of Salt & Pepper Ltd.</p>
                        <p className='text-xl'>Making chef through course since 2023</p>
                    </div>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/" className='text-2xl border-2 border-amber-500  rounded-full p-3'><FaFacebookF /></a>
                        <a href="https://www.instagram.com/" className='text-2xl border-2 border-amber-500  rounded-full p-3'><FaInstagram /></a>
                        <a href="https://www.youtube.com/" className='text-2xl border-2 border-amber-500  rounded-full p-3'><FaYoutube /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;