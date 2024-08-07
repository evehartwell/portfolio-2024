import React from 'react';
import {
    Box,
    Text,
    Flex,
    Button,
    Container,
    Tag,
} from '@chakra-ui/react';
import Navbar from './navbar.js';
import Footer from './footer.js';
import '../style.css';

const ModesensStudy = () => {
    return (
        <Container maxW="container.xl" textTransform="uppercase" py={5}>
            {/* Navbar */}
            <Flex justify="flex-start">
                <img src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="Logo" className="logo" />
            </Flex>
            <Navbar />

            <Flex direction="column" align="center">
                {/* Title and Description */}
                <Box maxW="50rem" textAlign="center" p={10} pt={20}>
                    <Text fontSize="5xl" fontWeight="regular">Modesens App Redesign</Text>
                    <Text mt={5}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ultricies ex. Aliquam convallis scelerisque lacus consequat bibendum.
                    </Text> 
                </Box>
                {/* Cover Image */} 
                <Flex justify="space-between" mt={10}>
                    <Box w="full" h="700px" mb={10} position="relative" borderRadius="10px" overflow="hidden">
                        <video src={`/media/modesens-mobile.mp4`} alt="LUXR App" />
                    </Box>
                </Flex>
                {/* Overview */} 
                <Text fontSize="3xl" fontWeight="medium">Project Overview</Text>
                <Flex justify="center" gap={4} mt={4}>
                    <Tag>#app design</Tag>
                    <Tag>#figma</Tag>
                </Flex>
                {/* Client and Deliverables */}
                <Flex justify="space-between" mt={10} p={5}>
                    <Box textAlign="left">
                        <Text fontSize="xl" fontWeight="medium">Problem Space</Text>
                        <Text textTransform="lowercase" mt={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Box>
                    <Box textAlign="left">
                        <Text fontSize="xl" fontWeight="medium">Deliverables</Text>
                        <Text textTransform="lowercase" mt={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Box>
                </Flex> 
                
            </Flex>
            <Footer />
        </Container>
    );
};

export default ModesensStudy;
