import React from 'react';
import CaseStudyTemplate from '../components/caseTemplate';

const BankStudy = () => {
    const caseStudyData = {
        title: "PA Central Federal Credit Union",
        tags: ["figma", "prototyping"],
        description: "I redesigned the PA Central Federal Credit Union website to improve accessibility, streamline the information architecture, and enhance the overall user experience, especially for an older audience.",
        coverMedia: "/images/bank-preview.png",
        context: {
            requirements: [
                {
                    title: "Website Redesign",
                    description: "Redesign a website to improve usability and clarity, by comparing the original site with the new version and addressing identified issues. The redesign must include detailed prototypes and adhere to atomic design principles, with a focus on consistency and user-centered design."
                },
                {
                    title: "Screen Sizing",
                    description: "Pages clearly delienating and seperating three screen prototypes (Desktop, Tablet, Mobile)."
                },
                {
                    title: "Atomic Method",
                    description: "A Page designated for the Atomic Method designating colors, type, styles, components, etc."
                },
                {
                    title: "Naming Conventions",
                    description: "A minimum of eight different frames, each named, per screen prototype (e.g. Desktop - Homepage, Desktop - Store, Desktop - Product, Desktop - Shopping Cart, Desktop - Checkout, Desktop - Confirmation)"
                },
                {
                    title: "Microinteractions",
                    description: "A minimum of six micro-interactions across each screen prototype (i.e. five for Desktop, five for Tablet, five for Mobile)."
                },
                {
                    title: "Consistency",
                    description: "Interactions must remain consistent across frames."
                }
            ]
        },
        problemSpace: "The original PA Central Federal Credit Union website suffered from several issues. The color scheme did not meet accessibility standards, making it difficult for users with visual impairments to navigate. The site’s structure led to a frustrating user experience with redundant information and complex navigation. Branding elements were not uniform, detracting from the overall visual coherence and professionalism of the site. Text was often difficult to read due to poor contrast and font choices.",
        externalLinks: [
                { label: "Prototype", url: "https://www.figma.com/proto/Mwu0v4axyfkveqMP1SusEE/IDM-212?page-id=264%3A26&node-id=267-745&viewport=682%2C365%2C0.07&t=PZrfDCEkpkwjNJCO-1&scaling=scale-down&content-scaling=fixed" },
            ],
        processSections: [
        {
            title: "Branding",
            content: "The original bank faced severe accessibility issues and poor branding. I crafted a complementary and accessible color palette to enhance readability and visual appeal. I also designed a simple, evergreen logo that reflects the credit union’s values while modernizing its brand image.",
            imageSrc: "/images/bank-style.png",
            imageAlt: "screenshots of original bank page",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: true
        },
        {
            content: "Original pages of the credit union.",
            imageSrc: "/images/bank-original.png",
            imageAlt: "screenshots of original bank page",
            direction: { base: 'column', md: 'column' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 1, md: 2 },
            imageBorder: true
        },
        {
            title: "User Persona",
            content: "The user persona, representing a retired professional with limited tech familiarity, played a crucial role in shaping my design decisions. This persona's need for readable information, accessible UI, and straightforward navigation guided every step of the redesign. I developed wireframes and prototypes with these requirements in mind, and usability testing confirmed that the design met their expectations. By focusing on these needs, I created a more intuitive and user-friendly website that truly resonated with the target audience.",
            imageSrc: "/images/bank-persona.png",
            imageAlt: "user persona document",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: true
        },
        {
            title: "Information Architecture",
            content: "I reorganized the website's content to reduce redundancy and streamline navigation. Optimizing the content hierarchy made key information more accessible, reducing the number of clicks needed to reach important resources.",
            imageSrc: "images/bank-ia.png",
            imageAlt: "old and new sitemap",
            direction: { base: 'column', md: 'column' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: false
        },
        {
            title: "Atomic Design",
            content: "I started with low-fidelity wireframes, focusing on simplicity and usability for an older audience. I researched popular layouts from competitor banks to inform effective design solutions. By designing uniform, reusable components, I ensured consistency and made future updates more efficient. Interactive prototypes helped visualize user interactions and workflows, allowing for iterative testing and refinement. I also established a comprehensive design library to maintain consistency in fonts, colors, and accessibility standards.",
            imageSrc: "/images/bank-figma.png",
            imageAlt: "figma design library",
            direction: { base: 'column', md: 'column' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 }
        },
        {
            title: "Mobile Design Expansion",
            content: "I made sure the design was responsive and scalable across different devices, including tablets and smartphones. I created a usable and intuitive dashboard and banking interface, optimizing for smaller screens while maintaining functionality and ease of use.",
            imageSrc: "/images/bank-mobile.png",
            imageAlt: "mobile bank designs",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 }
        },
        {
            title: "Heuristic Evaluation",
            content: "I evaluated the redesign using Jakob Nielsen’s 10 Usability Heuristics, focusing on system status visibility, user control, consistency, error prevention, and flexibility. Usability testing with representative users provided valuable insights into their interactions and highlighted areas for improvement. This process was key to refining the website’s design, making it more efficient and user-friendly.",
            imageSrc: "/images/bank-eval.png",
            imageAlt: "radar chart evaluating original vs. new design",
            direction: { base: 'column', md: 'column' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 }
        },
        // ... more sections
        ],
        outcomes: [
            "The redesigned website offers an enhanced user experience, with key information more accessible and visual clarity improved. The updated design aligns with modern accessibility standards, and the improvements were reflected in a better heuristic evaluation during user testing.",
        // ... more outcomes
        ]
    };

    return <CaseStudyTemplate {...caseStudyData} />;
};

export default BankStudy;