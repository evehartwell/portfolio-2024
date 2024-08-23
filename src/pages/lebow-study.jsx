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

const LeBowStudy = () => {
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
                    <Text fontSize="5xl" textTransform="uppercase" fontWeight="regular" lineHeight="3rem">LeBow College of Business</Text>
                    <Flex justify="center" textTransform="uppercase" gap={4} p={6} mt={2}>
                        <Tag className="button">#UX Design</Tag>
                        <Tag className="button">#Drupal</Tag>
                        <Tag className="button">#Brand Research</Tag>
                    </Flex>
                    <Text textAlign="left" mt={2}>
                        I collaborated with the LeBow College of Business's marketing team to implement their rebrand and website redesign, 
                        focusing on improving user experience, enhancing brand consistency, and updating the Drupal backend system.
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
                                Lead Web Designer, Marketing Team, Development Team 
                            </Text>
                        </Box>
                        <Box textAlign="left" p={4}>
                            <Text fontSize="xl" textTransform="uppercase" fontWeight="medium">My Role</Text>
                            <Text textTransform="capitalize" mt={2}>
                                UX Designer, Web Content Assistant
                            </Text>
                            <UnorderedList fontSize="sm" mt={2} lineHeight="1.5rem">
                                <ListItem mb={2}>Supported the redesign of the LeBow website by executing and editing wireframes.</ListItem>
                                <ListItem mb={2}>Ensured brand consistency across all design elements.</ListItem>
                                <ListItem mb={2}>Participated in design reviews and collaborated with marketing and development teams.</ListItem>
                                <ListItem mb={2}>Sourced and edited photography, created graphics, and managed creative assets.</ListItem>
                                <ListItem mb={2}>Conducted competitor research, monitored industry trends, and reported findings.</ListItem>
                                <ListItem mb={2}>Contributed to user testing and research, and managed web updates using Monday.com.</ListItem>
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
                                The existing LeBow College of Business website faced challenges amid Drexel University's university-wide digital redesign, 
                                which aimed to unify and modernize the online presence across all colleges. The site suffered from outdated design elements, 
                                inconsistent branding, and complex information formatting that blurred the distinct identity of the School of Economics compared to the School of Business. 
                                Additionally, the outdated Drupal version hindered performance and functionality.
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
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
                    mt={20}
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
                >
                    <Box w="full" textAlign="left" p={10}>
                        <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Brand Research</Text>
                        <Text mt={5}>
                            I conducted research on competing colleges and analyzed their university-wide ads vs. 
                            business college ads to understand industry trends and benchmark against peer institutions.
                        </Text>
                        <Text mt={2}>
                            The new ads aimed to include messaging that resonated with the target audience—prospective students, alumni, and industry partners. 
                            Inspiring copy is not just about catchy phrases but about connecting on an emotional level and conveying the core values and vision of the college.
                            We emphasized narratives that highlighted success stories, student experiences, and the impact of LeBow’s programs. 
                            This also included calls to action that encouraged engagement, whether it was applying for a program, attending an event, or connecting with the community.
                        </Text>
                    </Box>
                    <Box>
                        <Image 
                            src="/images/lebow-ads.png" 
                            alt="" 
                            objectFit="contain"
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
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Atomic Design</Text>
                    <Text mt={5}>
                        We embraced atomic design principles to ensure efficiency and consistency across the design system. 
                        Collaborating closely with the design team, we brainstormed and iterated on wireframes and design solutions. 
                        Using a modular approach, we created scalable and maintainable components, which allowed us to streamline the design process and maintain a cohesive look and feel.
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
                            src="/images/lebow-desk.png" 
                            alt="" 
                            objectFit="cover" 
                            height="100%" 
                        />
                    </Box>
                    <Box w="full" textAlign="left" p={10}>
                        <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Web Design</Text>
                        <Text mt={5}>
                            In the redesign phase, I created and refined wireframes in Figma with graphics from Getty Images that adhered to the updated brand guidelines. 
                            I integrated new icons, a refreshed color palette, and updated typography throughout the site to ensure a consistent and modern appearance. 
                            Specifically, I focused on redesigning the School of Economics section, enhancing information formatting to present detailed content more effectively while emphasizing its unique identity.
                        </Text>
                    </Box>
                </Flex>
                <Divider borderColor="#ababab" mt={10}/>
                <Box textAlign="left" w="full" p={10} mt={5}>
                    <Text fontSize="3xl" textTransform="uppercase" fontWeight="medium">Outcomes</Text>
                    <Text mt={5}>
                        The team and I successfully redesigned the LeBow website, significantly improving user experience and brand consistency. 
                        A new Drupal backend system was implemented and I participated in building and editing over 100 pages. 
                        This overhaul not only enhanced the visual and functional aspects of the site but also contributed to a more engaging and user-friendly experience. 
                        My efforts led to a more cohesive brand presentation and a streamlined, efficient website that better serves its users.
                    </Text>
                </Box>
            </Flex>
            {/* button to go next to other proj */}
            <Footer />
        </Container>
    );
};

export default LeBowStudy;
