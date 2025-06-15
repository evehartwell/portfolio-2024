import React from 'react';
import CaseStudyTemplate from '../components/caseTemplate.jsx';

const CodeStudy = () => {
    const caseStudyData = {
        title: "Code and Coffee Philadelphia",
        tags: ["GitHub", "Discord", "Organizing"],
        description: "(In the making) Creating an inclusive, rapidly growing tech meetup and online experience for developers and designers in Philadelphia",
        coverMedia: "/images/ccp-mock-hd.webp",
        context: {
            team: "A collective of software engineers, organizers, nerds, and one designer (me)",
            role: "UX Designer, Developer, Organizer",
        },
        problemSpace: "Philadelphia lacked a beginner-friendly, welcoming, and free tech community space. Especially one that catered to introverted, new, or underrepresented technologists. In-person logistics were often intimidating or unclear, and no central digital resource existed to guide people through the experience.",
        externalLinks: [
                { label: "Live Site", url: "https://www.phillycodes.rsvp" },
                { label: "Repositories", url: "https://github.com/Coffee-Code-Philly-Accelerator"},
                { label: "Figma", url: "https://www.figma.com/design/g1ysjlGhusBeAHyExzmQ2Q/Code---Coffee-Philly---Website-Branding?node-id=6-2&t=uYxwTyTpDu29CX6e-1"}
            ],
        processSections: [
            {
                title: "Venue Experimenting",
                content: "Throughout the growth of the chapter, we explored multiple venues to better understand how physical environments shaped attendee experience. Our first location, Chapterhouse Cafe, was cozy and inviting but suffered from inconsistent seating availability and a hard-to-find location, two issues that made first-time attendance feel risky. As the community grew, we transitioned to Capital One Cafe, which offered a friendly, open atmosphere and bookable rooms. However, those rooms quickly became a competitive resource, making it difficult to reliably secure space. Eventually, we partnered with The Yard, a coworking space that offered greater capacity but introduced new challenges, including multiple locked doors and unclear entry procedures. \n\nThese evolving venue constraints underscored a key insight: seemingly minor logistical barriers like ambiguous access or a too-formal environment, had outsized effects on participation and retention. The ideal space needed to feel low-pressure, intuitive, and easy to enter both physically and socially.",
                imageSrc: "/images/ccp-venue.webp",
                imageAlt: "group of people coding at the yard coworking space",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
            {
                title: "Community Infrastructure",
                content: "Beyond the events themselves, we invested in building digital infrastructure to extend the community’s reach and support system. We launched a 200+ member Discord server with dedicated channels for tech questions, peer support, casual conversation, and resources. Event logistics were streamlined through phillycodes.rsvp, a custom site that consolidated RSVP links and updates, while Meetup remained a key channel for attracting new attendees and tracking interest. \n\nMessaging across platforms was intentionally friendly and informal, reinforcing a brand of inclusivity and approachability. Event cadence was kept consistent to build momentum, while formats emphasized drop-in participation and learning-by-doing, rather than structured talks or competitive hackathons. These systems helped foster a sense of belonging and made it easier for newcomers to engage at their own pace.",
                imageSrc: "/images/ccp-discord.webp",
                imageAlt: "screenshot of discord invite",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 2, md: 1 },
                textOrder: { base: 1, md: 2 },
                imageBorder: true
            },
            {
                title: "User Research Insights",
                content: "To better understand the needs of our community, I conducted lightweight but targeted research through a combination of Discord polls, observational field notes during weekly meetups, and a review of attendance patterns and comments on Meetup. \n\nThese insights revealed consistent behavioral and emotional patterns. Many participants were either new to tech or self-identified as shy and found conventional tech environments intimidating or unwelcoming. Accessibility to venues emerged as a significant barrier: locked doors, unclear signage, and complicated entry instructions caused confusion and deterred some attendees from showing up or returning. Community members expressed a clear preference for a casual, low-pressure environment that allowed for spontaneous participation rather than heavily structured programming. \n\nOver time, I observed that trust and repeat attendance were largely driven by consistency, personal invitations, and positive word-of-mouth, highlighting the need for both reliable logistics and a socially safe atmosphere.",
                imageSrc: "/images/ccp-sign.webp",
                imageAlt: "event signage on door",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
            {
                title: "Smart Venue Access",
                content: "Access and onboarding proved to be critical pain points for new attendees, especially in venues with locked entrances or non-obvious directions. We tested multiple approaches to guide users in. A call-based access system offered direct human support but required constant monitoring and real-time availability. We later introduced a Discord bot that could automatically provide door codes, but adoption was low. Most users were unfamiliar with command-based interfaces and found the system confusing. To reduce friction, we iterated on signage, simplified entry instructions, and set up live support channels in Discord to assist people arriving at events. These improvements helped reduce drop-offs and ensured attendees could enter without feeling stressed or left out.",
                imageSrc: "/images/blank-img.png",
                imageAlt: "blank",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: false
            },
            {
                title: "Building Our Digital Presence",
                content: "We designed and launched a mobile-first website with HTML, CSS, and vanilla Javascript. The site prioritized clarity and ease of use, featuring straightforward event information, integrated RSVP functionality, and community resources. Recognizing that many attendees would be checking details on the go, the responsive layout was optimized for mobile devices, ensuring users could quickly find essential information anytime, anywhere. \n\nI started out with a low-fi wireframe taking inspiration from similar tech community sites. I knew the site needed clear information on who we are, what we do, a call to action, enticing photography, descriptive information and instructions for newcomers, and a project showcase to add a collaborative feel. It felt natural to move in with simple branding and sample photography. I used the first two layouts as a launching pad for creativity. Inspired by niche collectives and portfolio sites, I hand-drew graphics to emphasize our playful, homegrown feel. The final site was agreed upon by all organizers as having the right balance of minimalism, fun, creativity, and relevant information.",
                imageSrc: "/images/ccp-iterating.webp",
                imageAlt: "screenshot of site wireframes",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: true
            },
            {
                title: "Visual Identity",
                content: (
                    <>
                        Our branding drew inspiration from{' '}
                        <a href="https://www.socratica.info/" target="_blank" rel="noopener noreferrer" style={{color: "#686868", textDecoration: 'none'}}>
                            Socratica
                        </a>{' '}and its chapter websites, aiming to evoke an academic yet approachable atmosphere that blended technology with the warm, relaxed vibes of a café. The visual identity used clean typography and a calm color palette to communicate professionalism without intimidation, while subtle design elements referenced community and learning. This balance helped position Code and Coffee as both a welcoming social space and a place for tech exploration, reinforcing the inclusive and thoughtful spirit of the chapter.
                    </>
                ),
                imageSrc: "/images/ccp-brand.webp",
                imageAlt: "code & coffee brand sheet",
                direction: { base: 'column', md: 'row' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 1, md: 1 },
                imageBorder: false
            },
            {
                title: "Partnership & Expansion",
                content: "To support and sustain our growing community, we collaborated with the national Code and Coffee chapter to align on values, share resources, and organize consistent funding for our local events. We also collaborated and drew inspiration from Socratica, whose academic tone and design language influenced both our branding and community approach. During Philly Tech Week, we faciliated a multi-day hackathon and partnered with Comcast LIFT Labs, securing a high-visibility venue that allowed us to host a collaborative, in-person experience for our members. These partnerships played a key role in scaling our impact while maintaining our grassroots, inclusive culture.",
                imageSrc: "/images/ccp-collab.webp",
                imageAlt: "logos for Comcast Lift Labs, Socratica, and Code & Coffee",
                direction: { base: 'column', md: 'column' },
                imageOrder: { base: 1, md: 2 },
                textOrder: { base: 2, md: 1 },
                imageBorder: false
            },
        ],
        outcomes: [
            "Over time, the community grew to over 1,700 members on Meetup, with 15–30 people attending weekly events and over 200 active participants on our Discord server. The consistency and intentionality behind our events cultivated a sense of trust, leading to strong growth and repeat attendance.",
            "The website and Discord server became centralized resources for new and returning members, offering clear access instructions, event details, and community links. Our open-source codebase welcomed community contributions, reinforcing our collaborative ethos.",
            "During Philly Tech Week, we organized a multi-day hackathon in partnership with Comcast LIFT Labs, marking a milestone moment that brought increased visibility to our grassroots efforts and demonstrated the community’s potential to scale while staying inclusive and beginner-friendly.",
        // ... more outcomes
        ]
    };

    return <CaseStudyTemplate {...caseStudyData} />;
};

export default CodeStudy;