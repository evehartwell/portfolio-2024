import React from 'react';
import {
    Box,
    Text,
    Flex,
    Button,
    Container,
    Tag,
    Image,
    List,
    ListItem,
    UnorderedList,
    Link as ChakraLink,
} from '@chakra-ui/react';
import Navbar from './navbar';
import Footer from './footer';
import '../style.css';

const BlackhippieStudy = () => {
    return (
        <Container maxW="container.xl" lineHeight="2rem" py={5}>
            {/* Navbar */}
            <Flex justify="flex-start">
                <img src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="Logo" className="logo" />
            </Flex>
            <Navbar />

            <Flex direction="column" align="center">
                {/* Title and Description */}
                <Box maxW="50rem" textAlign="center" p={10} pt={20}>
                    <Text fontSize="5xl" textTransform="uppercase" fontWeight="regular">Black Hippie Art</Text>
                    <Text textTransform="uppercase" fontWeight="medium" mt={5}>May 2024 &mdash; Current</Text>
                    <Text mt={5}>
                        Enhancing the Black Hippie Art Club’s digital presence and community engagement through social media management, brand updates, and website improvements to better support and connect with the artistic community.
                    </Text> 
                </Box>
                {/* Cover Image */} 
                <Flex justify="space-between" mt={10}>
                    <Box className="case-image" w="full" mb={20} position="relative" borderRadius="10px" overflow="hidden">
                        <video
                            autoPlay
                            muted
                            loop
                            width="100%"
                            height="100%"
                            style={{ objectFit: 'cover' }} 
                        >
                            <source src={`/media/bha-home.mov`} type="video/mp4" /> {/* record figma proto */} 
                            Your browser does not support the video tag.
                        </video>
                    </Box>
                </Flex>
                {/* Overview */} 
                <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Project Overview</Text>
                <Flex justify="center" textTransform="uppercase" gap={4} p={6}>
                    <Tag className="button">#squarespace</Tag>
                    <Tag className="button">#canva</Tag>
                    <Tag className="button">#web design</Tag>
                </Flex>
                {/* Client and Deliverables */}
                <Flex
                    direction={{ base: 'column', md: 'row' }}  
                    wrap="wrap"  
                    justify="space-between"
                    gap={5}
                    mt={10}
                    p={5}
                    w="full"
                >
                    <Box textAlign="left" flex="1" minW="200px" pr={8} mb={{ base: 4, md: 0 }}>
                        <Text fontSize="xl" textTransform="uppercase" fontWeight="medium">About The Client</Text>
                        <Text mt={2}>
                            The Black Hippie Art Club meetup is a BIPOC art meet up based in Philadelphia that hosts sketch clubs, gallery tours, art making workshops and more. 
                            The group is a way for underrepresented artists to get resources needed to be successful in the creative industry while meeting new, local artists in the area.
                        </Text>
                    </Box>
                    <Box textAlign="left" flex="1" minW="200px" pr={8}>
                        <Text fontSize="xl" textTransform="uppercase" fontWeight="medium">Project Goal</Text>
                        <Text mt={2}>
                            Enhance various aspects of Black Hippie Art's digital presence and community engagement to better support underrepresented BIPOC artists in Philadelphia. 
                            This involves improving the accessibility and functionality of the website, optimizing social media strategies, and expanding community outreach. 
                            The aim is to provide valuable resources and foster connections among local artists and advance their success in the creative industry.
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    direction={{ base: 'column', md: 'row' }}  
                    wrap="wrap"  
                    justify="space-between"
                    gap={5}
                    p={5}
                    mb={10}
                    w="full"
                >
                    <Box textAlign="left" flex="1" minW="200px" pr={8}>
                        <Text fontSize="xl" textTransform="uppercase" fontWeight="medium">What I am working on</Text>
                        <Text mt={2}>
                            I am actively managing and enhancing various aspects of Black Hippie Art's digital presence and community engagement.
                        </Text>
                        <UnorderedList fontSize="sm" mt={2} lineHeight="1.5rem">
                            <ListItem mb={2}><b>Social Media and Engagement:</b>  I’m leveraging Meta Business Suite to track growth and interaction, aiming to translate social media success into in-person engagement. I plan to update social media audits, improve Instagram analytics, and schedule posts consistently using Planoly.</ListItem>
                            <ListItem mb={2}><b>Brand and Communication:</b> I’m working on comprehensive brand guideline documentation, updating the color palette, and encouraging donations through UX improvements. I’m also setting up a Discord group, connecting it to meetups, and designing a newsletter.</ListItem>
                            <ListItem mb={2}><b>Resource Management:</b> I am updating and managing various documents, including job lists, resource hubs, and strategies. I’ve identified gaps in the resource hub and plan to address them.</ListItem>
                            <ListItem mb={2}><b>Design and Development:</b> I’ve worked on improving the Black Hippie Art website and am planning to update it with award recognitions. I’ve been involved in various design tasks, including grant flyers and updating the resource hub.</ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
                <Flex justify="center" gap={4} p={6}>
                    <ChakraLink href="https://www.blackhippieart.com" isExternal>
                        <Button className="button" textTransform="uppercase" p={6}>Visit Website</Button>
                    </ChakraLink>
                </Flex>
                {/* Process Stage 1 
                <Flex 
                    direction={{ base: 'column', md: 'row' }}  
                    w="full" 
                    gap={5} 
                    mt={10}
                    justify="space-between"
                >
                    <Box className="case-image">
                        <Image 
                            src="/" 
                            alt="alt" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                    <Box className="case-image">
                        <Image 
                            src="/" 
                            alt="alt" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex> */}
            </Flex>
            {/* button to go next to other proj */}
            <Footer />
        </Container>
    );
};

export default BlackhippieStudy;