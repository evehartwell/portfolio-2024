import React from 'react';
import CaseStudyTemplate from '../components/caseTemplate';

const casePage = () => {
    const caseStudyData = {
        title: "Project Title",
        tags: ["", "", ""],
        description: "",
        coverMedia: "/images/image.png", /* 
        coverMedia: (
            <video
                autoPlay
                muted
                loop
                width="100%"
                height="100%"
                style={{ objectFit: 'cover' }} 
            >
                <source src="/path/to/your/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        ), */
        context: {
            team: "Your description...",
            role: "Your description...",
        },
        problemSpace: "Your problem space description...",
        externalLinks: [
                { label: "Live Site", url: "/" },
                { label: "Prototype", url: "/" },
            ],
        processSections: [
        {
            title: "Section 1 Title",
            content: "Section 1 content...",
            imageSrc: "/path/to/image1.png",
            imageAlt: "Image 1 description",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: true
        },
        {
            title: "Section 2 Title",
            content: "Section 2 content...",
            imageSrc: "/path/to/image2.png",
            imageAlt: "Image 2 description",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: true
        },
        {
            title: "Section 3 Title",
            content: "Section content...",
            imageSrc: "/path/to/image2.png",
            imageAlt: "Image 2 description",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 }
        },
        {
            title: "Section 4 Title",
            content: "Section content...",
            imageSrc: "/path/to/image2.png",
            imageAlt: "Image 2 description",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 }
        },
        // ... more sections
        ],
        outcomes: [
            "Outcome 1...",
            "Outcome 2...",
        // ... more outcomes
        ]
    };

    return <CaseStudyTemplate {...caseStudyData} />;
};

export default casePage;