import {
    Box,
    Flex,
    Text,
    Container,
    Image,
    AspectRatio,
    Button,
    Divider,
    SimpleGrid,
    Tag,
    Link as ChakraLink
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from "react-router-dom";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import InfoSection from '../components/infoSection';
import '/styles.css';

const projects = [
    {
        title: "Growing a 1,700+ Member Tech Community in One Year Through Inclusive Design",
        imageSrc: "/images/ccp-mock-2.webp",
        link: "/ccp-study",
        tags: ["Accessibility", "Branding", "Mobile",],
        aspectRatio: 3/2,  
    }, 
    {
        title: "Boosting MBA Admissions by 20% Through Web Redesign and Brand Strategy",
        imageSrc: "/images/lebow-mock-hd.webp",
        link: "/lebow-study",
        tags: ["Higher-Ed", "Branding", "CMS", "UX Research",],
        aspectRatio: 3/2,  
    },
    {
        title: "Delivering a 60% Faster Interactive E-Textile Map for DoD-Funded Research Lab",
        imageSrc: "/images/cff-lab.webp",
        link: "/cff-study",
        tags: ["Motion Design", "User Testing", "CMS"],
        aspectRatio: 3/2,  
    },
    {
        title: "Driving $650K in Pipeline by Redesigning Procurement Workflows with a Scalable Design System",
        imageSrc: "/images/govcomp-prev-mock.png",
        link: "/",
        tags: ["GovTech", "Design System", "Data Viz"], 
        showCTA: false,
        aspectRatio: 3/2,  
    },
    {/* 
    {
        title: "Reducing Friction in Online Fashion Shopping by Simplifying Task Flows and Enhancing Navigation",
        imageSrc: "/images/modesens-mock-hd.webp",
        link: "/modesens-study",
        aspectRatio: { base: 3/4, md: 3/2 },  
    },
    {
        title: "Black Hippie Art",
        desc: "none",
        imageSrc: "/images/BHA-preview.webp",
        link: "/bha-study",
        aspectRatio: { base: 3/4, md: 3/2 },  
    },  */}
];

const ProjectBox = ({ title, imageSrc, link, aspectRatio = 3/2, tags = [], showCTA = true, ctaLabel = "Read Case Study", }) => (
    <Box
        position="relative"
        overflow="hidden"
    >
        {/* Image container with custom aspect ratio */}
        <ChakraLink as={RouterLink} to={link} _hover={{ textDecoration: "none" }}>
            <AspectRatio ratio={aspectRatio}>
                <Image
                    src={imageSrc}
                    alt={title}
                    objectFit="cover"
                    borderRadius="4px"
                    loading="lazy"
                />
            </AspectRatio>
        </ChakraLink>

        {/* Text description */}
        <Flex
            direction="column"
        >
            <Text mt={4}>
                {title}
            </Text>

            {Array.isArray(tags) && tags.length > 0 && (
                <Flex justify="left" gap={2} pl={0} pt={2} flexWrap="wrap">
                    {tags.map((tag) => (
                        <Tag
                            key={tag}
                            bg="transparent"
                            fontSize={{ base: "xs", md: "sm" }}
                            color="primary.3"
                            borderRadius="2px"
                            borderWidth={1}
                            borderColor="primary.5"
                            backgroundColor="primary.4"
                        >
                            {tag}
                        </Tag>
                    ))}
                </Flex>
            )}
            
            {showCTA && link && (
                <Flex>
                    <Button
                        as={RouterLink}
                        to={link}
                        fontSize={{ base: "sm", sm: "sm" }}
                        justifyContent="left"
                        pt={2}
                        pl={0}
                        color="primary.3"
                        bg="transparent"
                        rightIcon={<ArrowForwardIcon />}
                        _hover={{ color: "primary.1" }}
                    >
                        {ctaLabel}
                    </Button>
                </Flex>
            )}
        </Flex>
    </Box>
);

const Homepage = () => {
    return (
        <Container maxW="6xl" py={2}>
            <Navbar />
            <Box>
                {/* intro */}
                <Flex
                    direction={{ base: 'column', md: 'row'}}
                    gap={{ base: '0', md: '3rem'}}
                    mt={{ base: '10', md: '20'}}
                    mb={{ base: '5', md: '20'}}
                    m={{ base: '0', md: '20'}}
                    align={{ base: 'center', md: 'flex-start' }}
                >
                    <Image 
                        src="/images/selfie.webp"
                        alt="self portrait" 
                        w="100%"
                        h="100%"
                        maxW="10rem"
                    />
                    <Box
                        flex="2" mt={{ base: '0', md: '14'}} mb={8}
                        textAlign={{ base: 'center', md: 'left' }}
                    >
                        <Box 
                            w={{ base: '100%', md: '80%'}} 
                            spacing={1}
                        >
                            <Text 
                                fontFamily="accent" 
                                fontSize="3xl"
                                mb={4}
                                
                            >
                                Eve Hartwell
                            </Text>
                            <Text mb={4}>
                                UX Designer in Philadelphia, dedicated to community building and creating immersive, human-centered digital experiences.
                            </Text>
                            <Text mb={4}>
                                * UX Team Lead for Top AI Research Lab.
                            </Text>
                        </Box>
                    </Box>
                </Flex>
                
                {/* projects */}
                <Text fontFamily="heading" fontSize="md">Portfolio Work</Text>
                <Divider borderColor="primary.3" mt={2} mb={4}/>
                <SimpleGrid 
                    columns={{ base: 1, sm: 2, md: 3 }} 
                    spacingX={4}         
                    spacingY={8}
                    width="100%"
                >
                    {projects.slice(0, 4).map((project, i) => (
                        <ProjectBox key={i} {...project} />
                    ))}
                </SimpleGrid>

                {/* bottom CTA */}
                <Flex 
                    direction={{ base: 'column', md: 'row'}} 
                    height="100%"
                    mt={{ base: 20, md: 40 }} 
                    mb={20}
                >
                    <InfoSection />
                </Flex>
            </Box>
            <Footer />
        </Container>
    );
};

export default Homepage;