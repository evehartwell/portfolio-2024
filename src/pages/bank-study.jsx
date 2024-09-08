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
import { PiArrowRightLight } from "react-icons/pi";
import '../styles.css';

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
                    <Text textAlign="left" mt={2}>
                        I redesigned the PA Central Federal Credit Union website to improve accessibility, streamline the information architecture, and enhance the overall user experience, especially for an older audience.
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
                                Redesign a website to improve usability and clarity, by comparing the original site with the new version and addressing identified issues. 
                                The redesign must include detailed prototypes and adhere to atomic design principles, with a focus on consistency and user-centered design.
                            </Text>
                            <UnorderedList fontSize="sm" mt={2} lineHeight="1.5rem">
                                <ListItem mb={2}>Pages clearly delienating and seperating three screen prototypes (Desktop, Tablet, Mobile)</ListItem>
                                <ListItem mb={2}>A Page designated for the Atomic Method designating colors, type, styles, components, etc.</ListItem>
                                <ListItem mb={2}>A minimum of <b>eight different frames</b>, each named, per screen prototype (e.g. Desktop - Homepage, Desktop - Store, Desktop - Product, Desktop - Shopping Cart, Desktop - Checkout, Desktop - Confirmation)</ListItem>
                                <ListItem mb={2}>A minimum of <b>six micro-interactions</b> across each screen prototype (i.e. five for Desktop, five for Tablet, five for Mobile).</ListItem>
                                <ListItem mb={2}>Interactions must remain consistent across frames.</ListItem>
                                <ListItem mb={2}>Components must be named.</ListItem>
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
                            alt="original bank screenshots" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                    <Box className="case-image">
                        <Image 
                            src="/images/bank-style.png" 
                            alt="original and new color palette" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Branding</Text>
                    <Text mt={5}>
                        I crafted a complementary and accessible color palette to enhance readability and visual appeal. 
                        I also designed a simple, evergreen logo that reflects the credit union’s values while modernizing its brand image.
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
                            alt="user persona" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                    <Box w="full" textAlign="left" p={5}>
                        <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">User Persona</Text>
                        <Text mt={5}>
                            The user persona, representing a retired professional with limited tech familiarity, played a crucial role in shaping my design decisions. 
                            This persona's need for readable information, accessible UI, and straightforward navigation guided every step of the redesign. 
                            I developed wireframes and prototypes with these requirements in mind, and usability testing confirmed that the design met their expectations. 
                            By focusing on these needs, I created a more intuitive and user-friendly website that truly resonated with the target audience.
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
                            alt="original sitemap" 
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
                            alt="new sitemap" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Information Architecture</Text>
                    <Text mt={5}>
                        I reorganized the website's content to reduce redundancy and streamline navigation. Optimizing the content hierarchy 
                        made key information more accessible, reducing the number of clicks needed to reach important resources.
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
                            alt="figma design library" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Atomic Design</Text>
                    <Text mt={5}>
                        I started with low-fidelity wireframes, focusing on simplicity and usability for an older audience. 
                        I researched popular layouts from competitor banks to inform effective design solutions. 
                        By designing uniform, reusable components, I ensured consistency and made future updates more efficient. 
                        Interactive prototypes helped visualize user interactions and workflows, allowing for iterative testing and refinement. 
                        I also established a comprehensive design library to maintain consistency in fonts, colors, and accessibility standards.
                    </Text>
                </Box>
                {/* Process Stage 5 */}
                <Flex mt={20}>
                    <Box className="case-image">
                        <Image 
                            src="/images/bank-mobile.png" 
                            alt="mobile designs" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Mobile Design Expansion</Text>
                    <Text mt={5}>
                        I made sure the design was responsive and scalable across different devices, including tablets and smartphones. 
                        I created a usable and intuitive dashboard and banking interface, optimizing for smaller screens while maintaining functionality and ease of use.
                    </Text>
                </Box>
                {/* Process Stage 6 */}
                <Flex mt={20}>
                    <Box className="case-image">
                        <Image 
                            src="/images/bank-eval.png" 
                            alt="radar chart evaluating original vs. new design" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Heuristic Evaluation</Text>
                    <Text mt={5}>
                        I evaluated the redesign using Jakob Nielsen’s 10 Usability Heuristics, focusing on system status visibility, user control, consistency, error prevention, and flexibility. 
                        Usability testing with representative users provided valuable insights into their interactions and highlighted areas for improvement. 
                        This process was key to refining the website’s design, making it more efficient and user-friendly.
                    </Text>
                </Box>
            </Flex>
            <Divider borderColor="#ababab" mt={10}/>
            <Box textAlign="left" w="full" p={10} mt={5}>
                <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Outcomes</Text>
                <Text mt={5}>
                    The redesigned website offers an enhanced user experience, with key information more accessible and visual clarity improved. 
                    The updated design aligns with modern accessibility standards, and the improvements were reflected in a better heuristic evaluation during user testing.
                </Text>
            </Box>
            {/* button to go next to other proj */}
            <Footer />
        </Container>
    );
};

export default BankStudy;
