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
            requirements: [
                {
                    title: "Redesign",
                    description: "Choose an app to redesign from start to finish. Emphasize interaction design using a Figma animation plug-in. Focus on a specific user task, identify inefficiencies, and streamline the process."
                },
                {
                    title: "Microinteractions",
                    description: "Incorporate intuitive triggers, rules, feedback, and loops to enhance user engagement. Design interactions to ensure minimal complexity and clear feedback on user actions."
                },
                {
                    title: "UI Animation",
                    description: "Apply principles from Material Design to create smooth and accessible animations, balancing functionality and aesthetic appeal while considering user comfort."
                },
                {
                    title: "Wireflows",
                    description: "Create wireframes with flowchart-like representations to document user interactions through common tasks, improving task flow clarity."
                },
                {
                    title: "Interaction Guides",
                    description: "Develop storyboards for microinteractions, using keyframes to communicate design ideas and ensure consistency across the app."
                },
                {
                    title: "Rebranding",
                    description: "Update chosen app's visual identity."
                }
            ]
        },
        problemSpace: "The Modesens app faced challenges that negatively impacted the user experience. One of the primary issues was a bloated user task flow, where excessive and poorly organized information, a cluttered UI, and small text made interactions frustrating. Conflicting mental models, inconsistent menus, and unresponsive buttons further disrupted navigation, leading to confusion and a generally poor user experience.",
        externalLinks: [
            { label: "Live Site", url: "/" },
            { label: "Prototype", url: "/" },
        ],
        processSections: [
            {
                title: "User Task Flow",
                content: "To begin, I mapped out the steps users would take to set an alert within the app. By detailing every stage of the user's journey, from the landing page to browsing products and adding an item to their wishlist, I identified the pages and interactions that distracted from the main task and brainstormed possible interactions that could occur between steps.",
                imageSrc: "/images/LUXR-tasks.png",
                imageAlt: "original app taskflow",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 2, md: 1 },
                textOrder: { base: 1, md: 2 },
                imageBorder: true
            },
            {
                imageSrc: "/images/LUXR-taskflow.png",
                imageAlt: "zoomed in user task flow",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 1, md: 2 },
                imageBorder: false
            },
            {
                title: "Wireframes",
                content: "With the task flow established, I moved on to wireframes, where I sketched the app’s basic layout and functionality. I integrated the task flow into the wireframes to design an interface that was focused on setting an alert. My goal was to create an experience that felt intuitive for users while also meeting the standards set by competitor apps.",
                imageSrc: "/images/LUXR-sketches-2.png",
                imageAlt: "New wireframes",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
            {
                imageSrc: "/images/LUXR-wires.png",
                imageAlt: "zoomed in user task flow",
                direction: { base: 'column', md: 'column' },
                imageBorder: true
            },
            {
                title: "Rebranding & New UI",
                content: "Rebranding was a crucial part of this project. I began by gathering inspiration and defining a new visual identity that matched the app’s goals and user needs. I updated the color palette, typography, and logo to give the app a fresh and modern look. During the rebranding process, I prioritized usability to ensure that the new design elements were not only visually appealing but also resonated with the target audience, making their experience more engaging and memorable. After rebranding, I developed high-fidelity UI designs, turning the wireframes into detailed and polished screens. I chose colors, fonts, and images with great care, making sure they contributed to a cohesive and functional interface. I worked hard to maintain consistency across all screens and interactions, ensuring that every element enhanced the overall user experience.",
                imageSrc: "/images/LUXR-IXFlow.png",
                imageAlt: "Image 2 description",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: false
            },
            {
                title: "IXFlow & Interaction Guides",
                content: "For the interaction flow of the app, I mapped out how users would navigate through the app and respond to triggers like button clicks or swiping motions. I created interaction guides that detailed each step of the user journey. These guides were essential for visualizing and documenting how users would interact with the app. My goal was to craft a smooth and intuitive experience that aligned with user expectations. This documentation also helped me implement the animations in Jitter.",
                imageSrc: "/images/LUXR-guides.png",
                imageAlt: "Image 2 description",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
        // ... more sections
        ],
        outcomes: [
        "This project taught me the importance of microinteraction in creating a unique tone and voice of a digital experience. Before this project, I hadn't taken much consideration of motion in my design process until now but I realized this was a key component to building a unique app or web interface. Taking into consideration timing, movements, and material design was challenging but it showed me what it takes to create a unique and memorable user experience.",
        "The redesigned Modesens app offers a more intuitive and engaging shopping experience. By addressing the initial problems and focusing on user needs, I was able to streamline the app's interface with a concise task flow, improved microinteractions, and thoughtful UI animations.",
        // ... more outcomes
        ]
    };

    return <CaseStudyTemplate {...caseStudyData} />;
};

export default ModesensTest;