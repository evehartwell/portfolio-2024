import {
    Box,
    Flex,
    Text,
    Container,
    Grid,
    GridItem,
    Image,
    AspectRatio,
    VStack,
    Heading,
    Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const projects = [
    {
        title: "Modesens",
        desc: "Redesigned and simplified a shopping assistant app.",
        imageSrc: "/images/LUXR-frames.png",
        link: "/modesens-study",
    },
    {
        title: "Black Hippie Art",
        desc: "none",
        imageSrc: "/images/BHA-preview.png",
        link: "/bha-study",
    },
    {
        title: "Center For Functional Fabrics",
        desc: "Created an accessible interactive map for e-textile lab.",
        imageSrc: "/images/CFF-prev.png",
        link: "/cff-study",
    },
    {
        title: "LeBow College of Business",
        desc: "Revamped higher-ed web user experience and branding.",
        imageSrc: "/images/lebow-preview.png",
        link: "/lebow-study",
    },
];

const ProjectBox = ({ title, desc, imageSrc, link }) => (
    <Box
    as={Link}
    to={link}
    position="relative"
    borderRadius="10px"
    overflow="hidden"
    mb="10px"
    border="1px solid"
    borderColor="transparent" // Default border color (transparent)
    _hover={{
        borderColor: 'primary.1', // Border color on hover
    }}
    sx={{
        '&:hover .blur-image': {
            filter: 'blur(6px)', // Apply blur on hover
        },
    }}
>
    {/* Image container */}
    <AspectRatio ratio={3 / 2}>
        <Image
            src={imageSrc}
            alt={title}
            objectFit="cover"
            className="blur-image" // Assigning a class for hover effect
            transition="filter 0.3s ease" // Smooth transition for blur effect
        />
    </AspectRatio>

    {/* Text overlay */}
    <Box
        display="flex"
        flexDirection="column"
        position="absolute"
        alignItems="flex-start"
        justifyContent="flex-end"
        bottom={0}
        width="100%"
        height="100%"
        p="1rem"
        color="primary.1"
        opacity={0} // Hidden by default
        transition="opacity 0.3s ease"
        bg="rgba(235, 235, 235, 0.50)"
        _hover={{
            opacity: 1, // Show text on hover
        }}
    >
        <Heading fontSize="xl" textTransform="uppercase" fontWeight="regular">
            {title}
        </Heading>
        <Text as="span" fontWeight="normal" mb={4}>
            {desc}
        </Text>
        <Button 
                as={Link} // Use Link from react-router for client-side routing
                to={link} // Navigate to the case study page
                variant="ghost"
                size="sm"
                position="relative"
                bottom={0}
                left={0}
                fontFamily="heading"
                textTransform="uppercase"
                borderWidth={1}
                borderRadius={30}
                borderColor="primary.1"
                fontWeight="500"
                _hover={{
                    bg: "primary.1",     
                    color: "primary.2", 
                }}
            >
                Read Case Study
            </Button>
    </Box>
</Box>
);

const Homepage = () => {
    return (
        <Container maxW="container.xl" py={5}>
            <Navbar />
            <Grid
                templateColumns={{ base: '1fr', md: '1.5fr 3fr' }} 
                gap={6}
            >
                {/* Column 1 */}
                <GridItem>
                    {/* intro */}
                    <Box 
                        borderWidth={1}
                        borderColor="primary.1"
                        h="11rem" 
                        rounded="md"
                        p={6}
                        position="relative"
                    >
                        <VStack align="start" spacing={1}>
                            <Heading fontFamily="accent" size="xl" fontWeight="400">Eve Hartwell</Heading>
                            <Text fontSize={{ base: 'md', md: 'sm', lg: 'md'}} lineHeight={1.5}>UX Designer and Web Developer in Philadelphia, dedicated to community building and creating immersive, human-centered digital experiences.</Text>
                            {/* peel */}
                        </VStack>
                    </Box>
                    <VStack spacing={4} align="stretch" mt={6}>
                        {/* project 1 */}
                        <ProjectBox 
                            title={projects[2].title}
                            desc={projects[2].desc}
                            imageSrc={projects[2].imageSrc}
                            link={projects[2].link}
                        />
                        {/* project 2 */}
                        <ProjectBox 
                            title={projects[0].title}
                            desc={projects[0].desc}
                            imageSrc={projects[0].imageSrc}
                            link={projects[0].link}
                        />
                    </VStack>
                </GridItem>
                
                {/* Column 2 */}
                <GridItem>
                    {/* recent project */}
                    <VStack spacing={4} align="stretch" h="auto">
                        <ProjectBox 
                            title={projects[3].title}
                            desc={projects[3].desc}
                            imageSrc={projects[3].imageSrc}
                            link={projects[3].link}
                        />
                    </VStack>
                    <Box 
                        borderWidth={1}
                        borderColor="primary.1"
                        h={{ base: 'auto', md: '12.5rem'}}
                        rounded="lg"
                        p={6}
                        position="relative"
                        mt={4}
                        overflow="hidden"
                    >
                        <VStack fontFamily="heading" align="start" spacing={2}>
                            <Flex direction="row" gap={2}>
                                <Image
                                    src="/svg/heart-2.svg" 
                                    alt="heart" 
                                    w="1rem" 
                                    filter="brightness(0) saturate(100%) invert(16%) sepia(19%) saturate(774%) hue-rotate(314deg) brightness(97%) contrast(91%)"
                                    display="block"
                                    sx={{
                                        '&:hover': {
                                            content: `url("/svg/heart.svg")`,
                                        },
                                    }}
                                />
                                <Heading fontWeight="400" textTransform="uppercase" size="md">Find something new to love today</Heading>
                            </Flex>
                            <Text fontFamily="body" fontSize={{ base: 'md', md: 'sm', lg: 'md'}}  lineHeight={1.5}>I create digital experiences that spark curiosity and connection, designed to bring joy and meaning to everyday interactions. Guided by empathy and creativity, I build interfaces that foster community and inspire lasting engagement. Let’s work together to bring your digital vision to life with an experience that leaves a lasting impression.</Text>
                            <Button 
                                as="a"
                                href="mailto:evehartwell@gmail.com"
                                variant="ghost"
                                size="sm"
                                position="absolute"
                                bottom={4}
                                left={5}
                                textTransform="uppercase"
                                borderWidth={1}
                                borderRadius={30}
                                borderColor="primary.1"
                                fontWeight="500"
                                _hover={{
                                    bg: "primary.1",     
                                    color: "primary.2", 
                                }}
                            >
                                Contact Me
                            </Button>
                        </VStack>
                    </Box>
                </GridItem>
            </Grid>
            <Footer />
        </Container>
    );
};

export default Homepage;
