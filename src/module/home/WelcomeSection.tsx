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
                            Bridge and roads established in 1999. We have built our reputation in Construction
                            service with integrity of Safety &amp; Quality to our clients. Our commitment
                            experience &amp; team work of our family is the key element for our Company’s
                            success.
                        </p>
                        <p>
                            We are committed and give preference to our Ens Policy &amp; Quality Policy.
                            Our Company follows all Safety &amp; Quality Standard during construction.
                        </p>
                        <p>
                            Our pledge is to provide services in safety &amp; Quality to our clients.
                            Company’s verticals of construction include Industrial, manufacturing, Commercial
                            buildings, educational institutions, and residential buildings.
                        </p>
                        <p>
                            We have executed prestigious projects for major organizations, working with leading
                            architects and consultants.
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