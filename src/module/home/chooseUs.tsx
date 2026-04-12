import Image from "next/image";
import Link from "next/link";

const HomeChooseUs = () => {
    return (
        <div className="why-choose-us-moon bg-section dark-section">
            <div className="container">
                <div className="row section-row">
                    <div className="col-xl-12">
                        <div className="section-title section-title-center">
                            <span className="section-sub-title wow fadeInUp">
                                Why Choose Us
                            </span>
                            <h2
                                className="text-anime-style-3"
                                data-cursor="-opaque"
                            >
                                Why choose us for better modern apartment living
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="why-choose-image-moon wow fadeInUp">
                            <figure>
                                <Image
                                    src="/images/why-choose-us-image-moon.png"
                                    alt="Why Choose Us"
                                    width={600}
                                    height={700}
                                />
                            </figure>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="why-choose-content-moon">
                            <div className="why-choose-header-moon">
                                <p className="wow fadeInUp">
                                    We offer thoughtfully designed apartments that blend
                                    modern architecture, premium amenities, and everyday
                                    comfort. With prime locations, quality construction, and a
                                    focus on lifestyle convenience, our homes provide a better
                                    way to live, relax, and grow.
                                </p>
                            </div>

                            <div
                                className="why-choose-body-moon wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <div className="why-choose-counter-list-moon">
                                    <div className="why-choose-counter-item-moon">
                                        <div className="icon-box">
                                            <Image
                                                src="/images/icon-why-choose-counter-1-moon.svg"
                                                alt=""
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className="why-choose-counter-item-content-moon">
                                            <h2>
                                                <span className="counter">12</span>
                                            </h2>
                                            <p>Premium lifestyle amenities</p>
                                        </div>
                                    </div>

                                    <div className="why-choose-counter-item-moon">
                                        <div className="icon-box">
                                            <Image
                                                src="/images/icon-why-choose-counter-2-moon.svg"
                                                alt=""
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className="why-choose-counter-item-content-moon">
                                            <h2>
                                                <span className="counter">24</span>/{" "}
                                                <span className="counter">7</span>
                                            </h2>
                                            <p>Security & maintenance support</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="why-choose-counter-list-moon">
                                    <div className="why-choose-counter-item-moon">
                                        <div className="icon-box">
                                            <Image
                                                src="/images/icon-why-choose-counter-3-moon.svg"
                                                alt=""
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className="why-choose-counter-item-content-moon">
                                            <h2>
                                                <span className="counter">100</span>%
                                            </h2>
                                            <p>Thoughtfully planned spaces</p>
                                        </div>
                                    </div>

                                    <div className="why-choose-counter-item-moon">
                                        <div className="icon-box">
                                            <Image
                                                src="/images/icon-why-choose-counter-4-moon.svg"
                                                alt=""
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className="why-choose-counter-item-content-moon">
                                            <h2>
                                                <span className="counter">98</span>%
                                            </h2>
                                            <p>Resident satisfaction rate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="why-choose-footer-moon wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <div className="why-choose-btn-moon">
                                    <Link
                                        href="/contact"
                                        className="btn-default btn-highlighted"
                                    >
                                        contact us
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
                                        <h3>Call Us Today!</h3>
                                        <p>
                                            <a href="tel:123456789">+91 (123) 456-789</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeChooseUs;