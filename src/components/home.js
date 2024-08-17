import React from 'react';
import {
    Box,
    Text,
    Flex,
    Container,
    Divider,
    Grid,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ProjectBox from "./projectbox";
import Navbar from './navbar';
import Footer from './footer';
import '../style.css';


const projects = [
    {
        title: "Modesens",
        imageSrc: "/images/LUXR-preview.png",
        videoSrc: "/media/modesens-mobile-edit.mp4",
        link: "/modesens-study",
    },
    {
        title: "Black Hippie Art",
        imageSrc: "/images/BHA-preview.png",
        link: "/bha-study",
    },
    {
        title: "Center For Functional Fabrics",
        imageSrc: "/images/CFF-prev.png",
        link: "/cff-study",
    },
    {
        title: "LeBow College of Business",
        imageSrc: "/images/lebow-preview.png",
        link: "/lebow-study",
    },
    {
        title: "PA Central Credit Union",
        imageSrc: "/images/bank-preview.png",
        link: "/bank-study",
    },
];

const Homepage = () => {
    return (
        <Container maxW="container.xl" textTransform="uppercase" py={5}>
            <Flex justify="flex-start">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="Logo" className="logo" />
                </Link>
            </Flex>
            <Navbar />
            <Flex direction="column" align="center">
            {/* Header */}
                <Box maxW="50rem" textAlign="center" py={20} mt={10}>
                    <Text fontFamily="'Old London', serif" textTransform="capitalize" fontSize="5xl" fontWeight="medium">Hartwell</Text>
                    <Text mt={8}>
                        I’m a UX designer and web developer in Philadelphia, blending a passion for HCI and fashion to create impactful user-centered experiences. 
                    </Text>
                </Box>

            {/* portfolio */}
                <Box mt={10} w="full">
                    <Text fontSize="3xl" fontWeight="medium" mb={5}>My Work <Divider borderColor="#422D2D" /></Text>  
            {/* most recent */}
                    <Link to={projects[0].link}> 
                        <Box className="project-box" w="full" mb={10} position="relative" borderRadius="10px" overflow="hidden">
                            {projects[0].videoSrc ? (
                                <video  autoPlay
                                muted
                                loop
                                width="100%"
                                height="100%"
                                className="project-media">
                                    <source src={projects[0].videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img src={projects[0].imageSrc} alt={projects[0].title} />
                            )}
                            <Box className="project-text-overlay">
                                <Text className="project-text">{projects[0].title}</Text>
                            </Box>
                        </Box>
                    </Link>
                </Box> 
                {/* previous projects */}
                <Grid 
                    templateColumns={{ base: '1fr', sm: '1fr 1fr', md: 'repeat(2, 1fr)' }} 
                    gap={10}
                >
                    {projects.slice(1).map((project, index) => (
                        <ProjectBox key={index} title={project.title} imageSrc={project.imageSrc} link={project.link} />
                    ))}
                </Grid>
            </Flex>
            <Footer />
        </Container>
    );
};

export default Homepage;
