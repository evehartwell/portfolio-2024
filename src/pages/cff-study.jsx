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
import '../styles.css';

const MapStudy = () => {
    return (
        <Container maxW="container.xl" lineHeight="2rem" py={5}>
            {/* Navbar */}
            <Flex justify="flex-start">
                <a href="/">
                    <img src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="Logo" className="logo" />
                </a>
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
                        I developed and launched an accessible interactive map to showcase the capabilities of an e-textile innovation center.
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
                            alt="high fidelity wireframes" 
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
                            I designed a version of the map using Sitecore components, ensuring it complied with accessibility standards. 
                            My goal was to create an innovative display of manufacturing capabilities that was visually appealing and engaging for users. 
                            I developed and evaluated several accessible designs to refine the user experience, balancing ideal design with practical constraints. 
                        </Text>
                        <Text mt={2}>
                            I enhanced vector graphics and patterns in Adobe Illustrator and reintegrated the brand color palette to make the pages more engaging and visually striking. 
                            Throughout the process, I made sure the design elements accurately reflected the actual manufacturing materials used.
                        </Text>
                    </Box>
                    <Box>
                        <Image 
                            src="/images/CFF-assets.png" 
                            alt="example of design assets" 
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
                            alt="desktop screenshot" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Deployment</Text>
                    <Text mt={5}>
                        I developed an accessible and visually engaging map using approved Sitecore components, successfully showcasing the center’s capabilities. 
                        This process involved extensive video editing to distill the essential elements of the original Figma prototype and present the most crucial and engaging information. 
                        I also converted natural interactions into distinct pages, allowing each space to be visualized as subpages within the website.
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
                            alt="risk assessment sheet" 
                            objectFit="cover"  
                            width="100%" 
                            height="100%" 
                        />
                    </Box>
                    <Box w="full" textAlign="left" p={10}>
                        <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">User Testing</Text>
                        <Text mt={5}>
                            User testing provided valuable insights into how users interacted with the new interface. Navigation was a significant challenge, 
                            as users had difficulty seeing and clicking options on the page. It was also tricky to ensure users knew about the available Figma prototype for enhanced viewing. 
                            To manage feedback and prioritize issues, I conducted a risk assessment to determine which problems needed addressing before launch and which could be handled later.
                        </Text>
                    </Box>
                </Flex>
                <Divider borderColor="#ababab" />
                <Box textAlign="left" w="full" p={10} mt={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Outcomes</Text>
                    <Text mt={5}>
                        This project afforded me a greater degree of independence, which was initially challenging. 
                        This level of design freedom was new to me, and I had to navigate the process of creating a product that effectively met user needs with limited direction.
                        Working with a smaller team without a technical background added to the challenge. However, my previous experience with Sitecore was invaluable, 
                        allowing me to create the interface efficiently with minimal issues. I refined the Figma prototype into a high-performance interactive map that enhanced 
                        the visibility of the center and developed an accessible version using Sitecore components to broaden audience reach.
                    </Text>
                </Box>
            </Flex>
            {/* button to go next to other proj */}
            <Footer />
        </Container>
    );
};

export default MapStudy;
