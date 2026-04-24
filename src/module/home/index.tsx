import WelcomeSection from "./WelcomeSection";
import ServicesSection from "./service";
import GalleryPolicySection from "./galleryPolicy";
import ProjectsShowcase from "./projectShowCase";
import SliderHome1 from "./sliderHome";



const Home = () => {
    return (
        <>
            <SliderHome1 />
            <div className="bridge-roads-page">
                <WelcomeSection />
                <ServicesSection />
                <GalleryPolicySection />
                <ProjectsShowcase />
            </div>
        </>
    );
}

export default Home;