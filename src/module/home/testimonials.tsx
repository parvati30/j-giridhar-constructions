import Image from "next/image";

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const testimonials = [
    {
        name: "Darlene Robertson",
        role: "Clinical Coordinator",
        image: "/images/author-1.jpg",
        text: "From the moment we moved in, everything felt perfect. The apartment design, amenities, and location truly exceeded our expectations.",
    },
    {
        name: "Anjali Sharma",
        role: "Homeowner",
        image: "/images/author-2.jpg",
        text: "From the moment we moved in, everything felt perfect. The apartment design, amenities, and location truly exceeded our expectations.",
    },
    {
        name: "Vikram Patel",
        role: "Apartment Owner",
        image: "/images/author-3.jpg",
        text: "From the moment we moved in, everything felt perfect. The apartment design, amenities, and location truly exceeded our expectations.",
    },
    {
        name: "Vikram Patel",
        role: "Apartment Owner",
        image: "/images/author-4.jpg",
        text: "From the moment we moved in, everything felt perfect. The apartment design, amenities, and location truly exceeded our expectations.",
    },
];

const OurTestimonials = () => {
    return (
        <div className="our-testimonials-moon bg-section dark-section parallaxie">
            <div className="container">

                {/* TITLE */}
                <div className="row section-row">
                    <div className="col-lg-12">
                        <div className="section-title section-title-center">
                            <span className="section-sub-title wow fadeInUp">
                                Client Testimonials
                            </span>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">
                                Stories from residents who chose our apartments
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="testimonial-slider-moon">
                    <Swiper
                        // navigation
                        // pagination={{ type: "bullets", clickable: true }}
                        // autoplay={true}
                        loop={true}
                        spaceBetween={50}
                        modules={[Autoplay, Navigation, Pagination]}
                        slidesPerView={3}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        speed={1200}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-item-moon">
                                    <div className="testimonial-item-quotes-moon">
                                        <Image
                                            src="/images/icon-testimonial-quote-moon.svg"
                                            alt=""
                                            width={40}
                                            height={40}
                                        />
                                    </div>

                                    <div className="testimonial-item-content-moon">
                                        <p>{item.text}</p>
                                    </div>

                                    <div className="testimonial-item-author-moon">
                                        <div className="testimonial-author-content-moon">
                                            <h2>{item.name}</h2>
                                            <p>{item.role}</p>
                                        </div>

                                        <div className="testimonial-author-image-moon">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={60}
                                                height={60}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default OurTestimonials;