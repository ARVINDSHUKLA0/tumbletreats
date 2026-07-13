import React from 'react'
import '../about/about.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <>
            <Navbar />
            <section className='pt-5'>
                <div className="row m-0 pt-5">
                    <div className="col-lg-6 col-md-7 col-sm-6 col-12">
                        <h2 className='m-0'>About Us</h2>
                        <p className='m-0 pb-2'>Welcome to the magical world of Tumble Treats!</p>
                        <p>At Tumble Treats, we believe sweet moments should be full of fun, flavour, and a little bit of imagination. That’s why we created a snack that’s as delightful to discover as it is to devour—a vegan fruit jelly center wrapped in silky milk chocolate, with a surprise burst of personality in every piece.</p>
                        <p>We’re not just a treat—we’re a gang of choco-fruity friends, each one bursting with bold flavour and adorable charm. Whether you’re roaring with Dino, hopping with Bunny, or cuddling up with Bear, there’s a Tumble Treat buddy for every mood, craving, and playful heart.
                        </p>
                        <p className='fw-bold m-0'>Made with love, care, and only the happiest ingredients, our treats are:</p>
                        <ul className='p-0 ps-3'>
                            <li>Vegan-Friendly</li>
                            <li>Covered in creamy milk chocolate</li>
                            <li>Perfect for kids and kids-at-heart</li>
                            <li>Packed with fruity fun in every tumble</li>
                        </ul> 
                         <p className='fw-bold fs-5 m-0'>Why “Tumble”</p>
                          <p className='m-0 pb-2'>Because every bite is a little adventure—a tumble of textures, flavours, and giggles. It’s the joy of discovering something unexpected, the comfort of your favourite sweet, and the spark of imagination all in one tiny, tasty friend.</p>
                          <p className='fw-bold fs-5 m-0'>Our Mission</p>
                          <p className='m-0 pb-2'>To bring moments of wonder, delight, and sweet surprise to snack time—while keeping things clean, fruity, and fun for all.</p>
                          <p className='fw-bold fs-5 m-0'>Tumble Treats</p>
                          <p className='m-0 pb-lg-4 pb-2'>Fun on the outside. Fruity on the inside. Made for little hands with big imaginations.</p>

                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 col-12 offset-lg-1 mb-3">
                         <img className='img-fluid' src="/assets/img/about-1.jpeg" alt="" />
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default page