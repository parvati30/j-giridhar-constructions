import Image from "next/image";
import Link from "next/link";

const WelcomeSection = () => {
    return (
        <section className="welcome-section">
            <div className="container">
                <h2 className="welcome-title">Welcome to J. Giridhar Constructions</h2>

                <div className="welcome-grid">
                    <div className="welcome-content">
                        <p>
                            Since 1999, J. Giridhar Constructions has built a strong reputation for
                            delivering civil infrastructure with a focus on safety, quality, and client
                            satisfaction. Our experienced team combines technical expertise with a
                            commitment to integrity on every project.
                        </p>
                        <p>
                            We follow a strict Environment, Safety and Quality policy, and adhere to
                            established industry standards throughout the construction process.
                        </p>
                        <p>
                            Our pledge is to provide reliable, safe, and high-quality construction
                            services across industrial, manufacturing, commercial, educational, and
                            residential sectors.
                        </p>
                        <p>
                            We have successfully completed prestigious projects for major organizations,
                            working alongside leading architects and consultants to exceed expectations.
                        </p>
                    </div>

                    <div className="welcome-video">
                        <Image
                            src="/images/welcome.JPG"
                            alt="Bridge and Roads"
                            width={600}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;