import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Industrial",
        image: "/images/service.JPG",
        text: "We are the best Contractor in Chennai",
        link: "/industrial",
    },
    {
        title: "Commercial",
        image: "/images/service2.JPG",
        text: "We are the best Contractor in Chennai",
        link: "/commercial",
    },
    {
        title: "Residential",
        image: "/images/service.JPG",
        text: "We are the best installation Workers in Chennai",
        link: "/residential",
    },
    {
        title: "Road Works",
        image: "/images/service2.JPG",
        text: "We are the best Contractor in Chennai",
        link: "/road-works",
    },
    {
        title: "RCC Works",
        image: "/images/service.JPG",
        text: "We are the best installation Workers in Chennai",
        link: "/rcc-works",
    },
    {
        title: "Bitumen Works",
        image: "/images/service2.JPG",
        text: "We are the best installation Workers in Chennai",
        link: "/bitumen-works",
    },
];

const ServicesSection = () => {
    return (
        <>
            <section className="projects-section">
                <div className="container">
                    <h2 className="projects-title">Our Services</h2>
                </div>
            </section>
            <section className="services-section">

                <div className="container">
                    <div className="services-grid">
                        {services.map((item) => (
                            <article className="service-card" key={item.title}>
                                <div className="service-image">
                                    <Image src={item.image} alt={item.title} width={320} height={190} />
                                </div>
                                <h3 className="service-title">{item.title}</h3>
                                <p className="service-text">{item.text}</p>
                                <Link href={item.link} className="service-link">
                                    Read More
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesSection;