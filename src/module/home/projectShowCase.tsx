import ImagePreview from "@/components/imagePreview";
import Image from "next/image";
import { useState } from "react";

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
    const [showImage, setShowImage] = useState(false);
    const [viewImage, setViewImage] = useState("");
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
                                    onClick={() => { setShowImage(true); setViewImage(image) }}
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
            {showImage && viewImage ? <ImagePreview setShowImage={setShowImage} viewImage={viewImage} /> : null}
        </>
    );
};

export default ProjectsShowcase;