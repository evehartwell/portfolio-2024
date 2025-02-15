import React from 'react';
import CaseStudyTemplate from '../components/caseTemplate.jsx';

const CodeStudy = () => {
    const caseStudyData = {
        title: "Code and Coffee Philadelphia",
        tags: ["GitHub", "HTML", "Organizing"],
        description: "Case coming soon, a community for tech enthusiasts in Philadelphia.",
        coverMedia: "/images/ccp-mock-hd.png",
        context: {
            team: "nerds",
            role: "UX designer, developer, organizer",
        },
        problemSpace: "",
        externalLinks: [
                { label: "Live Site", url: "https://www.phillycodes.rsvp" },
            ],
        processSections: [
        {
            title: "In the making",
            content: "",
            imageSrc: "/images/ccp-meet.JPG",
            imageAlt: "Image 1 description",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: true
        },
        ],
        outcomes: [
            "",
            "",
        // ... more outcomes
        ]
    };

    return <CaseStudyTemplate {...caseStudyData} />;
};

export default CodeStudy;