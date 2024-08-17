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
                                Redesign a chosen app from start to finish with an emphasis on interaction design using a Figma animation plug-in.
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
                                The problem space for the Modesens app revolves around several user needs: managing excessive and poorly organized information, which overwhelms users; dealing with a cluttered UI and small text that complicates interaction; 
                                and lacking customization options for brands and retailers, which limits user control over their shopping experience. Additionally, users face difficulties due to conflicting mental models and inconsistent menus that disrupt navigation, 
                                and unresponsive buttons that fail to perform expected actions, leading to confusion and frustration. Addressing these issues is crucial for creating a more intuitive, user-friendly experience that meets users’ expectations and preferences.
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
                            I mapped out the steps users would take to set an alert within the app, ensuring that each interaction is logical and efficient. 
                            Building a task flow involves detailing every stage of the user's journey, from starting a search to adding an item to a wishlist. 
                        </Text>
                    </Box>
                </Flex>
                {/* Process Stage 2 */}
                <Flex 
                    direction={{ base: 'column', md: 'row' }}  
                    w="full" 
                    gap={5} 
                    mt={20}
                >
                    <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Wireframes</Text>
                    <Text mt={5}>
                        Wireframes come next, where I outline the app’s basic layout and functionality. By integrating task flows and wireframes, 
                        I aimed to design a user-centric interface that addressed potential pain points and supported an intuitive and seamless experience.
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
                            For rebranding, I gathered inspiration and defined a new visual identity that aligned with the app’s goals and user needs. 
                            This included updating the color palette, typography, and logo to reflect a fresh, modern look. Throughout the rebranding process, 
                            I ensured that the new design elements enhanced usability and resonated with the target audience, providing a more engaging and memorable user experience.
                        </Text>
                        <Text mt={2}>
                            Next, I developed high-fidelity UI designs, translating wireframes into detailed, polished screens. 
                            This phase involved selecting appropriate colors, fonts, and images to create a visually appealing and functional interface. 
                            I focused on ensuring consistency across all screens and interactions, making sure that each element contributed to a cohesive user experience.
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
                            In designing the interaction flow for the LUXR app, I meticulously mapped out the sequence of user interactions with the app’s components, 
                            detailing how users navigated through features and responded to various triggers, such as button clicks or system notifications. 
                            This process involved creating interaction guides that outlined each step of the user journey, ensuring that every interaction was clear and aligned with user expectations. 
                            My goal was to provide a smooth and intuitive experience by visualizing and documenting how users would interact with the app. 
                        </Text>
                    </Box>
                </Flex>
                <Divider borderColor="#422D2D" />
                <Box textAlign="left" w="full" p={10} mt={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Outcomes</Text>
                    <Text mt={5}>
                        The redesigned LUXR app now provides a more intuitive and engaging shopping experience, addressing previous pain points and meeting user needs effectively. 
                        The streamlined interface, improved microinteractions, and thoughtful UI animations contribute to a seamless user experience, aligning with the app's goals and enhancing overall usability.
                    </Text>
                </Box>
            </Flex>
            {/* button to go next to other proj */}
            <Footer />
        </Container>
    );
};

export default ModesensStudy;
