import Image from "next/image";
import Link from "next/link";

const OurBlog = () => {
    return (
        <div className="our-blog">
            <div className="container">

                {/* TITLE */}
                <div className="row section-row">
                    <div className="col-lg-12">
                        <div className="section-title section-title-center">
                            <span className="section-sub-title wow fadeInUp">
                                Latest blog
                            </span>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">
                                Latest insights from real{" "}
                                <span>estate and construction</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row">

                    {/* BLOG 1 */}
                    <div className="col-xl-4 col-md-6">
                        <div className="post-item wow fadeInUp">

                            <div className="post-featured-image">
                                <Link href="/blog-single" data-cursor-text="View">
                                    <figure className="image-anime">
                                        <Image
                                            src="/images/post-1.jpg"
                                            alt=""
                                            width={400}
                                            height={300}
                                        />
                                    </figure>
                                </Link>
                            </div>

                            <div className="post-item-body">

                                <div className="post-item-meta">
                                    <ul>
                                        <li>
                                            <Image
                                                src="/images/icon-calendar.svg"
                                                alt=""
                                                width={16}
                                                height={16}
                                            />
                                            06 Jan, 2026
                                        </li>
                                    </ul>
                                </div>

                                <div className="post-item-content">
                                    <h2>
                                        <Link href="/blog-single">
                                            5 Essential Tips for Designing a Modern Apartment That
                                            Feel Spacious & Stylish
                                        </Link>
                                    </h2>
                                </div>

                                <div className="post-item-btn">
                                    <Link href="/blog-single" className="readmore-btn">
                                        Read More
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* BLOG 2 */}
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="post-item wow fadeInUp"
                            data-wow-delay="0.2s"
                        >

                            <div className="post-featured-image">
                                <Link href="/blog-single" data-cursor-text="View">
                                    <figure className="image-anime">
                                        <Image
                                            src="/images/post-2.jpg"
                                            alt=""
                                            width={400}
                                            height={300}
                                        />
                                    </figure>
                                </Link>
                            </div>

                            <div className="post-item-body">

                                <div className="post-item-meta">
                                    <ul>
                                        <li>
                                            <Image
                                                src="/images/icon-calendar.svg"
                                                alt=""
                                                width={16}
                                                height={16}
                                            />
                                            05 Jan, 2026
                                        </li>
                                    </ul>
                                </div>

                                <div className="post-item-content">
                                    <h2>
                                        <Link href="/blog-single">
                                            How Modern Apartment Design Enhances Everyday Living
                                            Comfort
                                        </Link>
                                    </h2>
                                </div>

                                <div className="post-item-btn">
                                    <Link href="/blog-single" className="readmore-btn">
                                        Read More
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* BLOG 3 */}
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="post-item wow fadeInUp"
                            data-wow-delay="0.4s"
                        >

                            <div className="post-featured-image">
                                <Link href="/blog-single" data-cursor-text="View">
                                    <figure className="image-anime">
                                        <Image
                                            src="/images/post-3.jpg"
                                            alt=""
                                            width={400}
                                            height={300}
                                        />
                                    </figure>
                                </Link>
                            </div>

                            <div className="post-item-body">

                                <div className="post-item-meta">
                                    <ul>
                                        <li>
                                            <Image
                                                src="/images/icon-calendar.svg"
                                                alt=""
                                                width={16}
                                                height={16}
                                            />
                                            04 Jan, 2026
                                        </li>
                                    </ul>
                                </div>

                                <div className="post-item-content">
                                    <h2>
                                        <Link href="/blog-single">
                                            Tips for Creating a Calm and Functional Living Space at
                                            Home
                                        </Link>
                                    </h2>
                                </div>

                                <div className="post-item-btn">
                                    <Link href="/blog-single" className="readmore-btn">
                                        Read More
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurBlog;