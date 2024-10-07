import React from 'react';
import CaseStudyTemplate from '../components/caseTemplate.jsx';

const BlackhippieStudy = () => {
    const caseStudyData = {
        title: "Black Hippie Art",
        tags: ["Social Media", "Canva", "Squarespace"],
        description: "I am enhancing a local BIPOC art club's digital presence and community engagement through social media management, brand updates, and website improvements to better support and connect with the local art community.",
        coverMedia: (
            <video
                autoPlay
                muted
                loop
                width="100%"
                height="100%"
                style={{ objectFit: 'cover' }} 
            >
                <source src="/media/bha-home.mov" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        ),
        context: {
            client: "The Black Hippie Art Club is a BIPOC art group based in Philadelphia that hosts sketch clubs, gallery tours, art-making workshops and more. The group exists as a way for underrepresented artists to get resources needed to be successful in the creative industry while meeting new, local artists in the area.",
        },
        problemSpace: "I am enhancing Black Hippie Art's digital presence and community engagement to better support underrepresented BIPOC artists in Philadelphia. I am focusing on improving the website’s accessibility and functionality, optimizing social media strategies, and expanding community outreach.",
        externalLinks: [
                { label: "Visit Site", url: "https://www.blackhippieart.com/" },
            ],
        processSections: [
        {
            title: "Work In Progress",
            content: "I am leveraging Meta Business Suite to track social media growth and engagement, aiming to translate online success into in-person interactions by updating audits, improving Instagram analytics, and scheduling posts with Planoly. I'm also developing brand guidelines, refining the color palette, enhancing UX for donations, and launching a Discord group linked to meetups. Additionally, I manage key documents, including job lists and resource hubs, addressing identified gaps. On the design front, I’m improving the Black Hippie Art website with updates like award recognitions and working on various design tasks, such as grant flyers.",
            imageSrc: "/images/BHA-posts.png",
            imageAlt: "example social media posts",
            direction: { base: 'column', md: 'column' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 }
        },
        // ... more sections
        ]
    };

    return <CaseStudyTemplate {...caseStudyData} />;
};

export default BlackhippieStudy;