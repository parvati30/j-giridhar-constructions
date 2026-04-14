
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeAbout from "./about";
import HomeAmenities from "./amenties";

import "animate.css";
import HomePlans from "./plans";
import HomeChooseUs from "./chooseUs";
import HomeHero from "./hero";
import HomeProjects from "./projects";
import WhatWeDo from "./whatWeDo";
import OurFaqs from "./ourFaqs";
import OurBlog from "./blog";
import Gallery from "./gallery";
import Footer from "./footer";
import OurTestimonials from "./testimonials";

const Home = () => {
    useEffect(() => {
        let cursorInstance: any;

        import("@/utils/cursor").then((mod) => {
            cursorInstance = new mod.default();
        });

        return () => {
            // cleanup (optional)
        };
    }, []);

    return (
        <>
            <HomeHero />
            <HomeAbout />
            <HomeAmenities />
            <HomePlans />
            <HomeChooseUs />
            <HomeProjects />
            <WhatWeDo />
            <OurFaqs />
            <OurTestimonials />
            {/* <OurBlog />
            <Gallery />
            <Footer /> */}

        </>
    );
};

export default Home;