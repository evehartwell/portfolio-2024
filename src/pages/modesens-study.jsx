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

const ModesensStudy = () => {
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
                    <Text fontSize="5xl" textTransform="uppercase" fontWeight="regular" lineHeight="3rem">Modesens</Text>
                    <Flex justify="center" textTransform="uppercase" gap={4} p={6} mt={2}>
                        <Tag className="button">#figma</Tag>
                        <Tag className="button">#jitter</Tag>
                        <Tag className="button">#microinteractions</Tag>
                    </Flex>
                    <Text textAlign="left" mt={2}>
                        I redesigned Modesens, an online shopping assistant app, to enhance user experience by addressing issues such as information overload, inconsistent UI, and lack of personalization. 
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
                            <source src={`/media/modesens-mobile.mp4`} type="video/mp4" />
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
                            <Text fontSize="xl" textTransform="uppercase" fontWeight="medium">Assignment</Text>
                            <Text mt={2}>
                                Redesign a chosen app from start to finish with an emphasis on interaction design using a Figma animation plug-in. Focus on a specific user task, identify inefficiencies, and streamline the process.
                            </Text>
                            <UnorderedList fontSize="sm" mt={2} lineHeight="1.5rem">
                                <ListItem mb={2}><b>Microinteractions:</b> Incorporate intuitive triggers, rules, feedback, and loops to enhance user engagement. Designedinteractions to ensure minimal complexity and clear feedback on user actions.</ListItem>
                                <ListItem mb={2}><b>UI Animation:</b> Apply principles from Material Design to create smooth and accessible animations, balancing functionality and aesthetic appeal while considering user comfort.</ListItem>
                                <ListItem mb={2}><b>Wireflows:</b> Create wireframes with flowchart-like representations to document user interactions through common tasks, improving task flow clarity.</ListItem>
                                <ListItem mb={2}><b>Interaction Guides:</b> Develop storyboards for microinteractions, using keyframes to communicate design ideas and ensure consistency across the app.</ListItem>
                                <ListItem mb={2}><b>Rebranding:</b> Update chosen app's visual identity.</ListItem>
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
                                The Modesens app faced challenges that negatively impacted the user experience. One of the primary issues was a bloated user task flow, 
                                where excessive and poorly organized information, a cluttered UI, and small text made interactions frustrating. 
                                Conflicting mental models, inconsistent menus, and unresponsive buttons further disrupted navigation, leading to confusion and a generally poor user experience. 
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
                {/* Process Stage 1 */}
                <Flex 
                    direction={{ base: 'column', md: 'row' }}  
                    w="full" 
                    gap={5} 
                    mt={20}
                >
                    <Box className="case-image">
                        <Image 
                            src="/images/LUXR-tasks.png" 
                            alt="app taskflow" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                    <Box w="full" textAlign="left" p={10}>
                        <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">User Task Flow</Text>
                        <Text mt={5}>
                            To begin, I mapped out the steps users would take to set an alert within the app. By detailing every stage of the user's journey, from the landing page to browsing products and adding an item to their wishlist, 
                            I identified the pages and interactions that distracted from the main task and brainstormed possible interactions that could occur between steps.
                        </Text>
                    </Box>
                </Flex>
                {/* Process Stage 2 */}
                <Flex 
                    direction={{ base: 'column', md: 'row' }}  
                    w="full" 
                    gap={5} 
                    mt={10}
                >
                    <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Wireframes</Text>
                    <Text mt={5}>
                        With the task flow established, I moved on to wireframes, where I sketched the app’s basic layout and functionality. 
                        I integrated the task flow into the wireframes to design an interface that was focused on setting an alert. 
                        My goal was to create an experience that felt intuitive for users while also meeting the standards set by competitor apps.
                    </Text>
                </Box>
                    <Box className="case-image">
                        <Image 
                            src="/images/LUXR-wires.png" 
                            alt="app wireflow" 
                            objectFit="cover"  
                            height="80%" 
                        />
                    </Box>
                </Flex>
                
                {/* Process Stage 3 */}
                <Flex 
                    w="full" 
                    wrap="wrap" 
                    gap={5} 
                    mt={20}
                >
                    <Box>
                        <Image 
                            src="/images/LUXR-IXFlow.png" 
                            alt="interaction flow" 
                            objectFit="cover"
                            width="100%" 
                            height="100%" 
                        />
                    </Box> 
                    <Box textAlign="left" p={10}>
                        <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Rebranding & New UI</Text>
                        <Text mt={5}>
                            Rebranding was a crucial part of this project. I began by gathering inspiration and defining a new visual identity that matched the app’s goals and user needs. 
                            I updated the color palette, typography, and logo to give the app a fresh and modern look. During the rebranding process, I prioritized usability
                            to ensure that the new design elements were not only visually appealing but also resonated with the target audience, making their experience more engaging and memorable.
                        </Text>
                        <Text mt={2}>
                            After rebranding, I developed high-fidelity UI designs, turning the wireframes into detailed and polished screens. 
                            I chose colors, fonts, and images with great care, making sure they contributed to a cohesive and functional interface. 
                            I worked hard to maintain consistency across all screens and interactions, ensuring that every element enhanced the overall user experience.
                        </Text>
                    </Box>
                </Flex>
                {/* Process Stage 4 */}
                <Flex 
                    w="full" 
                    wrap="wrap" 
                    gap={5} 
                    mt={20}
                >
                    <Box className="case-image">
                        <Image 
                            src="/images/LUXR-guides.png" 
                            alt="interaction guides" 
                            objectFit="cover" 
                            height="100%" 
                        />
                    </Box> 
                    <Box textAlign="left" minW="200px" p={10}>
                        <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">IXFlow & Interaction Guides</Text>
                        <Text mt={5}>
                            For the interaction flow of the app, I mapped out how users would navigate through the app and respond to triggers like button clicks or swiping motions. 
                            I created interaction guides that detailed each step of the user journey. These guides were essential for visualizing and documenting how users would interact with the app. 
                            My goal was to craft a smooth and intuitive experience that aligned with user expectations. This documentation also helped me implement the animations in Jitter.
                        </Text>
                    </Box>
                </Flex>
                <Divider borderColor="#ababab" />
                <Box textAlign="left" w="full" p={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Outcomes</Text>
                    <Text mt={5}>
                        This project taught me the importance of microinteraction in creating a unique tone and voice of a digital experience. 
                        Taking into consideration timing, movements, and material design was challenging but it showed me what it takes to create a unique and memorable user experience.
                    </Text>
                    <Text mt={5}>
                        The redesigned Modesens app offers a more intuitive and engaging shopping experience. By addressing the initial problems and focusing on user needs, 
                        I was able to streamline the app's interface with a concise task flow, improved microinteractions, and thoughtful UI animations. 
                    </Text>
                </Box>
            </Flex>
            {/* button to go next to other proj */}
            <Footer />
        </Container>
    );
};

export default ModesensStudy;
