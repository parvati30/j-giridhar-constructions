import Image from "next/image";
import Link from "next/link";

const HomeHero = () => {
    return (
        <div className="hero-moon hero-video dark-section">

            <div className="hero-bg-video">
                <video autoPlay muted loop id="myvideo">
                    <source
                        src="https://demo.awaikenthemes.com/assets/videos/antila-video.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            <div className="container">
                <div className="row align-items-end">

                    <div className="col-xl-7">
                        <div className="hero-content-moon">

                            <div className="section-title">
                                <span className="section-sub-title">
                                    A better way to experience home
                                </span>

                                <h1>
                                    Your Dream Apartment in the Perfect Location
                                </h1>

                                <p>
                                    Experience contemporary apartments crafted with smart layouts,
                                    premium finishes, and everyday comfort. Perfectly located to
                                    keep you connected to everything that matters.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-5">

                        <div className="hero-info-box-moon">

                            <div className="hero-info-image-moon">
                                <figure className="image-anime">
                                    <Image
                                        src="/images/hero-info-image-moon.jpg"
                                        alt="Hero Info"
                                        width={500}
                                        height={350}
                                    />
                                </figure>
                            </div>

                            <div className="hero-info-content-moon">
                                <p>
                                    “Find your perfect home designed for comfort, style, and everyday living”
                                </p>

                                <div className="hero-info-btn">
                                    <Link href="/contact" className="readmore-btn">
                                        Book a Home
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default HomeHero;