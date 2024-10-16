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
        problemSpace: "The initial interactive map prototype was built on a platform that did not meet accessibility standards, limiting its usability for a wider audience. The challenge was to salvage aspects of the existing prototype while developing a new, fully accessible version from the ground up. This project presented a series of challenges that required me to wear multiple hats all within a limited budget, a small team, and a tight timeframe.",
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
            title: "Inspiration",
            content: "This project offered a rare opportunity for creative exploration. I drew inspiration from virtual maps and tours used by institutions like the Metropolitan Museum of Art and the National Gallery of Art, which creatively and functionally displayed their spaces. While the possibilities for this project were boundless, understanding its potential was a major source of inspiration that pushed me to think innovatively about how I could best highlight the Center's capabilities.",
            imageSrc: "/images/CFF-inspo.png",
            imageAlt: "screenshot of the metkids interactive map and national gallery of art virtual tour site",
            direction: { base: 'column', md: 'column' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: true
        },
        {
            title: "Technology Exploration",
            content: "Research was essential to identifying the most effective way to launch a fully accessible interactive map. I explored several technological options, including Infogram, a tool that allows the creation of interactive infographics, and Sitecore-compliant CSS classes to ensure the design met accessibility standards. Additionally, I spent some time developing a responsive prototype in html, css, and vanilla javascript. This proof-of-concept was scrapped due to compliance issues but it gave me a better understanding of the technical possibilities for this project.",
            imageSrc: "/images/blank-img.png",
            imageAlt: "blank",
            direction: { base: 'column', md: 'column' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: false
        },
        
        {
            title: "Design Iterations",
            content: "My design process started at the high-fidelity wireframing stage because the components and assets were already defined. I designed a version of the map using Sitecore components, ensuring it complied with accessibility standards. My objective was to retain as many original assets as possible while incorporating interactivity and vibrant color. However, the interactive elements, such as buttons, felt out of place within the static site and didn’t create an immersive experience. I developed and evaluated several accessible designs with the communications manager to refine the user experience, balancing ideal design with practical constraints.",
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
            "This project was a significant turning point in my journey as a UX designer, presenting me with a unique combination of challenges and opportunities. The freedom to design independently, while initially daunting, allowed me to push my creative boundaries and develop solutions that were both practical and creative.",
            "Working with a small team that lacked technical expertise forced me to improve my communication skills, simplifying complex ideas and taking on a diverse range of responsibilities. My previous experience with Sitecore proved invaluable, enabling me to overcome technical hurdles quickly and develop the interface with minimal issues.",
            "The most notable success of this project was transforming an inaccessible Figma prototype into a fully functional, high-performance interactive map. I developed an accessible version of the map alongside six pages of web content using Sitecore CMS, broadening the Center’s audience and adhering to inclusivity standards. Despite the limitations of budget and time, I delivered a solution that not only met user needs but also elevated the Center's digital presence.",
            "This experience taught me the importance of adaptability, technical expertise, and a user-focused design process in creating meaningful digital solutions. It required me to strike a balance between creativity and practicality, prioritize features strategically, and make independent design decisions under pressure."
        // ... more outcomes
        ]
    };

    return <CaseStudyTemplate {...caseStudyData} />;
};

export default MapStudy; 