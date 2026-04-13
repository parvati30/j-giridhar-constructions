import Image from "next/image";
import Link from "next/link";

const WhatWeDo = () => {
    return (
        <div className="what-we-do-moon bg-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="what-we-do-content-moon">
                            <div className="section-title">
                                <span className="section-sub-title wow fadeInUp">
                                    What We Do
                                </span>
                                <h2
                                    className="text-anime-style-3"
                                    data-cursor="-opaque"
                                >
                                    Designing and delivering quality apartment living
                                </h2>
                                <p
                                    className="wow fadeInUp"
                                    data-wow-delay="0.2s"
                                >
                                    Designing &amp; delivering thoughtfully planned
                                    apartments that combine modern architecture,
                                    quality construction, everyday comfort, and a
                                    lifestyle you&apos;ll truly enjoy living in.
                                </p>
                            </div>

                            <div
                                className="what-we-list-moon wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <ul>
                                    <li>Modern Interior Design Planning</li>
                                    <li>End-to-End Property Management</li>
                                    <li>Residential Property Development</li>
                                    <li>Real Estate Investment Consultation</li>
                                </ul>
                            </div>

                            <div
                                className="what-we-footer-moon wow fadeInUp"
                                data-wow-delay="0.6s"
                            >
                                <div className="what-we-btn-moon">
                                    <Link href="/contact" className="btn-default">
                                        Explore Homes
                                    </Link>
                                </div>

                                <div className="about-us-contact-box-moon">
                                    <div className="icon-box">
                                        <Image
                                            src="/images/icon-phone-white.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div className="about-us-conatct-content-moon">
                                        <h3>Phone Number</h3>
                                        <p>
                                            <a href="tel:123456789">
                                                +91 (123) 456-789
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div
                            className="what-we-image-box wow fadeInUp"
                            data-wow-delay="0.2s"
                        >
                            <div className="what-we-image-moon">
                                <figure className="image-anime">
                                    <Image
                                        src="/images/what-we-img-moon.jpg"
                                        alt="What We Do"
                                        width={600}
                                        height={500}
                                    />
                                </figure>
                            </div>

                            <div className="contact-us-circle-moon">
                                <Link href="/contact">
                                    <Image
                                        src="/images/contact-us-circle.svg"
                                        alt="Contact Us"
                                        width={140}
                                        height={140}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;