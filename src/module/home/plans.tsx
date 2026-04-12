import Image from "next/image";
import Link from "next/link";

const HomePlans = () => {
    return (
        <div className="apartments-plans-moon">
            <div className="container">
                <div className="row section-row">
                    <div className="col-xl-12">
                        <div className="section-title section-title-center">
                            <span className="section-sub-title wow fadeInUp">
                                Apartments Plans
                            </span>
                            <h2
                                className="text-anime-style-3"
                                data-cursor="-opaque"
                            >
                                Discover spacious apartment plans with modern layouts
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-4 col-md-6">
                        <div className="apartments-plan-item-moon wow fadeInUp">
                            <div className="apartments-plan-item-image-moon">
                                <figure className="image-anime">
                                    <Image
                                        src="/images/apartments-plan-image-1-moon.jpg"
                                        alt="Skyline Garden Residences"
                                        width={500}
                                        height={350}
                                    />
                                </figure>
                            </div>

                            <div className="apartments-plan-item-body-moon">
                                <div className="apartments-plan-item-content-moon">
                                    {/* <p>Spacious</p> */}
                                    <ul>
                                        <li>Spacious</li>
                                    </ul>
                                    <h3>Skyline Garden Residences</h3>
                                </div>

                                <div className="apartments-plan-item-list-moon">
                                    <ul>
                                        <li>
                                            Area (sq.ft) <span>1200</span>
                                        </li>
                                        <li>
                                            Type <span>2BHK</span>
                                        </li>
                                        <li>
                                            Price <span>$150,000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <div
                            className="apartments-plan-item-moon wow fadeInUp"
                            data-wow-delay="0.2s"
                        >
                            <div className="apartments-plan-item-image-moon">
                                <figure className="image-anime">
                                    <Image
                                        src="/images/apartments-plan-image-2-moon.jpg"
                                        alt="Luxury Apartments"
                                        width={500}
                                        height={350}
                                    />
                                </figure>
                            </div>

                            <div className="apartments-plan-item-body-moon">
                                <div className="apartments-plan-item-content-moon">
                                    <ul>
                                        <li>Luxury</li>
                                    </ul>
                                    <h3>Luxury Apartments</h3>
                                </div>

                                <div className="apartments-plan-item-list-moon">
                                    <ul>
                                        <li>
                                            Area (sq.ft) <span>1200</span>
                                        </li>
                                        <li>
                                            Type <span>2BHK</span>
                                        </li>
                                        <li>
                                            Price <span>$150,000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <div
                            className="apartments-plan-item-moon wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <div className="apartments-plan-item-image-moon">
                                <figure className="image-anime">
                                    <Image
                                        src="/images/apartments-plan-image-3-moon.jpg"
                                        alt="Crystal Park Residences"
                                        width={500}
                                        height={350}
                                    />
                                </figure>
                            </div>

                            <div className="apartments-plan-item-body-moon">
                                <div className="apartments-plan-item-content-moon">
                                    <ul>
                                        <li>Stylish</li>
                                    </ul>
                                    <h3>Crystal Park Residences</h3>
                                </div>

                                <div className="apartments-plan-item-list-moon">
                                    <ul>
                                        <li>
                                            Area (sq.ft) <span>1200</span>
                                        </li>
                                        <li>
                                            Type <span>2BHK</span>
                                        </li>
                                        <li>
                                            Price <span>$150,000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div
                            className="section-footer-text wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <p>
                                <span>Free</span>
                                Elevate Your Lifestyle with Expertly Designed Homes -{" "}
                                <Link href="/contact">
                                    Where Comfort Meets Modern Living
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePlans;