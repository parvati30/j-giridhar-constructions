import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="main-footer-moon bg-section dark-section">
            <div className="container">
                <div className="row">

                    {/* HEADER */}
                    <div className="col-lg-12">
                        <div className="footer-header-moon">

                            <div className="section-title">
                                <h2 className="text-anime-style-3" data-cursor="-opaque">
                                    Let&apos;s find your ideal home together
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    We&apos;re here to guide you every step of the way, helping you discover a home.
                                </p>
                            </div>

                            <div className="lets-talk-btn-moon">
                                <Link href="/contact">Let&apos;s Talk</Link>
                            </div>

                        </div>
                    </div>

                    {/* LOGO */}
                    <div className="col-xl-3">
                        <div className="about-footer-moon">
                            <div className="footer-logo-moon">
                                <Image
                                    src="/images/logo.svg"
                                    alt="logo"
                                    width={150}
                                    height={40}
                                />
                            </div>
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div className="col-xl-9">
                        <div className="footer-contact-box-moon">

                            <div className="footer-contact-item-moon">
                                <h3>Address:</h3>
                                <p>123 Lorem Street, Ipsum City, Dolor State, 456789</p>
                            </div>

                            <div className="footer-contact-item-moon">
                                <h3>Get in Touch:</h3>
                                <p>
                                    Phone: <a href="tel:912345678">+91 12345 67890</a>
                                </p>
                                <p>
                                    E-mail: <a href="mailto:info@domain.com">info@domain.com</a>
                                </p>
                            </div>

                            {/* NEWSLETTER */}
                            <div className="footer-contact-item-moon newsletter-form-moon">
                                <h3>Subscribe Newsletter&apos;s:</h3>

                                <div className="footer-newsletter-form-moon">
                                    <form
                                        id="newslettersForm"
                                        onSubmit={(e) => e.preventDefault()}
                                    >
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Enter Your E-mail *"
                                                required
                                            />
                                            <button type="submit" className="newsletter-btn-moon">
                                                <i className="fa-regular fa-paper-plane"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="footer-copyright-moon">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="footer-copyright-box-moon">

                                <div className="footer-menu-moon">
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/amenities">Amenities</Link></li>
                                        <li><Link href="/blog">Blogs</Link></li>
                                        <li><Link href="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>

                                <div className="footer-copyright-text-moon">
                                    <p>Copyright © 2026 All Rights Reserved.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;