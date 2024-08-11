import React from 'react';
import {
    Box,
    Text,
    Flex,
    Button,
    Container,
    Tag,
    Image,
    Grid,
    List,
    ListItem,
    UnorderedList,
    Link as ChakraLink,
} from '@chakra-ui/react';
import Navbar from './navbar.js';
import Footer from './footer.js';
import '../style.css';

const LeBowStudy = () => {
    return (
        <Container maxW="container.xl" textTransform="uppercase" py={5}>
            {/* Navbar */}
            <Flex justify="flex-start">
                <img src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="Logo" className="logo" />
            </Flex>
            <Navbar />

            <Flex direction="column" align="center">
                {/* Title and Description */}
                <Box maxW="50rem" position="relative" textAlign="center" pt={20} pb={10}>
                    <Text fontSize="5xl" fontWeight="regular">LeBow College of Business</Text>
                    <Text fontWeight="medium" mt={5}>September 2021 &mdash; September 2022</Text>
                    <Text mt={5}>
                    Updated the LeBow College branding and redesign website to improve user experience, enhance brand consistency, and update the Drupal backend system.
                    </Text> 
                </Box>
                {/* Cover Image */} 
                <Flex justify="space-between" mt={10}>
                    <Box w="full" mb={20} position="relative" borderRadius="10px" overflow="hidden" className="case-image">
                        <Image 
                            src="/images/lebow-preview.png" 
                            alt="lebow homepage" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                {/* Overview */} 
                <Text fontSize="3xl" fontWeight="medium">Project Overview</Text>
                <Flex justify="center" gap={4} p={6}>
                    <Tag className="button">#UX Design</Tag>
                    <Tag className="button">#Brand Research</Tag>
                </Flex>
                {/* Client and Deliverables */}
                <Grid
                    templateColumns={{ base: '1fr', md: '1fr 1fr' }} 
                    gap={7}
                    mt={10}
                    p={5}
                    w="full"
                >
                {/* First Row */}
                    <Box textAlign="left" p={4}>
                        <Text fontSize="xl" fontWeight="medium">Problem Space</Text>
                        <Text fontSize="sm" textTransform="lowercase" lineHeight="2rem" mt={2}>
                            The existing LeBow College of Business website faced challenges amid Drexel University's university-wide digital redesign, 
                            which aimed to unify and modernize the online presence across all colleges. The site suffered from outdated design elements, 
                            inconsistent branding, and complex information formatting that blurred the distinct identity of the School of Economics compared to the School of Business. 
                            Additionally, the outdated Drupal version hindered performance and functionality.
                        </Text>
                    </Box>
                    <Box textAlign="left" p={4}>
                        <Text fontSize="xl" fontWeight="medium">The Team</Text>
                        <Text textTransform="capitalize" mt={2}>
                            lead web designer, marketing team, development team 
                        </Text>
                    </Box>
                {/* Second Row */}
                    <Box textAlign="left" p={4}>
                        <Text fontSize="xl" fontWeight="medium">My Role</Text>
                        <Text textTransform="capitalize" mt={2}>
                            UX Designer, Web Content Assistant
                        </Text>
                        <UnorderedList fontSize="0.9rem" textTransform="lowercase" mt={2}>
                            <ListItem mb={2}>Supported the redesign of the LeBow website by executing and editing wireframes.</ListItem>
                            <ListItem mb={2}>Ensured brand consistency across all design elements.</ListItem>
                            <ListItem mb={2}>Participated in design reviews and collaborated with marketing and development teams.</ListItem>
                            <ListItem mb={2}>Sourced and edited photography, created graphics, and managed creative assets.</ListItem>
                            <ListItem mb={2}>Conducted competitor research, monitored industry trends, and reported findings.</ListItem>
                            <ListItem mb={2}>Contributed to user testing and research, and managed web updates using Monday.com.</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box textAlign="left" p={4}>
                        <Text fontSize="xl" fontWeight="medium">Outcomes</Text>
                        <UnorderedList fontSize="0.9rem" textTransform="lowercase" mt={2}>
                            <ListItem mb={2}>Successfully redesigned the LeBow website, enhancing user experience and brand consistency.</ListItem>
                            <ListItem mb={2}>Implemented a new Drupal backend system and built and edited over 100 pages.</ListItem>
                            <ListItem mb={2}>Improved the visual and functional aspects of the site, contributing to a more engaging and user-friendly experience.</ListItem>
                        </UnorderedList>
                    </Box>
                </Grid>
                <Flex justify="center" gap={4} p={6}>
                    <ChakraLink href="https://www.lebow.drexel.edu/" isExternal>
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
                    <Box maxw='lg' className="case-image">
                        <Image 
                            src="/images/lebow-research.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                    
                </Flex>
                {/* Process Stage 2 */}
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
                            src="/images/lebow-ads.png" 
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
                    mt={10}
                    justify="space-between"
                >
                    <Box maxw='lg' className="case-image">
                        <Image 
                            src="/images/lebow-atomic.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="xl" fontWeight="medium">Header</Text>
                    <Text textTransform="lowercase" mt={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </Box>
                {/* Process Stage 4 */}
                <Flex 
                    direction={{ base: 'column', md: 'row' }}  
                    w="full" 
                    gap={5} 
                    mt={20}
                    justify="space-between"
                >
                    <Box>
                        <Image className="case-image" 
                            src="/images/lebow-desk.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                    <Box w="full" textAlign="left" p={10}>
                        <Text fontSize="xl" fontWeight="medium">Header</Text>
                        <Text textTransform="lowercase" mt={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            {/* button to go next to other proj */}
            <Footer />
        </Container>
    );
};

export default LeBowStudy;
