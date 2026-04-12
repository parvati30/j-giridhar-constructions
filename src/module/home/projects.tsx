import Image from "next/image";
import Link from "next/link";

const HomeProjects = () => {
    return (
        <div className="our-projects">
            <div className="container">
                <div className="row section-row align-items-center">
                    <div className="col-xl-12">
                        <div className="section-title section-title-center">
                            <span className="section-sub-title wow fadeInUp">
                                Our Projects
                            </span>
                            <h2
                                className="text-anime-style-3"
                                data-cursor="-opaque"
                            >
                                Our residential projects built for modern lifestyles
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-4 col-md-6">
                        <div className="project-item wow fadeInUp">
                            <div className="project-item-image">
                                <Link href="/project-single" data-cursor-text="View">
                                    <figure>
                                        <Image
                                            src="/images/project-1.jpg"
                                            alt="Skyline Residency"
                                            width={500}
                                            height={400}
                                        />
                                    </figure>
                                </Link>
                            </div>

                            <div className="project-item-btn">
                                <Link href="/project-single">
                                    <Image
                                        src="/images/arrow-white.svg"
                                        alt="Arrow"
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                            </div>

                            <div className="project-item-content">
                                <h2>
                                    <Link href="/project-single">
                                        Skyline Residency
                                    </Link>
                                </h2>
                                <p>Luxury Apartments</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <div
                            className="project-item wow fadeInUp"
                            data-wow-delay="0.2s"
                        >
                            <div className="project-item-image">
                                <Link href="/project-single" data-cursor-text="View">
                                    <figure>
                                        <Image
                                            src="/images/project-2.jpg"
                                            alt="Greenview Homes"
                                            width={500}
                                            height={400}
                                        />
                                    </figure>
                                </Link>
                            </div>

                            <div className="project-item-btn">
                                <Link href="/project-single">
                                    <Image
                                        src="/images/arrow-white.svg"
                                        alt="Arrow"
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                            </div>

                            <div className="project-item-content">
                                <h2>
                                    <Link href="/project-single">
                                        Greenview Homes
                                    </Link>
                                </h2>
                                <p>Residential</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <div
                            className="project-item wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <div className="project-item-image">
                                <Link href="/project-single" data-cursor-text="View">
                                    <figure>
                                        <Image
                                            src="/images/project-3.jpg"
                                            alt="Prime Living Towers"
                                            width={500}
                                            height={400}
                                        />
                                    </figure>
                                </Link>
                            </div>

                            <div className="project-item-btn">
                                <Link href="/project-single">
                                    <Image
                                        src="/images/arrow-white.svg"
                                        alt="Arrow"
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                            </div>

                            <div className="project-item-content">
                                <h2>
                                    <Link href="/project-single">
                                        Prime Living Towers
                                    </Link>
                                </h2>
                                <p>High-Rise Apartments</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div
                            className="section-footer-text section-satisfy-img wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <div className="satisfy-client-images">
                                <div className="satisfy-client-image">
                                    <Image
                                        src="/images/author-1.jpg"
                                        alt="Author"
                                        width={44}
                                        height={44}
                                    />
                                </div>
                                <div className="satisfy-client-image add-more">
                                    <Image
                                        src="/images/icon-phone-white.svg"
                                        alt="Phone"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            </div>

                            <p>
                                Let&apos;s make something great work together.{" "}
                                <Link href="/contact">Get Free Quote</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProjects;