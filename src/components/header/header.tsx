import Image from "next/image";
import Link from "next/link";
// import "./header.scss"

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">

                        {/* Logo */}
                        <Link href="/" className="navbar-brand">
                            <Image src="/images/logo.png" alt="Logo" width={250} height={70} />
                        </Link>

                        {/* Menu */}
                        <div className="collapse navbar-collapse main-menu">
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">

                                    <li className="nav-item submenu">
                                        <Link className="nav-link" href="/">Home</Link>
                                        <ul>
                                            <li className="nav-item"><Link className="nav-link" href="/">Home - Version 1</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="/">Home - Version 2</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="/">Home - Version 3</Link></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" href="/about">About Us</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" href="/amenities">Amenities</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" href="/blog">Blog</Link>
                                    </li>

                                    <li className="nav-item submenu">
                                        <Link className="nav-link" href="#">Pages</Link>
                                        <ul>
                                            <li className="nav-item"><Link className="nav-link" href="#">Amenity Details</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#">Blog Details</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#">Projects</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#">Project Details</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#">Our Team</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#">Team Details</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#">Testimonials</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#">Image Gallery</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#">Video Gallery</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#">FAQs</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#">404</Link></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" href="/contact">Contact Us</Link>
                                    </li>

                                </ul>
                            </div>

                            {/* Button */}
                            <div className="header-btn">
                                <Link href="/contact" className="btn-default btn-highlighted">
                                    Contact Now
                                </Link>
                            </div>
                        </div>

                        <div className="navbar-toggle"></div>
                    </div>
                </nav>

                <div className="responsive-menu"></div>
            </div>
        </header>
    );
};

export default Header;