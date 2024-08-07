import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Text,
    Flex,
    Container,
    Divider,
} from '@chakra-ui/react';
import Navbar from './navbar.js';
import CustomTable from './cv-grid.js';
import Footer from './footer.js';
import '../style.css';

const About = () => {
    return (
        <Container maxW="container.xl" py={5}>
            <Flex justify="flex-start">
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="Logo" className="logo"/>
                </Link>
        </Flex>
            <Navbar />
            <Flex direction="column" align="center">
                <Flex direction={{ base: 'column', md: 'row' }} align="center" maxW="55rem" textAlign="left" py={20} mt={10}>
                    <Box flex="1">
                        <img src={`${process.env.PUBLIC_URL}/images/Hartwell-Headshot-4.jpg`} alt="Description" style={{ maxWidth: '70%', height: 'auto', borderRadius: '10px'}} />
                    </Box>
                    <Box flex="2">
                        <Text fontSize="md" fontFamily="'Times Now', serif">
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
            </Flex>
            <Divider borderColor="#422D2D" />
            <CustomTable />
            <Footer />
        </Container>
    );
};

export default About;