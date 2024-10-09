import React from 'react';
import CaseStudyTemplate from '../components/caseTemplate.jsx';

const MapStudy = () => {
    const caseStudyData = {
        title: "Center for Functional Fabrics",
        tags: ["Sitecore", "Web Development", "User Testing"],
        description: "I developed and launched an accessible interactive map to showcase the capabilities of a major e-textile research center.",
        coverMedia: (
            <video
                autoPlay
                muted
                loop
                width="100%"
                height="100%"
                style={{ objectFit: 'cover' }} 
            >
                <source src="/media/cff-map-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        ),
        context: {
            team: "Communications Manager, Director of Business Development",
            role: "UX Designer, Web Developer",
        },
        problemSpace: "The initial interactive map prototype was built on a platform that did not meet accessibility standards, limiting its usability for a wider audience. The challenge was to salvage the existing prototype while creating a functional, accessible version that effectively highlighted the Center’s manufacturing capabilities.",
        externalLinks: [
                { label: "Live Site", url: "https://drexel.edu/functional-fabrics/about/virtual-tour/" },
                { label: "Prototype", url: "https://www.figma.com/proto/5kM4mNOb4njhXKD6ZVL5R1/Interactive-Map?node-id=31-411&scaling=contain&page-id=0%3A1&starting-point-node-id=31%3A375" },
            ],
        processSections: [
        {
            title: "Prototype Analysis",
            content: "I began the project with a thorough analysis of the original Figma prototype of the interactive map. This step was crucial to understand the design elements, interactions, and flow that had already been conceptualized, as well as identifying what needed to be improved. During this analysis, I pinpointed several areas where the prototype fell short in terms of accessibility and functionality, such as slow performance, disorganized file management, and typographical errors.",
            imageSrc: "/images/CFF-original.png",
            imageAlt: "high fidelity wireframes",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: true
        },
        {
            title: "Design Iterations",
            content: "My design process started at the high-fidelity wireframing stage because the components and assets were already defined. I designed a version of the map using Sitecore components, ensuring it complied with accessibility standards. My goal was to create an innovative display of manufacturing capabilities that was visually appealing and easy to understand for users. I developed and evaluated several accessible designs with the communications manager to refine the user experience, balancing ideal design with practical constraints.",
            imageSrc: "/images/CFF-figma.png",
            imageAlt: "high fidelity wireframes",
            direction: { base: 'column', md: 'column' },
            imageOrder: { base: 2, md: 1 },
            textOrder: { base: 2, md: 1 },
            imageBorder: true
        },
        {
            title: "Asset Designs",
            content: "I enhanced vector graphics and patterns in Adobe Illustrator and reintegrated the brand color palette to make the pages more engaging and visually striking. Throughout the process, I made sure the design elements accurately reflected the actual manufacturing materials used.",
            imageSrc: "/images/CFF-assets.png",
            imageAlt: "example design assets",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: false
        },
        {
            title: "Deployment Process",
            content: "After an extensive wireframing process, I got to work in Sitecore, iterating with available components and video assets to rebuild the map. I developed an accessible and visually engaging pages using video clips and informative copy, successfully showcasing the center’s capabilities. This process involved extensive video editing to distill the essential elements of the original Figma prototype and present the most crucial and engaging information. I also converted natural interactions into distinct pages, allowing each space to be visualized as subpages within the website.",
            imageSrc: "/images/CFF-preview.png",
            imageAlt: "map desktop screenshot",
            direction: { base: 'column', md: 'column' },
            imageOrder: { base: 2, md: 1 },
            textOrder: { base: 2, md: 1 },
            imageBorder: true
        },
        {
            title: "User Testing",
            content: "User testing provided valuable insights into how users interacted with the new interface. Navigation was a significant challenge, as users had difficulty seeing and clicking options on the page. It was also tricky to ensure users knew about the available Figma prototype for enhanced viewing. To manage feedback and prioritize issues, I conducted a risk assessment to determine which problems needed addressing before launch and which could be handled later.",
            imageSrc: "/images/CFF-risk.png",
            imageAlt: "risk assessment sheet",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 2, md: 1 },
            textOrder: { base: 2, md: 1 },
            imageBorder: false
        },
        {
            title: "Critical Tasks",
            content: "The communications manager and I identified a few key critical tasks. Users found the initial 'Programming' slideshow confusing, suggesting that 'Fabrication' or 'Assembly' would be better as the first view. Some participants struggled to choose between the Figma and web versions of the site map, with many not noticing the Figma link at first. Based on feedback, we prioritized showing the Figma prototype. Additionally, the Figma link itself often went unnoticed, prompting us to enhance its visibility with text styling. After addressing these issues and running additional tests, we improved navigation flow and ensured key elements were more visible for users.",
            imageSrc: "/images/CFF-tasks.png",
            imageAlt: "selected notes from risk assessment",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: false
        },
        // ... more sections
        ],
        outcomes: [
            "This project afforded me a greater degree of independence, which was initially challenging. This level of design freedom was new to me, and I had to navigate the process of creating a product that effectively met user needs with limited direction. Working with a smaller team without a technical background added to the challenge. However, my previous experience with Sitecore was invaluable, allowing me to create the interface efficiently with minimal issues.",
            " I salvaged and refined the inaccessible Figma prototype by turning it into a high-performance interactive map that enhanced the visibility of the Center. I also developed an accessible version of the map including six pages of web content using Sitecore CMS to broaden audience reach."
        // ... more outcomes
        ]
    };

    return <CaseStudyTemplate {...caseStudyData} />;
};

export default MapStudy; 