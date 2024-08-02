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
import Navbar from './navbar.js';
import CustomTable from './cv-grid.js';
import '../style.css';

const About = () => {
    return (
        <Container maxW="container.xl" py={5}>
            <Flex justify="flex-start">
                <img src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="Logo" className="logo" />
            </Flex>
            <Navbar />
            <Flex direction="column" align="center">
            {/* Header */}
                <Box maxW="45rem" textAlign="left" fontSize="sm" py={20} mt={10}>
                    <Text mt={8}>
                        With a degree in Information Systems, my expertise lies in functionality and a comprehensive understanding of system management and design. 
                        My background in human-computer interaction enables me to create user-centered experiences that enhance accessibility and ease of use for 
                        users while reducing stress for development teams.<br />
                        <br />
                        My focus areas include designing solutions for e-commerce, fostering community building, and improving information literacy to empower individuals.<br />
                        <br />
                        Currently, I work for a local startup in the governance sector and am seeking my next opportunity in the UX field.
                    </Text>
                </Box>
            </Flex>
            <Divider borderColor="#422D2D" />
            <CustomTable />
        </Container>
    );
};

export default About;