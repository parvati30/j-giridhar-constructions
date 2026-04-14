import Image from "next/image";

const Gallery = () => {
    return (
        <div className="footer-gallery-moon bg-section">
            <div className="container-fluid">
                <div className="row no-gutters">
                    <div className="col-lg-12">

                        <div
                            className="footer-gallery-list-moon gallery-items page-gallery-box wow fadeInUp"
                            data-wow-delay="0.2s"
                        >

                            {/* IMAGE 1 */}
                            <div className="photo-gallery">
                                <a href="/images/gallery-1.jpg" data-cursor-text="View">
                                    <figure className="image-anime">
                                        <Image
                                            src="/images/gallery-1.jpg"
                                            alt=""
                                            width={300}
                                            height={300}
                                        />
                                    </figure>
                                </a>
                            </div>

                            {/* IMAGE 2 */}
                            <div className="photo-gallery">
                                <a href="/images/gallery-2.jpg" data-cursor-text="View">
                                    <figure className="image-anime">
                                        <Image
                                            src="/images/gallery-2.jpg"
                                            alt=""
                                            width={300}
                                            height={300}
                                        />
                                    </figure>
                                </a>
                            </div>

                            {/* IMAGE 3 */}
                            <div className="photo-gallery">
                                <a href="/images/gallery-3.jpg" data-cursor-text="View">
                                    <figure className="image-anime">
                                        <Image
                                            src="/images/gallery-3.jpg"
                                            alt=""
                                            width={300}
                                            height={300}
                                        />
                                    </figure>
                                </a>
                            </div>

                            {/* IMAGE 4 */}
                            <div className="photo-gallery">
                                <a href="/images/gallery-4.jpg" data-cursor-text="View">
                                    <figure className="image-anime">
                                        <Image
                                            src="/images/gallery-4.jpg"
                                            alt=""
                                            width={300}
                                            height={300}
                                        />
                                    </figure>
                                </a>
                            </div>

                            {/* IMAGE 5 */}
                            <div className="photo-gallery">
                                <a href="/images/gallery-5.jpg" data-cursor-text="View">
                                    <figure className="image-anime">
                                        <Image
                                            src="/images/gallery-5.jpg"
                                            alt=""
                                            width={300}
                                            height={300}
                                        />
                                    </figure>
                                </a>
                            </div>

                            {/* IMAGE 6 */}
                            <div className="photo-gallery">
                                <a href="/images/gallery-6.jpg" data-cursor-text="View">
                                    <figure className="image-anime">
                                        <Image
                                            src="/images/gallery-6.jpg"
                                            alt=""
                                            width={300}
                                            height={300}
                                        />
                                    </figure>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;