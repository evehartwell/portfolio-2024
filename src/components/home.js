import React from 'react';
import {
    Box,
    Text,
    Flex,
    Button,
    Container,
    Divider,
    Stack,
} from '@chakra-ui/react';
import ProjectBox from "./portfolio.js";
import '../style.css';

const projects = [
    {
        title: "Modesens",
        imageSrc: "/images/LUXR-preview.png",
    },
    {
        title: "Black Hippie Art",
        imageSrc: "/images/BHA-preview.png",
    },
    {
        title: "Center For Functional Fabrics",
        imageSrc: "/images/CFF-preview.png",
    },
    {
        title: "LeBow College of Business",
        imageSrc: "/images/lebow-preview.png",
    },
    {
        title: "PA Central Credit Union",
        imageSrc: "/images/bank-preview.png",
    },
];

const Homepage = () => {
    return (
        <Container maxW="container.xl" py={5}>
            <Flex direction="column" align="center">
            {/* Navbar */}
                <Flex justify="space-between" w="full" py={5}>
                    <Text fontSize="xl" fontWeight="bold">Logo</Text>
                    <Flex gap={4}>
                        <Button variant="ghost">Work</Button>
                        <Button variant="ghost">About</Button>
                        <Button variant="ghost">Contact</Button>
                    </Flex>
                </Flex>

            {/* Header */}
                <Box maxW="50rem" textAlign="center" py={20} mt={10}>
                    <Text fontSize="5xl" fontWeight="medium">Hartwell</Text>
                    <Text mt={8}>
                        I’m a UX Designer based in Philadelphia, passionate about HCI, fashion, and building meaningful communities online. 
                    </Text>
                </Box>

            {/* portfolio */}
                <Box mt={10} w="full">
                    <Text fontSize="3xl" fontWeight="medium" mb={5}>My Work <Divider borderColor="#422D2D" /></Text>  
            {/* most recent */}
                <Box w="full" h="700px" mb={10} position="relative" borderRadius="10px" overflow="hidden">
                    <Box
                        as="img"
                        src={projects[0].imageSrc}
                        alt={projects[0].title}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                    <Box className="project-text-overlay">
                        <Text className="project-text">{projects[0].title}</Text>
                    </Box>
                </Box>

            {/* previous projects */}
                    <Flex wrap="wrap" gap={5} justify="space-between">
                        {projects.slice(1).map((project, index) => (
                            <ProjectBox key={index} title={project.title} imageSrc={project.imageSrc} />
                        ))}
                    </Flex>
                </Box> 
            </Flex>
        </Container>
    );
};

export default Homepage;
