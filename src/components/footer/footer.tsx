
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer-premium">
            <div className="footer-top">
                <div className="footer-brand">
                    {/* Logo */}
                    <Link href="/" className="footer-navbar-brand">
                        <Image src="/images/logo.JPG" alt="Logo" width={80} height={80} />
                    </Link>
                    <p>J. Giridhar Constructions</p>
                </div>

                <div className="footer-contact">
                    <p>+91 98765 43210</p>
                    <p>info@company.com</p>
                </div>
            </div>

            <div className="footer-divider" />

            <div className="footer-content">
                <div className="footer-col">
                    <h4>About</h4>
                    <p>
                        We build reliable infrastructure with modern techniques, ensuring
                        durability and long-term value.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><Link href="#">Road Works</Link></li>
                        <li><Link href="#">RCC Works</Link></li>
                        <li><Link href="#">Bitumen Works</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Projects</Link></li>
                        <li><Link href="#">Careers</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Follow</h4>
                    <ul>
                        <li><Link href="#">Facebook</Link></li>
                        <li><Link href="#">Instagram</Link></li>
                        <li><Link href="#">LinkedIn</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-divider" />

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Company. All rights reserved.</p>
                <div className="footer-links">
                    <Link href="#">Privacy</Link>
                    <Link href="#">Terms</Link>
                </div>
            </div>
        </footer>
    );
}