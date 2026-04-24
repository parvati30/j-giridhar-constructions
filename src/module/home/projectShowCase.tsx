import Image from "next/image";

const projectImages = [
    "/images/project.JPG",
    "/images/project-1.JPG",
    "/images/project.JPG",
    "/images/project-1.JPG",
    "/images/project.JPG",
    "/images/project-1.JPG",
    "/images/project.JPG",
    "/images/project-1.JPG",
];


const ProjectsShowcase = () => {
    return (
        <>
            <section className="projects-section">
                <div className="container">
                    <h2 className="projects-title">Our Gallery</h2>
                </div>
            </section>

            <section className="projects-showcase">
                <div className="container">
                    <div className="projects-showcase__grid">
                        {projectImages.map((image, index) => (
                            <div className="projects-showcase__card" key={index}>
                                <Image
                                    src={image}
                                    alt={`Project ${index + 1}`}
                                    width={320}
                                    height={240}
                                    className="projects-showcase__image"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectsShowcase;