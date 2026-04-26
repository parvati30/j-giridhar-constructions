import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Darlene Robertson",
        role: "Clinical Coordinator",
        image: "/images/slider1.JPG",
        text: "From the moment we moved in, everything felt perfect. The apartment design, amenities, and location truly exceeded our expectations.",
    },
    {
        name: "Anjali Sharma",
        role: "Homeowner",
        image: "/images/slider2.JPG",
        text: "From the moment we moved in, everything felt perfect. The apartment design, amenities, and location truly exceeded our expectations.",
    },
    {
        name: "Vikram Patel",
        role: "Apartment Owner",
        image: "/images/slider3.JPG",
        text: "From the moment we moved in, everything felt perfect. The apartment design, amenities, and location truly exceeded our expectations.",
    },
    {
        name: "Vikram Patel",
        role: "Apartment Owner",
        image: "/images/slider1.JPG",
        text: "From the moment we moved in, everything felt perfect. The apartment design, amenities, and location truly exceeded our expectations.",
    },
];

const SliderHome1 = () => {
    return (
        <div className="our-testimonials-moon bg-section dark-section parallaxie">


            <div className="testimonial-slider-moon">
                <Swiper
                    // navigation
                    pagination={{ type: "bullets", clickable: true }}
                    // autoplay={true}
                    loop={true}
                    spaceBetween={5}
                    modules={[Autoplay, Navigation, Pagination]}
                    slidesPerView={1}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    speed={1200}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="slider-item">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="slider-image"
                                    priority
                                />

                                <div className="slider-overlay"></div>

                                <div className="slider-content">
                                    <h2 className="slider-title">{item.name}</h2>
                                    <p className="slider-subtitle">{item.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    )
}
export default SliderHome1;