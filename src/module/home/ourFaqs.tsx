import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const faqs = [
    {
        question: "1. What amenities are included in this residential property?",
        answer: "Yes, basic maintenance services are typically included...",
    },
    {
        question: "2. Are parking facilities available for residents and guests?",
        answer: "Yes, basic maintenance services are typically included...",
    },
    {
        question: "3. Are maintenance services included after purchase?",
        answer: "Yes, basic maintenance services are typically included...",
    },
    {
        question: "4. What payment plans are offered?",
        answer: "Yes, basic maintenance services are typically included...",
    },
    {
        question: "5. What security features are provided?",
        answer: "Yes, basic maintenance services are typically included...",
    },
    {
        question: "6. What Maintenance Services Are Provided?",
        answer: "Yes, basic maintenance services are typically included...",
    },
];
const OurFaqs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="our-faqs-moon">
            <div className="container">
                <div className="row">

                    {/* LEFT SIDE */}
                    <div className="col-xl-5">
                        <div className="faqs-content-moon">

                            <div className="section-title">
                                <span className="section-sub-title wow fadeInUp">FAQ's</span>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">
                                    Common questions about apartment living answered
                                </h2>
                            </div>

                            <div className="faqs-cta-box-moon wow fadeInUp" data-wow-delay="0.2s">

                                <div className="faqs-cta-box-img-moon">
                                    <figure className="image-anime">
                                        <Image
                                            src="/images/faqs-cta-box-image-moon.jpg"
                                            alt=""
                                            width={500}
                                            height={350}
                                        />
                                    </figure>
                                </div>

                                <div className="about-us-contact-box-moon">
                                    <div className="icon-box">
                                        <Image
                                            src="/images/icon-phone-white.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                    </div>

                                    <div className="about-us-conatct-content-moon">
                                        <h3>Call Us Today!</h3>
                                        <p>
                                            <a href="tel:123456789">+91 (123) 456-789</a>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-xl-7">
                        <div className="faq-accordion-moon">

                            {faqs.map((faq, index) => {
                                const isOpen = activeIndex === index;

                                return (
                                    <div
                                        key={index}
                                        className="accordion-item wow fadeInUp"
                                        data-wow-delay={`${index * 0.2}s`}
                                    >
                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                {faq.question}
                                            </button>
                                        </h2>

                                        <div
                                            className={`accordion-collapse collapse ${isOpen ? "show" : ""
                                                }`}
                                        >
                                            <div className="accordion-body">
                                                <p>{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurFaqs;