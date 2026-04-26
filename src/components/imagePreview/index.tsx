"use client";

import React from "react";
import Image from "next/image";


type Props = {
    setShowImage: (v: boolean) => void;
    viewImage: string;
};

const ImagePreview = React.memo(({ setShowImage, viewImage }: Props) => {
    return (
        <div
            className="image-preview-container"
            onClick={() => setShowImage(false)} // close on backdrop click
        >
            <div
                className="image-preview-card"
                onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
            >
                {/* Close button */}
                <button
                    className="image-preview-close"
                    aria-label="Close preview"
                    onClick={() => setShowImage(false)}
                >
                    <Image
                        src={""}
                        alt="close"
                        width={40}
                        height={40}
                        priority
                    />
                </button>

                {/* Image */}
                <div className="image-preview-content">
                    <Image
                        src={viewImage}
                        alt="preview"
                        width={900}
                        height={600}
                        className="preview-image"
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    );
});

export default ImagePreview;