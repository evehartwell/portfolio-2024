import React from 'react';
import CaseStudyTemplate from '../components/caseTemplate.jsx';

const ModesensTest = () => {
    const caseStudyData = {
        title: "Modesens Test",
        tags: ["figma", "jitter", "microinteractions"],
        description: "I redesigned Modesens, an online shopping assistant app, to enhance user experience by addressing issues such as information overload, inconsistent UI, and lack of personalization.",
        coverMedia: (
            <video
                autoPlay
                muted
                loop
                width="100%"
                height="100%"
                style={{ objectFit: 'cover' }} 
            >
                <source src='/media/modesens-mobile.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
        ),
        context: {
            team: "Your description...",
            role: "Redesign a chosen app from start to finish with an emphasis on interaction design using a Figma animation plug-in. Focus on a specific user task, identify inefficiencies, and streamline the process.",
        },
        problemSpace: "The Modesens app faced challenges that negatively impacted the user experience. One of the primary issues was a bloated user task flow, where excessive and poorly organized information, a cluttered UI, and small text made interactions frustrating. Conflicting mental models, inconsistent menus, and unresponsive buttons further disrupted navigation, leading to confusion and a generally poor user experience.",
        externalLinks: [
            { label: "Live Site", url: "/" },
            { label: "Prototype", url: "/" },
        ],
        processSections: [
            {
                title: "Section 1 Title",
                content: "Section 1 content...",
                imageSrc: "/images/LUXR-tasks.png",
                imageAlt: "Image 1 description",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 2, md: 1 },
                textOrder: { base: 1, md: 2 }
            },
            {
                title: "Section 2 Title",
                content: "Section 2 content...",
                imageSrc: "/path/to/image2.png",
                imageAlt: "Image 2 description",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 }
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

export default ModesensTest;