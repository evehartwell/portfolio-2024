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
import { PiArrowRightLight } from "react-icons/pi";
import '../style.css';

const BankStudy = () => {
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
                    <Text fontSize="5xl" textTransform="uppercase" fontWeight="regular" lineHeight="3rem">PA Central Federal Credit Union</Text>
                    <Flex justify="center" textTransform="uppercase" gap={4} p={6} mt={2}>
                        <Tag className="button">#figma</Tag>
                        <Tag className="button">#prototyping</Tag>
                    </Flex>
                    <Text mt={2}>
                        Redesigned website to improve accessibility, streamline information architecture, and enhance the overall user experience for an older audience.
                    </Text> 
                </Box>
                {/* Cover Image */} 
                <Flex mt={10}>
                    <Box className="case-image" w="full" mb={20} position="relative" borderRadius="10px" overflow="hidden">
                        <Image 
                            src="/images/bank-preview.png" 
                            alt="lebow homepage" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                {/* Overview */} 
                <Text fontSize="3xl" fontWeight="medium" textTransform="uppercase">Project Overview</Text>
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
                                The goal of the assignment is to redesign a website to improve usability and clarity, by comparing the original site with the new version and addressing identified issues. 
                                The redesign must include detailed prototypes and adhere to atomic design principles, with a focus on consistency and user-centered design.
                            </Text>
                            <UnorderedList fontSize="sm" mt={2} lineHeight="1.5rem">
                                <ListItem mb={2}><b>Prototypes:</b> Clear pages for Desktop, Tablet, and Mobile, each with a minimum of eight named frames.</ListItem>
                                <ListItem mb={2}><b>Atomic Design Page:</b> Includes details on colors, typography, styles, and components.</ListItem>
                                <ListItem mb={2}><b>Micro-Interactions:</b> At least six interactions per screen prototype, ensuring consistency across all frames.</ListItem>
                                <ListItem mb={2}><b>Component Naming:</b> All components must be properly named.</ListItem>
                                <ListItem mb={2}><b>Heuristic Evaluation:</b> Adherence to usability heuristics, including system visibility, user control, consistency, error prevention, and ease of use.</ListItem>
                                <ListItem mb={2}><b>Evaluation Questions:</b> Assess simplicity, user information clarity, language use, consistency, and scalability.</ListItem>
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
                                The original PA Central Federal Credit Union website suffered from several issues. The color scheme did not meet accessibility standards, 
                                making it difficult for users with visual impairments to navigate. The site’s structure led to a frustrating user experience with redundant information and complex navigation. 
                                Branding elements were not uniform, detracting from the overall visual coherence and professionalism of the site. Text was often difficult to read due to poor contrast and font choices.
                            </Text>
                        </Box>
                        <Box textAlign="left" p={4}>
                            <Text fontSize="xl" textTransform="uppercase" fontWeight="medium">Outcomes</Text>
                            <Text mt={2}>
                                A redesigned website with enhanced user experience by making key information more accessible and improving visual clarity. 
                                The updated design aligned with modern accessibility standards and made for an improved heuristic evaluation in user testing.
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
                <Flex justify="center" gap={4} p={6}>
                    <ChakraLink href="https://www.figma.com/proto/Mwu0v4axyfkveqMP1SusEE/IDM-212?page-id=264%3A26&node-id=267-745&viewport=682%2C365%2C0.07&t=PZrfDCEkpkwjNJCO-1&scaling=scale-down&content-scaling=fixed" isExternal>
                        <Button className="button" textTransform="uppercase" p={6}>View Prototype</Button>
                    </ChakraLink>
                </Flex>
                {/* Process Stage 1 */}
                <Flex 
                    direction={{ base: 'column', md: 'row' }}  
                    w="full" 
                    gap={5} 
                    mt={20}
                    justify="space-between"
                >
                    <Box className="case-image">
                        <Image 
                            src="/images/bank-original.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                    <Box className="case-image">
                        <Image 
                            src="/images/bank-style.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Branding</Text>
                    <Text mt={5}>
                        Created a complementary and accessible color palette to enhance readability and visual appeal.
                        Designed a simple, evergreen logo to reflect the credit union’s values and modernize its brand image.
                    </Text>
                </Box>
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
                            src="/images/bank-persona.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                    <Box w="full" textAlign="left" p={5}>
                        <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">User Persona</Text>
                        <Text mt={5}>
                            The user persona, a retired professional with limited tech familiarity, was pivotal in shaping the PA Central Federal Credit Union website redesign. 
                            This persona's needs for readable information, accessible UI, and straightforward navigation guided design choices such as a high-contrast color palette and simplified layout. 
                            Wireframes and prototypes were developed with these requirements in mind, and usability testing was conducted to ensure the design met their expectations. 
                            This approach led to a more intuitive and user-friendly website, effectively addressing the needs of similar users and enhancing overall satisfaction.
                        </Text>
                    </Box>
                </Flex>
                {/* Process Stage 3 */}
                <Flex 
                    direction="row"
                    w="full" 
                    gap={3} 
                    mt={20}
                    justify="space-between"
                >
                    <Box className="case-image">
                        <Image 
                            src="/images/bank-ia-orig.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                    <Box display="flex" alignItems="center">
                        <PiArrowRightLight fontSize="20px" />
                    </Box>
                    <Box className="case-image">
                        <Image 
                            src="/images/bank-ia-new.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Information Architecture</Text>
                    <Text mt={5}>
                        Reorganized the content to reduce redundancy and streamline navigation.
                        Optimized content hierarchy to increase access to key information and decrease click-throughs.
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
                    <Box className="case-image">
                        <Image 
                            src="/images/bank-figma.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Atomic Design</Text>
                    <Text mt={5}>
                        Developed low-fidelity wireframes focusing on simplicity and usability for an older audience.
                        Researched popular layouts of competitor banks to ensure effective design solutions
                        Designed uniform, reusable components to ensure consistency and streamline updates.
                        Developed interactive prototypes to visualize user interactions and workflows, allowing for iterative testing and refinement.
                        Established a comprehensive library to maintain design consistency, ensuring that font and color choices were aligned with accessibility standards and brand guidelines.
                    </Text>
                </Box>
                {/* Process Stage 5 */}
                <Flex mt={20}>
                    <Box className="case-image">
                        <Image 
                            src="/images/bank-mobile.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Mobile Design Expansion</Text>
                    <Text mt={5}>
                        Ensured that the design was responsive and scalable across different devices, including tablets and smartphones.
                        Created a usable and intuitive dashboard and banking interface, optimizing for smaller screens while maintaining functionality and ease of use.
                    </Text>
                </Box>
                {/* Process Stage 6 */}
                <Flex mt={20}>
                    <Box className="case-image">
                        <Image 
                            src="/images/bank-eval.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Heuristic Evaluation</Text>
                    <Text mt={5}>
                        The redesign was evaluated using Jakob Nielsen’s 10 Usability Heuristics, focusing on key areas such as system status visibility, user control, consistency, error prevention, and flexibility. 
                        Additionally, usability testing sessions with representative users provided insights into their interactions, difficulties, and feedback on specific tasks. 
                        This heuristic and user testing process was instrumental in refining the website’s design, focusing on a more efficient IA and prioritizing quick-links, resources, and slight redundancies for user's convenience.
                    </Text>
                </Box>
            </Flex>
            {/* button to go next to other proj */}
            <Footer />
        </Container>
    );
};

export default BankStudy;
