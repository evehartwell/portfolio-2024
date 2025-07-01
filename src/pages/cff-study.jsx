import React from 'react';
import CaseStudyTemplate from '../components/caseTemplate.jsx';

const MapStudy = () => {
    const caseStudyData = {
        title: "Center for Functional Fabrics",
        tags: ["Figma Prototype", "Sitecore", "Motion Design", "Web Development", "User Testing"],
        description: "I developed and launched an accessible interactive map for a Drexel research lab backed by the Pentagon and Department of Defense. The final Sitecore-based site replaced an inaccessible prototype, showcasing advanced e-textile technologies to partners and defense stakeholders.",
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
        problemSpace: {
            text: "The original interactive map prototype was not accessible to screen readers or keyboard navigation, limiting usability and reach. Built in Figma, it also suffered from performance issues due to disorganized layers and oversized assets. With a small team, tight timeline, and limited budget, I needed to transform the prototype into an accessible, maintainable web experience without sacrificing interactivity or visual quality.",
            highlight: ["limiting usability and reach", "performance issues", "without sacrificing interactivity"],
        },
        approach: {
            text: "Rather than rebuild from scratch, I explored ways to preserve the visual storytelling of the original Figma prototype while addressing its performance and accessibility shortcomings. I conducted a prototype audit to pinpoint inefficiencies, then tested performance improvements. I assessed accessibility risks, researched compliant design patterns, and consulted with stakeholders to understand user needs. Through user testing and a risk assessment framework, I identified pain points which informed the final launch.",
            highlight: ["preserve the visual", "storytelling", "prototype audit", "tested performance", "user testing", "risk assessment"],
        },
        solution: {
            text: "I delivered a hybrid experience: a fully accessible, WCAG-compliant website built in Sitecore, plus a link to the original Figma prototype for power users seeking an immersive experience. I translated complex interactions into static, navigable subpages and repurposed video assets to explain equipment and workflows more clearly. Visual continuity was preserved by reusing graphics and color from the prototype.",
            highlight: ["WCAG-compliant", "website", "power users", "static, navigable subpages"],
        },
        outcome: "Prototype speed improved by 60% after Figma optimization. The final site provided accessible, engaging access to the Center’s capabilities to a broader audience.",
        externalLinks: [
                { label: "Live Site", url: "https://drexel.edu/functional-fabrics/about/virtual-tour/" },
                { label: "Prototype", url: "https://www.figma.com/proto/5kM4mNOb4njhXKD6ZVL5R1/Interactive-Map?node-id=31-411&scaling=contain&page-id=0%3A1&starting-point-node-id=31%3A375" },
            ],
        processSections: [
            {
                title: "Prototype Analysis",
                bulletPoints: [
                    {
                        text: "I started by digging into the original Figma file to understand what was already working and what wasn’t.",
                        highlight: [""]
                    },
                    {
                        text: "A lot of issues popped up: slow load times, messy file organization, and even typos throughout.",
                        highlight: ["slow load times, messy file organization,", "typos throughout"]
                    },
                    {
                        text: "It was clear that without cleanup, the prototype would not be sustainable for users or the team.",
                        highlight: ["would not be sustainable"]
                    },
                ],
                imageSrc: "/images/CFF-original.webp",
                imageAlt: "high fidelity wireframes",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
            {
                title: "Prototype Optimization",
                bulletPoints: [
                    {
                        text: "I pinpointed what was slowing things down! Duplicate hidden layers, oversized media, and scattered assets.",
                        highlight: ["Duplicate hidden layers", "oversized media", "scattered assets"]
                    },
                    {
                        text: "I introduced clear layer naming conventions, utilizing Sections to organize the file into logical, scannable project areas.",
                        highlight: ["clear layer naming conventions", "utilizing Sections"]
                    },
                    {
                        text: "I built modular Components with clear labels to streamline updates and reduce file clutter, helping the prototype load faster and animations run smoothly.",
                        highlight: ["load faster", "animations run", "smoothly"]
                    },
                    {
                        text: "I converted assets into Variants and grouped them into interaction states to reduce duplication and ensure smooth animations.",
                        highlight: ["smooth animations"]
                    },
                    {
                        text: "I flattened complex vectors to reduce file size while keeping the visuals sharp and intact.",
                        highlight: ["reduce file size"]
                    },
                    {
                        text: "I also swapped out heavy GIFs with optimized, lightweight versions to improve speed without sacrificing quality.",
                        highlight: ["improve speed"]
                    },
                    {
                        text: "These improvements led to a 60% increase in prototype speed, allowing smoother stakeholder demos and faster team collaboration.",
                        highlight: ["60% increase in prototype speed"]
                    },
                ],
                imageSrc: "/images/cff-layers.webp",
                imageAlt: "high fidelity wireframes",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 2, md: 1 },
                textOrder: { base: 2, md: 1 },
                imageBorder: false
            },
            {
                title: "Inspiration",
                bulletPoints: [
                    {
                        text: "Working on ideas for the site, I drew inspiration of interactive maps from institutions like The Metropolitan Museum of Art and the National Gallery of Art.",
                        highlight: [""]
                    },
                    {
                        text: "These examples helped me see what was possible: creative layouts, thoughtful storytelling, and detailed assets.",
                        highlight: [""]
                    },
                    {
                        text: "They inspired me to approach this project not just as a fix, but as a chance to build something engaging and memorable.",
                        highlight: ["build something engaging and memorable."]
                    },
                ],
                imageSrc: "/images/CFF-inspo.webp",
                imageAlt: "screenshot of the metkids interactive map and national gallery of art virtual tour site",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
            {
                title: "Technology Exploration",
                bulletPoints: [
                    {
                        text: "I explored a few different tools and platforms to figure out what would actually work.",
                        highlight: [""]
                    },
                    {
                        text: "I considered Infogram as a method to get around the structured CMS, and I even tried building a custom prototype in vanilla JavaScript.",
                        highlight: [""]
                    },
                    {
                        text: "In the end, I aligned with the team on using Sitecore. It met accessibility needs and fit into their existing CMS ecosystem.",
                        highlight: [""]
                    },
                ],
                imageSrc: "/images/blank-img.png",
                imageAlt: "blank",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: false
            },
            
            {
                title: "Design Iterations",
                bulletPoints: [ 
                    {
                        text: "Since we already had defined assets and were short on time, I jumped straight into high-fidelity wireframes.",
                        highlight: ["high-fidelity wireframes"]
                    },
                    {
                        text: "I tried to keep the colorful, immersive feeling of the prototype while making it usable in a more static format.",
                        highlight: [""]
                    },
                    {
                        text: "Some features didn’t translate well, like floating buttons, so I worked closely with the Communications Manager to find the right balance between creativity and practicality.",
                        highlight: ["creativity and practicality"]
                    },
                ],
                imageSrc: "/images/CFF-figma.webp",
                imageAlt: "high fidelity wireframes",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 2, md: 1 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
            {
                title: "Asset Designs",
                bulletPoints: [ 
                    {
                        text: "I cleaned up and rebuilt vector graphics in Illustrator to sharpen the look and improve performance.",
                        highlight: [""]
                    },
                    {
                        text: "Wherever I could, I pulled in the brand’s color palette and visual language to keep everything cohesive.",
                        highlight: [""]
                    },
                    {
                        text: "I paid close attention to materials and textures to make sure the visuals reflected real equipment and processes.",
                        highlight: ["reflected real equipment and processes."]
                    },
                ],
                imageSrc: "/images/CFF-assets.webp",
                imageAlt: "example design assets",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: false
            },
            {
                title: "Deployment Process",
                bulletPoints: [ 
                    {
                        text: "Once the design was locked in, I rebuilt the experience directly in Sitecore using their component system.",
                        highlight: [""]
                    },
                    {
                        text: "I edited and embedded video clips, wrote supporting copy, and created clear subpages to replace complex interactions.",
                        highlight: [""]
                    },
                    {
                        text: "It wasn’t just about launching pages, I was attempting to translate a creative concept into something accessible and tangible.",
                        highlight: [""]
                    },
                ],
                imageSrc: "/images/CFF-preview.webp",
                imageAlt: "map desktop screenshot",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 2, md: 1 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
            {
                title: "User Testing",
                bulletPoints: [ 
                    {
                        text: "The Communications Manager and I ran user tests with both stakeholders and students to understand where people got stuck.",
                        highlight: [""]
                    },
                    {
                        text: "A few common problems came up: confusing slideshow labels, hard-to-find links, unclear navigation.",
                        highlight: ["confusing slideshow labels", "hard-to-find links", "unclear navigation"]
                    },
                    {
                        text: "I used a risk assessment matrix to sort out which fixes were most urgent before launch.",
                        highlight: ["most urgent"]
                    },
                ],
                imageSrc: "/images/CFF-risk.webp",
                imageAlt: "risk assessment sheet",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 2, md: 1 },
                textOrder: { base: 2, md: 1 },
                imageBorder: false
            },
            {
                title: "Critical Tasks",
                bulletPoints: [ 
                    {
                        text: "I organized a list of the most critical issues that had to be addressed before launch.",
                        highlight: [""]
                    },
                    {
                        text: "Users were confused by the first slide being “Programming” — we decided to move “Fabrication” forward to better match expectations.",
                        highlight: [""]
                    },
                    {
                        text: "The Figma prototype link was going unnoticed, so I restyled it with clearer text and positioning.",
                        highlight: [""]
                    },
                    {
                        text: "After another round of testing, the flow felt more natural and users found key information faster.",
                        highlight: [""]
                    },
                ],
                imageSrc: "/images/CFF-tasks.webp",
                imageAlt: "selected notes from risk assessment",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: false
            },
            // ... more sections
        ],
        impact: [
            "Improving the visibility of the Center's capabilities supported efforts to secure strategic partnerships and grants in advanced materials and defense tech:",
            [
                "Achieved a 60% increase in prototype performance, enabling smoother demos and faster updates.",
                "Delivered six WCAG-compliant pages in Sitecore that replaced the inaccessible Figma prototype.",
                "Enhanced discoverability and navigation through targeted user testing and refinements."
            ],
            "This project taught me how to translate high-concept design into accessible, efficient deliverables, working independently across design and development while adapting quickly to technical and organizational constraints."
        // ... more outcomes
        ]
    };

    return <CaseStudyTemplate {...caseStudyData} />;
};

export default MapStudy; 