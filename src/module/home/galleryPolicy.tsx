import Image from "next/image";
import Link from "next/link";

const gallery = [
    "/images/gallery.JPG",
    "/images/gallery-2.JPG",
    "/images/gallery.JPG",
    "/images/gallery-2.JPG",
    "/images/gallery.JPG",
    "/images/gallery-2.JPG",
];

const GalleryPolicySection = () => {
    return (
        <section className="gallery-policy-section">
            <div className="container">
                <div className="gallery-policy-grid">
                    <div className="mini-gallery">
                        {gallery.map((img, index) => (
                            <div className="gallery-item" key={index}>
                                <Image src={img} alt={`Gallery ${index + 1}`} width={180} height={120} />
                            </div>
                        ))}
                    </div>

                    <div className="policy-box">
                        <h3 className="policy-title">HSE Policy!!</h3>
                        <p className="policy-text">
                            J. Giridhar Constructions has adopted Health, Safety and Environmental Policy to establish,
                            implement, promote and maintain an integrated management system in compliance with
                            requirements. HSE Policy starts and ends with the customer as focal point.
                        </p>
                        <div className="policy-btn-wrap">
                            <Link href="/contact" className="policy-btn">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GalleryPolicySection;