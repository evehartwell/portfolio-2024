import React from 'react';
import CaseStudyTemplate from '../components/caseTemplate';

const LeBowStudy = () => {
    const caseStudyData = {
        title: "LeBow College of Business",
        tags: ["UI Design", "Drupal", "Brand Research"],
        description: "I collaborated with the LeBow College of Business's marketing team to implement their rebrand and website redesign, focusing on improving user experience, enhancing brand consistency, and updating the Drupal backend system.",
        coverMedia: "/images/lebow-preview.png",
        context: {
            team: "Lead Web Designer, Marketing Team, Development Team ",
            role: "UX Designer, Web Content Assistant",
        },
        problemSpace: "The existing LeBow College of Business website faced challenges amid Drexel University's university-wide digital redesign, which aimed to unify and modernize the online presence across all colleges. The site suffered from outdated design elements, inconsistent branding, and complex information formatting that blurred the distinct identity of the School of Economics compared to the School of Business. Additionally, the outdated Drupal version hindered performance and functionality.",
        externalLinks: [
                { label: "Live Site", url: "https://www.lebow.drexel.edu/" },
            ],
        processSections: [
        {
            title: "Ad Research",
            content: "I conducted research on competing colleges and analyzed their university-wide ads vs. business college ads to understand industry trends and benchmark against peer institutions.",
            imageSrc: "/images/lebow-research.png",
            imageAlt: "ad research document",
            direction: { base: 'column', md: 'column' },
            imageOrder: { base: 2, md: 1 },
            textOrder: { base: 2, md: 1 },
            imageBorder: true
        },
        {
            title: "New Brand Campaign",
            content: "The new ads aimed to include messaging that resonated with the target audience—prospective students, alumni, and industry partners. Inspiring copy is not just about catchy phrases but about connecting on an emotional level and conveying the core values and vision of the college. We emphasized narratives that highlighted success stories, student experiences, and the impact of LeBow’s programs.",
            imageSrc: "/images/lebow-ads.png",
            imageAlt: "example of lebow ad design",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: false
        },
        {
            title: "Focus Groups",
            content: "I participated in a series of focus group tests to evaluate the effectiveness of design, copy, and photography for the brand campaign. The tests aimed to isolate key variables to determine the most impactful combinations across various marketing channels, including digital screens, billboards, and buses. For design, we assessed three distinct styles while keeping copy and imagery consistent, allowing us to benchmark different visual approaches. The copy tests focused on headline options, exploring variations with and without personal pronouns, and different subcopy themes, such as collaboration and empowerment. Photography tests compared images paired with the taglines emphasizing experience and problem-solving. These insights helped refine the campaign’s messaging and visuals to better resonate with the target audience and drive engagement.",
            imageSrc: "/images/lebow-copy.png",
            imageAlt: "quotes of tested phrases",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: false
        },
        {
            title: "Site Audit",
            content: "My first task for the web redesign was tackling what most designers shy away from—a site audit. I systematically reviewed the site’s structure to ensure that content was organized logically and user navigation was intuitive. This involved identifying any outdated or inaccurate information, fixing broken links, correcting typographical errors, and addressing technical issues that impacted the site’s performance. The audit provided a clear roadmap for improving the website's functionality and content accuracy, ensuring a smoother user experience and more reliable site performance.",
            imageSrc: "/images/lebow-audit.png",
            imageAlt: "brand research document",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 2, md: 1 },
            textOrder: { base: 1, md: 2 },
            imageBorder: true
        },
        {
            title: "Atomic Design",
            content: "We embraced atomic design principles to ensure efficiency and consistency across the design system. Collaborating closely with the design team, we brainstormed and iterated on wireframes and design solutions. Using a modular approach, we created scalable and maintainable components, which allowed us to streamline the design process and maintain a cohesive look and feel.",
            imageSrc: "/images/lebow-atomic.png",
            imageAlt: "atomic design components",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: true
        },
        {
            title: "The School of Economics Project",
            content: "My primary focus was redesigning the School of Economics page to distinguish it from the broader LeBow College of Business website. To accomplish this, I conducted UX research on competitor college websites, collaborated with the lead web designer to establish key content, then created low fidelity and high fidelity wireframes.",
            imageSrc: "/images/lebow-econ-orig2.png",
            imageAlt: "original school of economics page",
            direction: { base: 'column', md: 'column' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: true
        },
        {
            title: "UX Research",
            content: "To design an effective and differentiated page for the School of Economics, I first needed a clear understanding of how other institutions approached similar challenges. I conducted extensive UX research on competitor college websites, examining their UI strategies for individual department pages. This allowed me to pinpoint areas where competitors failed to differentiate their departments, often resulting in a generic look and feel. By contrast, I saw effective examples that utilized bold copy, distinct banners, and visual storytelling to create stronger departmental identities. This informed my design direction for creating a more engaging and distinctive user experience for the School of Economics.",
            imageSrc: "/images/lebow-econ.png",
            imageAlt: "desktop high fidelity wireframes",
            direction: { base: 'column', md: 'column' },
            imageOrder: { base: 2, md: 1 },
            textOrder: { base: 2, md: 1 },
            imageBorder: true
        },
        {
            title: "Wireframes",
            content: "Working closely with the lead web designer, we developed wireframes that would clearly define the School of Economics’ content, focusing on key areas that would entice new students. The original layout lacked cohesion and a strong visual identity, so we revamped the wireframes to highlight important information while incorporating copy that addressed prospective students' questions and motivations. The new structure emphasized clarity, with clear calls to action and strategically placed content aimed at encouraging enrollment.",
            imageSrc: "/images/lebow-econ-orig.png",
            imageAlt: "school of econ wireframe",
            direction: { base: 'column', md: 'row' },
            imageOrder: { base: 1, md: 2 },
            textOrder: { base: 2, md: 1 },
            imageBorder: true
        },
        {
            title: "UI Design",
            content: "During the redesign phase, I transformed the wireframes into high-fidelity designs in Figma. I incorporated the library of modular UI elements and selected graphics from Getty Images that adhered to the updated brand guidelines. The design was focused on enhancing information formatting, making complex content more accessible and engaging. By using larger banners and bold headings, I ensured that the School of Economics stood out as a distinct entity within the LeBow website, while still aligning with the overall college branding. The final design improved user navigation, presented detailed content more effectively, and successfully emphasized the School of Economics’ unique identity.",
            imageSrc: "/images/lebow-econ-new.png",
            imageAlt: "high fidelity school of econ page",
            direction: { base: 'column', md: 'column' },
            imageOrder: { base: 2, md: 1 },
            textOrder: { base: 2, md: 1 },
            imageBorder: true
        },
        // ... more sections
        ],
        outcomes: [
            "The team and I successfully redesigned the LeBow website, significantly improving user experience and brand consistency. A new Drupal backend system was implemented and I participated in building and editing over 100 pages. This overhaul not only enhanced the visual and functional aspects of the site but also contributed to a more engaging and user-friendly experience. My efforts led to a more cohesive brand presentation and a streamlined, efficient website that better served its users.",
        // ... more outcomes
        ]
    };

    return <CaseStudyTemplate {...caseStudyData} />;
};

export default LeBowStudy;