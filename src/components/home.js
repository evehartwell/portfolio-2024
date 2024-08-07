import React from 'react';
import {
    Box,
    Text,
    Flex,
    Container,
    Divider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ProjectBox from "./projectbox.js";
import Navbar from './navbar.js';
import Footer from './footer.js';
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
        link: "/",
    },
    {
        title: "Center For Functional Fabrics",
        imageSrc: "/images/CFF-preview.png",
        link: "/",
    },
    {
        title: "LeBow College of Business",
        imageSrc: "/images/lebow-preview.png",
        link: "/",
    },
    {
        title: "PA Central Credit Union",
        imageSrc: "/images/bank-preview.png",
        link: "/",
    },
];

const Homepage = () => {
    return (
        <Container maxW="container.xl" textTransform="uppercase" py={5}>
            <Flex justify="flex-start">
                <img src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="Logo" className="logo" />
            </Flex>
            <Navbar />
            <Flex direction="column" align="center">
            {/* Header */}
                <Box maxW="50rem" textAlign="center" py={20} mt={10}>
                    <Text fontFamily="'Old London', serif" textTransform="capitalize" fontSize="5xl" fontWeight="medium">Hartwell</Text>
                    <Text mt={8}>
                        I’m a UX Designer & Web Developer based in Philadelphia, passionate about HCI, fashion, and building meaningful communities online. 
                    </Text>
                </Box>

            {/* portfolio */}
                <Box mt={10} w="full">
                    <Text fontSize="3xl" fontWeight="medium" mb={5}>My Work <Divider borderColor="#422D2D" /></Text>  
            {/* most recent */}
                <Link to={projects[0].link}> 
                    <Box w="full" h="700px" mb={10} position="relative" borderRadius="10px" overflow="hidden">
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

            {/* previous projects */}
                    <Flex wrap="wrap" gap={5} justify="space-between">
                        {projects.slice(1).map((project, index) => (
                            <ProjectBox key={index} title={project.title} imageSrc={project.imageSrc} link={project.link} />
                        ))}
                    </Flex>
                </Box> 
            </Flex>
            <Footer />
        </Container>
    );
};

export default Homepage;
