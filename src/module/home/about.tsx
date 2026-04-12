import Image from "next/image";
import Link from "next/link";

const HomeAbout = () => {
    return (
        <div className="about-us-moon">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Side */}
                    <div className="col-xl-6">
                        <div className="about-us-image-box-moon">

                            {/* Box 1 */}
                            <div className="about-us-image-box-1-moon">

                                <div className="about-us-image-moon">
                                    <figure className="image-anime reveal">
                                        <Image src="/images/about-us-image-2-moon.jpg" alt="" width={500} height={500} />
                                    </figure>
                                </div>

                                {/* Happy Customer */}
                                <div className="happy-customer-box-moon">
                                    <div className="satisfy-client-images">

                                        {[1, 2, 3].map((item) => (
                                            <div className="satisfy-client-image" key={item}>
                                                <figure className="image-anime">
                                                    <Image
                                                        src={`/images/author-${item}.jpg`}
                                                        alt=""
                                                        width={40}
                                                        height={40}
                                                    />
                                                </figure>
                                            </div>
                                        ))}

                                    </div>

                                    <div className="happy-customer-box-content-moon">
                                        <p>Happy families comfortably in our apartments.</p>
                                    </div>
                                </div>

                            </div>

                            {/* Box 2 */}
                            <div className="about-us-image-box-2-moon">

                                <div className="contact-us-circle-moon">
                                    <Link href="/contact">
                                        <Image src="/images/contact-us-circle.svg" alt="" width={120} height={120} />
                                    </Link>
                                </div>

                                <div className="about-us-image-moon">
                                    <figure className="image-anime reveal">
                                        <Image src="/images/about-us-image-2-moon.jpg" alt="" width={500} height={500} />
                                    </figure>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-xl-6">
                        <div className="about-us-content-moon">

                            <div className="section-title">
                                <span className="section-sub-title">
                                    About Our Property
                                </span>

                                <h2>
                                    Building comfortable spaces you'll love to live
                                </h2>

                                <p>
                                    Every detail of our property is carefully planned to enhance everyday life,
                                    from spacious layouts and natural lighting to high-quality materials and smart design solutions.
                                </p>
                            </div>

                            {/* Body */}
                            <div className="about-us-body-moon">

                                <div className="about-us-body-item-moon">
                                    <div className="about-us-body-item-content-moon">
                                        <h2><span>15</span>+</h2>
                                        <p>Years of experience</p>
                                    </div>
                                    <div className="icon-box">
                                        <Image src="/images/icon-about-body-item-1-moon.svg" alt="" width={24} height={24} />
                                    </div>
                                </div>

                                <div className="about-us-body-item-moon">
                                    <div className="about-us-body-item-content-moon">
                                        <h2><span>27</span>/<span>7</span></h2>
                                        <p>Security and support</p>
                                    </div>
                                    <div className="icon-box">
                                        <Image src="/images/icon-about-body-item-2-moon.svg" alt="" width={24} height={24} />
                                    </div>
                                </div>

                            </div>

                            {/* Footer */}
                            <div className="about-us-footer-moon">

                                <div className="about-us-btn-moon">
                                    <Link href="/about" className="btn-default">
                                        More About Us
                                    </Link>
                                </div>

                                <div className="about-author-box-moon">

                                    <div className="about-author-image-moon">
                                        <figure className="image-anime">
                                            <Image src="/images/author-1.jpg" alt="" width={50} height={50} />
                                        </figure>
                                    </div>

                                    <div className="about-author-content-moon">
                                        <h3>Jane Cooper</h3>
                                        <p>Co. Founder</p>
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

export default HomeAbout;