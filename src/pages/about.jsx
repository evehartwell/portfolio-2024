import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Text,
    Flex,
    Container,
} from '@chakra-ui/react';
import Navbar from './navbar';
import Footer from './footer';

const About = () => {
    return (
        <Container maxW="container.xl" py={5}>
            <Navbar />
            <Flex direction="column" align="center">
                <Flex direction={{ base: 'column', md: 'row' }} align="center" w="full" textAlign="left" p={10} mt={10}>
                    <Box flex="2">
                        <Text>
                            With a degree in Information Systems, my expertise lies in functionality and a comprehensive understanding of system management and design. 
                            My background in human-computer interaction enables me to create user-centered experiences that enhance accessibility and ease of use for 
                            users while reducing stress for development teams.
                        </Text>
                        <Text mt={3}>
                            My focus areas include designing solutions for e-commerce, fostering community building, and improving information literacy to empower individuals.
                            Currently, I work for a local startup in the governance sector and am seeking my next opportunity in the UX field.
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Footer />
        </Container>
    );
};

export default About;