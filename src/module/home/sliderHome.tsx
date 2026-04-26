import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Darlene Robertson",
        role: "Road Project Coordinator",
        image: "/images/slider1.JPG",
        text: "From the moment the road work began, the team kept everything on schedule. The quality of the pavement, drainage, and safety measures exceeded our expectations.",
    },
    {
        name: "Anjali Sharma",
        role: "Regional Site Manager",
        image: "/images/slider2.JPG",
        text: "The road construction process was seamless. The crew handled traffic management, material delivery, and final surfacing with professional care.",
    },
    {
        name: "Vikram Patel",
        role: "Highway Engineer",
        image: "/images/slider3.JPG",
        text: "The road upgrade has improved travel times and safety. Excellent workmanship, precise grading, and durable asphalt made a big difference.",
    },
    {
        name: "Vikram Patel",
        role: "Infrastructure Consultant",
        image: "/images/slider1.JPG",
        text: "The construction team delivered a reliable road solution on time. They maintained strong site coordination and ensured the finished roadway meets all standards.",
    },
];

const SliderHome = () => {
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
export default SliderHome;