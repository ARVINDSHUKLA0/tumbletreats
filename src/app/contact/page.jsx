"use client";

import React from 'react';
import '../contact/contact.css'
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const page = () => {
  return (
    <>
      <Navbar />


      <section className="d-sm-flex flex-wrap justify-content-center contact-section ">
        <div>
            
        </div>
        <div className="contact-form-container pt-5">
          <h4 className="fw-bold">Get in Touch & Share the Joy!</h4>
          <p>We’re here to help! Reach out with questions, feedback, or sweet thoughts—we’d love to hear from you anytime.*</p>

          <form>
            <div className="form-group-row">
              <input type="text" name="name" placeholder="Name*" required />
              <input type="email" name="email" placeholder="Email*" required />
              <input type="tel" name="phone" placeholder="Phone Number*" required />
            </div>
            <input type="text" name="address" placeholder="Address*" required />
            <textarea name="message" rows={4} placeholder="Your Message*" required></textarea>
            <div className='d-flex justify-content-end '>
              <button type="submit">Submit Now</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
