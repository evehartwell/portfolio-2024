import React from 'react';
import {
    Box,
    Text,
    Flex,
    Container,
    Heading,
} from '@chakra-ui/react';
import Navbar from './navbar';
import Footer from './footer';

const About = () => {
    return (
        <Container maxW="7xl" py={5} minHeight="100vh" display="flex" flexDirection="column">
            <Navbar />
            <Flex direction="column" align="left" flex="1">
                <Box h="100%" flex="2" m={{ base: '10', md: '40'}} textAlign="left">
                    <Heading fontFamily="accent" size="xl" fontWeight="400">Eve Hartwell</Heading>
                    <Text mt={5}>
                        I’m a tech enthusiast, artist, and cinephile with a passion for creating user-centered experiences. 
                        With a degree in Information Systems, I blend functionality with creativity to design solutions that make life easier for users and development teams alike. 
                        By day, I'm crafting intuitive interfaces and streamlined systems for local startups. By night, you'll find me tinkering with custom PC builds, building mechanical keyboards, or updating my Notion movie database. 
                        Currently, I'm on the lookout for my next adventure in the UX field, so let's connect and create something special.
                    </Text>
                </Box>
            </Flex>
            <Footer />
        </Container>
    );
};

export default About;