import React from 'react';
import {
    Box,
    Text,
    Flex,
    Button,
    Container,
    Tag,
    Image,
    Divider,
    List,
    ListItem,
    UnorderedList,
    Link as ChakraLink,
} from '@chakra-ui/react';
import Navbar from './navbar';
import Footer from './footer';
import '../style.css';

const MapStudy = () => {
    return (
        <Container maxW="container.xl" lineHeight="2rem" py={5}>
            {/* Navbar */}
            <Flex justify="flex-start">
                <img src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="Logo" className="logo" />
            </Flex>
            <Navbar />

            <Flex direction="column" align="center">
                {/* Title and Description */}
                <Box maxW="65rem" textAlign="center" mt={20}>
                    <Text fontSize="5xl" textTransform="uppercase" fontWeight="regular" lineHeight="3rem">Center for Functional Fabrics</Text>
                    <Flex justify="center" textTransform="uppercase" gap={4} p={6} mt={2}>
                        <Tag className="button">#Sitecore</Tag>
                        <Tag className="button">#Web Development</Tag>
                        <Tag className="button">#UX Design</Tag>
                    </Flex>
                    <Text textAlign="left" mt={2}>
                        I developed and launched an interactive map to showcase the Center’s capabilities to stakeholders, improve accessibility, and optimize the user experience.
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
                            <source src={`/media/cff-map-1.mp4`} type="video/mp4" /> 
                            Your browser does not support the video tag.
                        </video>
                    </Box>
                </Flex>
                {/* Overview */} 
                <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Project Overview</Text>
                {/* Client and Deliverables */}
                <Flex
                    direction={{ base: 'column', md: 'row' }} // Stack vertically on small screens, horizontally on larger screens
                    wrap="wrap"
                    gap={5} // Adjust spacing between items
                    p={5}
                    w="full"
                >
                {/* column 1 */}
                    <Flex
                        direction="column" // Stack items vertically in each column
                        flex="1"
                        gap={5}
                    >
                        <Box textAlign="left" p={4}>
                            <Text fontSize="xl" textTransform="uppercase" fontWeight="medium">The Team</Text>
                            <Text mt={2}>
                                Communications Manager, Director of Business Development
                            </Text>
                        </Box>
                        <Box textAlign="left" p={4}>
                            <Text fontSize="xl" textTransform="uppercase" fontWeight="medium">My Role</Text>
                            <Text mt={2}>
                                Web Designer and Developer
                            </Text>
                            <UnorderedList fontSize="sm" mt={2} lineHeight="1.5rem">
                                <ListItem mb={2}>Salvaged and redesigned an interactive map prototype initially built on an inaccessible platform.</ListItem>
                                <ListItem mb={2}>Optimized Figma files to ensure smooth animations and reduced buffering errors.</ListItem>
                                <ListItem mb={2}>Edited over 40 wireframes and 6 pages of web content.</ListItem>
                                <ListItem mb={2}>Implemented the design in Sitecore CMS to meet accessibility standards and enhance visual appeal.</ListItem>
                            </UnorderedList>
                        </Box>
                    </Flex>
                {/* column 2 */}
                    <Flex
                        direction="column" // Stack items vertically in each column
                        flex="1"
                        gap={5}
                    >
                        <Box textAlign="left" p={4}>
                            <Text fontSize="xl" textTransform="uppercase" fontWeight="medium">Problem Space</Text>
                            <Text mt={2}>
                                The initial interactive map prototype was built on a platform that did not meet accessibility standards, limiting its usability for a wider audience. 
                                The challenge was to salvage the existing prototype while creating a functional, accessible version that effectively highlighted the Center’s manufacturing capabilities.
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
                <Flex justify="center" gap={4} p={6}>
                    <ChakraLink href="https://drexel.edu/functional-fabrics/about/virtual-tour/" isExternal>
                        <Button className="button" textTransform="uppercase" p={6}>Visit Website</Button>
                    </ChakraLink>
                </Flex>
                {/* Process Stage 1 --- include figma optimization screenshots */}
                {/* Process Stage 2 */}
                <Flex 
                    direction={{ base: 'column', md: 'row' }}  
                    w="full" 
                    gap={5} 
                    mt={20}
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
                {/* Process Stage 3 */}
                <Flex 
                    direction={{ base: 'column', md: 'row' }}  
                    w="full" 
                    gap={5} 
                    mt={20}
                    justify="space-between"
                >
                    <Box w="full" textAlign="left" p={10}>
                        <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Design</Text>
                        <Text mt={5}>
                            Designed a version of the map using Sitecore components, ensuring compliance with accessibility standards.
                            Created an innovative display of manufacturing capabilities to enhance visual appeal and user engagement.
                        </Text>
                        <Text mt={2}>
                            Developed and evaluated several versions of accessible designs to refine the user experience while balancing ideal design with practical constraints.
                            Enhanced vector graphics and patterns in Adobe Illustrator and reintegrated the brand color palette for more engaging and visually striking pages.
                            Ensured that design elements reflected the actual manufacturing materials used.
                        </Text>
                    </Box>
                    <Box>
                        <Image 
                            src="/images/CFF-assets.png" 
                            alt="alt" 
                            objectFit="cover"  
                            width="100%"
                        />
                    </Box>
                </Flex>
                {/* Process Stage 4 */}
                <Flex 
                    direction={{ base: 'column', md: 'row' }}  
                    w="full" 
                    gap={5} 
                    mt={20}
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
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Deployment</Text>
                    <Text textTransform="lowercase" mt={5}>
                        Created an accessible and visually engaging map using approved Sitecore components, effectively showcasing the Center’s capabilities.
                    </Text>
                </Box>
                {/* Process Stage 5 */}
                <Flex 
                    direction={{ base: 'column', md: 'row' }}  
                    w="full" 
                    gap={5} 
                    mt={20}
                    justify="space-between"
                >
                    <Box>
                        <Image 
                            src="/images/CFF-risk.png" 
                            alt="alt" 
                            objectFit="cover"  
                            width="100%" 
                            height="100%" 
                        />
                    </Box>
                    <Box w="full" textAlign="left" p={10}>
                        <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">User Testing</Text>
                        <Text mt={5}>
                            I conducted user testing to gather feedback on web content and usability, using insights to inform design decisions.
                            I also developed a detailed risk assessment to prioritize updates based on their impact and importance.
                        </Text>
                    </Box>
                </Flex>
                <Divider borderColor="#422D2D" />
                <Box textAlign="left" w="full" p={10} mt={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Outcomes</Text>
                    <Text mt={5}>
                        Refined Figma prototype for a high-performance interactive map that enhanced stakeholder engagement.
                        Developed an accessible version of the map with limitations of Sitecore components to increase audience reach
                    </Text>
                </Box>
            </Flex>
            {/* button to go next to other proj */}
            <Footer />
        </Container>
    );
};

export default MapStudy;
