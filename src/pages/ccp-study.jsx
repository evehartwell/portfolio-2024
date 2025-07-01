import CaseStudyTemplate from '../components/caseTemplate.jsx';

const CodeStudy = () => {
    const caseStudyData = {
        title: "Code and Coffee Philadelphia",
        tags: ["GitHub", "Discord", "Figma", "Tech Education", "Accessibility", "Facilitation"],
        description: "I co-founded a beginner-friendly tech community in Philadelphia aimed at supporting new developers and designers. Alongside a small team, I helped create inclusive in-person and online spaces where people could learn, build, and connect.",
        coverMedia: "/images/ccp-mock-2.webp",
        context: {
            team: "Two Software Engineers and a UX Designer",
            role: "UX Designer, Developer, Organizer",
        },
        problemSpace: {
            text: "Philadelphia lacked a free, inclusive tech community that consistently supported both early-career technologists and senior developers seeking reconnection. Existing events often felt intimidating, disorganized, or inaccessible, with no centralized digital resource to help newcomers navigate the local scene or feel a sense of belonging.",
            highlight: ["intimidating, disorganized, or", "inaccessible"],
        },
        approach: {
            text: "I gathered feedback through in-person conversations, contextual inquiry, and participatory feedback in our Discord's #venue-hunt channel. By asking members about their goals and experience levels, I uncovered key motivators around access, consistency, and community. These insights informed our event structure, site content, and tone. I collaborated with co-organizers to create wireframes and iterated based on live feedback to make participation easy and welcoming.",
            highlight: ["in-person conversations, contextual inquiry,", "participatory feedback", "access, consistency, and community", "inaccessible"],
        },
        solution:  {
            text: "We created a recurring event series supported by a mobile-friendly website, Discord server, and global sponsorships to offer a low-pressure, accessible space for programmers. By combining in-person gatherings with digital support, we made participation easy, consistent, and community-driven.",
            highlight: ["recurring event series", "mobile-friendly", "website", "Discord server", "global sponsorships"],
        },
        outcome: "Grew to 1,700+ members, 60+ weekly attendees, and 200+ active Discord users in one year — all with zero marketing budget and support from nine sponsors.",
        externalLinks: [
                { label: "Live Site", url: "https://www.phillycodes.rsvp" },
                { label: "Repositories", url: "https://github.com/Coffee-Code-Philly-Accelerator"},
                { label: "Figma", url: "https://www.figma.com/design/g1ysjlGhusBeAHyExzmQ2Q/Code---Coffee-Philly---Website-Branding?node-id=6-2&t=uYxwTyTpDu29CX6e-1"}
            ],
        processSections: [
            {
                title: "Community Infrastructure",
                bulletPoints: [
                    "Launched a 200+ member Discord for ongoing support, resources, and announcements.",
                    "Built static brochure style site to centralize RSVPs, community projects, photos, and event details.",
                    "Created weekly Meetup event series leveraging partnership with Code & Coffee to manage event costs.",
                    "Partnered with Comcast LiftLabs for a multi-day hackathon event alongside six other sponsors.",
                ],
                imageSrc: "/images/ccp-discord.webp",
                imageAlt: "screenshot of discord invite",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 2, md: 1 },
                textOrder: { base: 1, md: 2 },
                imageBorder: true
            },
            {
                title: "Growing Attendance",
                bulletPoints: [
                    {
                        text: "Through in-person feedback, we tried different methods to improve member entry in a highly secured building.",
                    },
                    {
                        text: "We tested entry signage with live phone support for venue access which resulted in an overwhelming amount of phone calls and some miscommunication.",
                    },
                    {
                        text: "We discovered that using a Discord bot with a live QR code for contact-less entry, and a real-time help channel led to a 140% increase in return attendees.",
                        highlight: ["140% increase"]
                    },
                ],
                imageSrc: "/images/ccp-sign.webp",
                imageAlt: "event signage on door",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
            {
                title: "Key Insights",
                bulletPoints: [
                    "Environment matters: Seemingly small details (locked doors, large crowds) made a huge difference in whether someone felt safe to show up.",
                    "Informality builds trust: Friendly messaging and low-pressure formats helped retain shy and first-time attendees.",
                    "Consistency = belonging: Regular events and clear communication led to stronger word-of-mouth and return rates.",
                ],
                imageSrc: "/images/ccp-venue.webp",
                imageAlt: "group of people coding at the yard coworking space",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
            {
                title: "Visual Identity",
                bulletPoints: [
                    "Inspired by our partners at Socratica, we wanted our site and branding to reflect academia and café notions. Simple, yet playful, I iterated on a calm and welcoming visual identity with academic serif type, handwritten script, and muted, warm colors.",
                    "I iterated on logo ideas, incorporating retro tech, coding references, and coffee. I created a concept of a retro computer with our title inside the screen. The team decided that the title wasn't super legible so I pivoted to a symbolistic approach, prioritizing a simple coffee design with code brackets. We had a pixel artist refine the design.",
                ],    
                imageSrc: "/images/ccp-brand.webp",
                imageAlt: "code & coffee brand sheet",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 1, md: 1 },
                imageBorder: true
            },
            {
                title: "Details",
                bulletPoints: [
                    "I spent time working on hand-drawn digital assets to support the brand, illustrated in Figma.",
                ],                
                imageSrc: "/images/ccp-sketch.webp",
                imageAlt: "brand sketches",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: false
            },
            {
                title: "Site Iterations",
                bulletPoints: [
                    "The site had a few clear objectives including event information, CTA's, photography, and community projects.",
                    "I started with a low fidelity wireframe prioritizing that information while slowly tightening up the layout with feedback from the software engineers.",
                    "The final design, as seen on the live site, reflected our goal of adding playfulness to a minimalist foundation. The addition of photography of our live event added color and dimension to the site.",
                ],                
                imageSrc: "/images/ccp-iterating.webp",
                imageAlt: "screenshot of site wireframes",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
        ],
        impact: [
            "This initiative helped establish a new scalable, low-barrier tech community in Philadelphia:",
            [
                "Increased weekly attendance by over 140% after improving access systems", 
                "Built sustainable infrastructure through repeatable event models and modular digital tools",
                "Strengthened trust and retention by centering inclusive design decisions"
            ],
            "By combining in-person gatherings with digital support, we made participation easy, consistent, and community-driven.",
            "Additionally, this project reinforced my ability to contribute strategic design leadership within early-stage, community-driven products!"
        ]
    };

    return <CaseStudyTemplate {...caseStudyData} />;
};

export default CodeStudy;