import CaseStudyTemplate from '../components/caseTemplate';

const LeBowStudy = () => {
    const caseStudyData = {
        title: "LeBow College of Business",
        tags: ["UI Design", "Drupal", "Brand Research"],
        description: "I collaborated with LeBow College of Business’s marketing and design teams to lead key UX and brand updates during a major website redesign. My focus included improving site usability, refining content structure, enhancing brand consistency, and designing scalable components within a new Drupal-based system.",
        coverMedia: "/images/lebow-preview.webp",
        context: {
            team: "Lead Web Designer, Marketing Team, Development Team ",
            role: "UX Designer, Web Content Assistant",
        },
        problemSpace: {
            text: "LeBow’s site was outdated, inconsistent with Drexel’s new branding, and difficult to navigate — especially between the School of Economics and the rest of the business college. Confusing architecture, outdated Drupal components, and a lack of clear departmental identity limited both performance and user engagement.",
            highlight: ["outdated", "inconsistent", "confusing architecture", "lack of clear departmental identity"]
        },
        approach: { 
            text: "I began with a UX audit to refine the site’s information architecture, followed by peer research to assess how other institutions structured and branded their departments. I contributed to focus group testing for copy, design, and imagery, and used those insights to guide wireframes and UI design in Figma. These efforts shaped both the broader site redesign and a more distinct, enrollment-focused experience for the School of Economics.",
            highlight: ["UX audit", "peer research", "focus group", "UI design"]
        },
        solution: {
            text: "We launched a redesigned site with a modular frontend built on the Drupal CMS, enabling easier updates and scalable design. A restructured information architecture to streamline navigation and reduce redundancy. A new School of Economics page with distinct visual identity and enrollment-driven content. A university-wide brand campaign with updated visuals, messaging, and advertising assets across digital and print platforms.",
            highlight: ["modular frontend built", "restructured", "information architecture", "new School of Economics page", "university-wide brand campaign"]
        },
        outcome: "Resulted in a 25–30% increase in site engagement by Fall 2022 — with improved time on page, clearer information flow for prospective grad students, and a 20%+ rise in MBA acceptance volume.",
        externalLinks: [
                { label: "Live Site", url: "https://www.lebow.drexel.edu/" },
            ],
        processSections: [
            {
                title: "Ad Research",
                bulletPoints: [
                    {
                        text: "I conducted brand audits of peer institutions to understand how business schools position themselves within university-wide branding.",
                        highlight: ["brand audits of peer institutions"]
                    },
                    {
                        text: "I compared digital ads and messaging strategies across competing colleges to spot industry trends and gaps.",
                        highlight: ["messaging strategies"]
                    },
                    {
                        text: "These insights helped the marketing team reposition LeBow’s identity within Drexel’s broader redesign.",
                        highlight: ["reposition LeBow’s identity"]
                    },
                ],
                imageSrc: "/images/lebow-research.webp",
                imageAlt: "ad research document",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 2, md: 1 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
            {
                title: "New Brand Campaign",
                bulletPoints: [
                    {
                        text: "I helped the marketing team develop campaign messaging targeted at prospective students, alumni, and industry partners.",
                        highlight: ["targeted at", "prospective students, alumni, and industry partners."]
                    },
                    {
                        text: "I supported crafting narratives around student outcomes, impact stories, and career pathways.",
                        highlight: ["impact stories", "career pathways"]
                    },
                    {
                        text: "Throughout, we ensured the brand language connected emotionally and reflected the college’s core values.",
                        highlight: ["emotionally", "core values"]
                    },
                ],
                imageSrc: "/images/lebow-ads.webp",
                imageAlt: "example of lebow ad design",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: false
            },
            {
                title: "Focus Groups",
                bulletPoints: [
                    {
                        text: "I participated in brand testing sessions across multiple media formats including digital, transit ads, and billboards.",
                        highlight: ["digital, transit ads, and billboards"]
                    },
                    {
                        text: "We tested visual styles by isolating variables like typography and layout while keeping copy consistent.",
                    },
                    {
                        text: "I evaluated copy tone, including pronoun usage, themes like collaboration, and headline effectiveness.",
                    },
                    {
                        text: "I also analyzed photography paired with different value propositions to understand what resonated best.",
                    },
                    {
                        text: "These insights helped us refine the campaign’s messaging and visual direction.",
                        highlight: ["refine the campaign’s messaging"]
                    },
                ],
                imageSrc: "/images/lebow-copy.webp",
                imageAlt: "quotes of tested phrases",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: false
            },
            {
                title: "Site Audit",
                bulletPoints: [ 
                    {
                        text: "I conducted a thorough content and UX audit of the legacy site to identify outdated content, broken links, and navigation issues.",
                    },
                    {
                        text: "Based on my findings, the lead designer and I mapped out a revised information architecture prioritizing usability, clarity, and site performance.  ",
                        highlight: ["usability, clarity,", "site", "performance"]
                    },
                    {
                        text: "The audit provided a clear roadmap for cleaning up and restructuring CMS content for better management.",
                    },
                ],
                imageSrc: "/images/lebow-audit.webp",
                imageAlt: "brand research document",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 2, md: 1 },
                textOrder: { base: 1, md: 2 },
                imageBorder: true
            },
            {
                title: "Atomic Design",
                bulletPoints: [
                    "I collaborated closely with the design team to implement atomic design principles for scalability and consistency.",
                    "We developed modular UI components to streamline design and maintain brand cohesion.",
                    "Using Figma, I prototyped flexible layouts and tested responsiveness which was essential for the School of Economics project",
                ],
                imageSrc: "/images/lebow-atomic.webp",
                imageAlt: "atomic design components",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
            {
                title: "The School of Economics Project",
                bulletPoints: [
                    "Original page layout:"
                ],
                imageSrc: "/images/lebow-econ-orig2.webp",
                imageAlt: "original school of economics page",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
            {
                title: "UX Research",
                bulletPoints: [ 
                    "I researched how competing institutions structured their departmental pages to identify common pitfalls.",
                    "From this, I extracted best practices in layout, tone, and storytelling tailored to prospective students.",
                ],
                imageSrc: "/images/lebow-econ.webp",
                imageAlt: "desktop high fidelity wireframes",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 2, md: 1 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
            {
                title: "Site Analysis & Content",
                bulletPoints: [
                    "Working with the lead web designer, we annotated the original School of Economics page with updated content and messaging ideas.",
                    "I highlighted areas lacking clarity, hierarchy, and engagement potential.",
                    "These annotations included specific content improvements like clear CTAs and relevant metrics to better address prospective student needs.",
                ],
                imageSrc: "/images/lebow-econ-orig.webp",
                imageAlt: "school of econ wireframe",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
            {
                title: "Wireframing",
                bulletPoints: [
                    "I designed low-fidelity wireframes in Figma focused on improving content hierarchy and visual flow.",
                    "I emphasized clear headings, card details, and metrics tailored to prospective student goals.",
                    "I iterated the layout based on feedback to increase clarity and encourage enrollment.",
                    "This wireframe work laid the foundation for high-fidelity designs.",
                ],
                imageSrc: "/images/lebow-lofi.webp",
                imageAlt: "school of econ wireframe",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 2, md: 1 },
                textOrder: { base: 2, md: 1 },
                imageBorder: false
            },
            {
                title: "UI Design",
                bulletPoints: [
                    "I created high-fidelity designs in Figma using our modular component system, with input from the lead designer.",
                    "I selected imagery from Getty Images and typography choices that reinforced the School of Economics’ identity.",
                    "The final designs improved visual hierarchy, accessibility, and alignment with LeBow’s overall branding.",
                ],
                imageSrc: "/images/lebow-econ-new.webp",
                imageAlt: "high fidelity school of econ page",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 2, md: 1 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
        ],
        impact: [
            [
                "Navigation improved and visual clutter was reduced across key content pages.",
                "Departments gained clearer separation through visual and structural changes.",
                "Prospective student engagement increased by aligning content with enrollment goals.",
                "he redesign supported a 25–30% rise in site engagement and a 20%+ increase in MBA acceptance volume by Fall 2022."
            ],
            "This project strengthened my ability to collaborate across teams, navigate technical and brand constraints, and advocate for user-centered design that delivers measurable results."
        // ... more outcomes
        ]
    };

    return <CaseStudyTemplate {...caseStudyData} />;
};

export default LeBowStudy;