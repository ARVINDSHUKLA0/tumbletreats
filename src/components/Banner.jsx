'use client';
import React from 'react';
import '../componentsStyle/Banner.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => { 
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: false,
        swipe: false,
        touchMove: false,
        pauseOnHover: false,
        fade: true, 
    };



    const BannerArr = [
        { BannerImges: "/assets/img/1a.png" }, 
        { BannerImges: "/assets/img/2.png" }, 
        { BannerImges: "/assets/img/3.png" },  
        { BannerImges: "/assets/img/4.png" },   
    ];

    return (
        <div className="main-banner-height-set">
            <div className="background-images-fixed">
                <div className="slider-container">
                    <Slider {...settings}>
                        {BannerArr.map((item, index) => (
                            <div className='item-imges-set' key={index}>
                                <img className='img-fluid' src={item.BannerImges} alt={`Banner ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Banner;