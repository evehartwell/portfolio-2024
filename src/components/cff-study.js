import React from 'react';
import {
    Box,
    Text,
    Flex,
    Button,
    Container,
    Tag,
    Image,
    Link as ChakraLink,
} from '@chakra-ui/react';
import Navbar from './navbar.js';
import Footer from './footer.js';
import '../style.css';

const MapStudy = () => {
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
                    <Text fontSize="5xl" fontWeight="regular">Center for Functional Fabrics</Text>
                    <Text mt={5}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ultricies ex. Aliquam convallis scelerisque lacus consequat bibendum.
                    </Text> 
                </Box>
                {/* Cover Image */} 
                <Flex justify="space-between" mt={10}>
                    <Box w="full" mb={20} position="relative" borderRadius="10px" overflow="hidden">
                        <video
                            autoPlay
                            muted
                            loop
                            width="100%"
                            height="100%"
                            style={{ objectFit: 'cover' }} 
                        >
                            <source src={`/media/.mp4`} type="video/mp4" /> {/* record figma proto */} 
                            Your browser does not support the video tag.
                        </video>
                    </Box>
                </Flex>
                {/* Overview */} 
                <Text fontSize="3xl" fontWeight="medium">Project Overview</Text>
                <Flex justify="center" gap={4} p={6}>
                    <Tag className="button">#tag</Tag>
                    <Tag className="button">#tag</Tag>
                    <Tag className="button">#tag</Tag>
                </Flex>
                {/* Client and Deliverables */}
                <Flex
                    direction={{ base: 'column', md: 'row' }}  
                    wrap="wrap"  
                    justify="space-between"
                    mt={10}
                    mb={20}
                    p={5}
                    w="full"
                >
                    <Box textAlign="left" flex="1" minW="200px" pr={8} mb={{ base: 4, md: 0 }}>
                        <Text fontSize="xl" fontWeight="medium">Problem Space</Text>
                        <Text textTransform="lowercase" mt={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Box>
                    <Box textAlign="left" flex="1" minW="200px" pr={8}>
                        <Text fontSize="xl" fontWeight="medium">Deliverables</Text>
                        <Text textTransform="lowercase" mt={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Box>
                </Flex>
                <Flex justify="center" gap={4} p={6}>
                    <ChakraLink href="https://drexel.edu/functional-fabrics/about/virtual-tour/" isExternal>
                        <Button className="button" textTransform="uppercase" p={6}>Visit Website</Button>
                    </ChakraLink>
                </Flex>
                {/* Process Stage 1 */}
                <Flex 
                    direction={{ base: 'column', md: 'row' }}  
                    w="full" 
                    gap={5} 
                    mt={10}
                    justify="space-between"
                >
                    <Box className="case-image">
                        <Image 
                            src="/images/CFF-figma.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Flex 
                    direction={{ base: 'column', md: 'row' }}  
                    w="full" 
                    gap={5} 
                    mt={20}
                    justify="space-between"
                >
                    <Box w="full" textAlign="left" p={10}>
                        <Text fontSize="xl" fontWeight="medium">Header</Text>
                        <Text textTransform="lowercase" mt={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Box>
                    <Box>
                        <Image 
                            src="/images/CFF-assets.png" 
                            alt="alt" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Flex 
                    direction={{ base: 'column', md: 'row' }}  
                    w="full" 
                    gap={5} 
                    justify="space-between"
                >
                    <Box className="case-image">
                        <Image 
                            src="/images/CFF-desk.png" /* use video instead */
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
            </Flex>
            {/* button to go next to other proj */}
            <Footer />
        </Container>
    );
};

export default MapStudy;
