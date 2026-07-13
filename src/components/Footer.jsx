'use client';
import React from 'react';
import '../componentsStyle/Footer.css'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer-section text-white py-5">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-md-6 col-sm-6">
                        <h5 className="footer-heading">Page</h5>
                        <ul className="list-unstyled mt-3 footer-links">
                            <li>
                                <Link className='text-decoration-none text-white' href="/">Home</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-white' href="/about" >About</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-white' href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-sm-6">
                        <h5 className="footer-heading">Contact Us</h5>
                        <ul className="list-unstyled mt-3 footer-contact">
                            <li>
                                <Link className='text-decoration-none text-white' href="#">
                                    <i className="fas fa-map-marker-alt me-2"></i>C-26, Sector - 65, Noida, Uttar Pradesh - 201301
                                </Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-white' href="#">
                                    <i className="fas fa-envelope me-2"></i> support@tumbletreats.com
                                </Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none text-white' href="#">
                                    <i className="fas fa-phone me-2"></i> +9870185985
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="col-md-4 col-sm-12">
                        <h4 className="footer-newsletter-heading">Get In Touch With Us</h4>
                        <div className="newsletter-box d-flex mt-3">
                            <input
                                type="email"
                                className="form-control border-0 shadow-none email-input"
                                placeholder="Enter your mail here"
                            />
                            <button className="btn btn-subscribe px-4">Subscribe</button>
                        </div>
                    </div> */}
                </div>
            </div>

        </footer>
    );
};

export default Footer;
