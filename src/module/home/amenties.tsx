import Image from "next/image";
import Link from "next/link";
import "animate.css";

const HomeAmenities = () => {
    return (
        <div className="our-amenities our-amenities-moon bg-section">
            <div className="container">

                {/* Section Title */}
                <div className="row section-row">
                    <div className="col-lg-12">
                        <div className="section-title section-title-center">
                            <span className="section-sub-title wow fadeInUp">
                                Our Amenities
                            </span>

                            <h2
                                className="text-anime-style-3"
                                data-cursor="-opaque"
                            >
                                Our premium amenities designed for comfortable living
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Amenities List */}
                <div className="row amenity-item-list">

                    {/* Item 1 */}
                    <div className="col-xl-4 col-md-6">
                        <div className="amenity-item active wow fadeInUp">

                            <div className="amenity-item-image">
                                <figure>
                                    <Image
                                        src="/images/amenity-image-1.jpg"
                                        alt="Yoga"
                                        width={500}
                                        height={400}
                                    />
                                </figure>
                            </div>

                            <div className="amenity-item-content-box">
                                <div className="amenity-item-content">
                                    <h2>
                                        <Link href="/amenity-single">
                                            Yoga & Meditation Zone
                                        </Link>
                                    </h2>
                                    <p>
                                        Dedicated parking areas with controlled access, providing a safe.
                                    </p>
                                </div>

                                <div className="amenity-item-btn">
                                    <Link href="/amenity-single" className="readmore-btn">
                                        View Details
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="amenity-item wow fadeInUp"
                            data-wow-delay="0.2s"
                        >

                            <div className="amenity-item-image">
                                <figure>
                                    <Image
                                        src="/images/amenity-image-2.jpg"
                                        alt="Parking"
                                        width={500}
                                        height={400}
                                    />
                                </figure>
                            </div>

                            <div className="amenity-item-content-box">
                                <div className="amenity-item-content">
                                    <h2>
                                        <Link href="/amenity-single">
                                            Secure Parking Area
                                        </Link>
                                    </h2>
                                    <p>
                                        Dedicated parking areas with controlled access, providing a safe.
                                    </p>
                                </div>

                                <div className="amenity-item-btn">
                                    <Link href="/amenity-single" className="readmore-btn">
                                        View Details
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="amenity-item wow fadeInUp"
                            data-wow-delay="0.4s"
                        >

                            <div className="amenity-item-image">
                                <figure>
                                    <Image
                                        src="/images/amenity-image-3.jpg"
                                        alt="Play Area"
                                        width={500}
                                        height={400}
                                    />
                                </figure>
                            </div>

                            <div className="amenity-item-content-box">
                                <div className="amenity-item-content">
                                    <h2>
                                        <Link href="/amenity-single">
                                            Children's Play Area
                                        </Link>
                                    </h2>
                                    <p>
                                        Dedicated parking areas with controlled access, providing a safe.
                                    </p>
                                </div>

                                <div className="amenity-item-btn">
                                    <Link href="/amenity-single" className="readmore-btn">
                                        View Details
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Footer */}
                    <div className="col-lg-12">
                        <div
                            className="section-footer-text section-satisfy-img wow fadeInUp"
                            data-wow-delay="0.4s"
                        >

                            {/* Images */}
                            <div className="satisfy-client-images">
                                <div className="satisfy-client-image">
                                    <figure className="image-anime">
                                        <Image
                                            src="/images/author-1.jpg"
                                            alt="Author"
                                            width={44}
                                            height={44}
                                        />
                                    </figure>
                                </div>

                                <div className="satisfy-client-image add-more">
                                    <Image
                                        src="/images/icon-phone-white.svg"
                                        alt="Phone"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <p>
                                Let's build something exceptional together.{" "}
                                <Link href="/contact">
                                    Get your free quote today.
                                </Link>
                            </p>

                            {/* Rating */}
                            <ul>
                                <li><span className="counter">4.9</span>/5</li>
                                <li>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </li>
                                <li>Our 4200 Review</li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeAmenities;