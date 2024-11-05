import {
    Box,
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
        imageSrc: "/images/LUXR-frames.png",
        link: "/modesens-study",
    },
    {
        title: "Black Hippie Art",
        imageSrc: "/images/BHA-preview.png",
        link: "/bha-study",
    },
    {
        title: "Center For Functional Fabrics",
        imageSrc: "/images/CFF-prev.png",
        link: "/cff-study",
    },
    {
        title: "LeBow College of Business",
        imageSrc: "/images/lebow-preview.png",
        link: "/lebow-study",
    },
];

const ProjectBox = ({ title, imageSrc, link }) => (
    <Box
        as={Link}
        to={link}
        position="relative"
        borderRadius="10px"
        overflow="hidden"
        mb="10px"
    >
        <Box
            position="relative"
            borderRadius="10px"
            overflow="hidden"
            sx={{
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(217, 217, 217, 0.10), rgba(118, 118, 118, 0.5) 95%)',
                    zIndex: 1,
                    transition: 'opacity 0.8s ease',
                },
                '&:hover::before, &:hover .project-text-overlay': {
                    
                },
            }}
        >
            <AspectRatio ratio={3 / 2}>
                <Image
                    src={imageSrc}
                    alt={title}
                    objectFit="cover"
                    borderRadius="10px"
                />
            </AspectRatio>
        </Box>
        <Box
            className="project-title"
            position="absolute"
            bottom="0"
            left="0"
            width="100%"
            height="100%"
            p="1rem"
            display="flex"
            alignItems="flex-end"
            color="white"
            zIndex={2}
            opacity={0} // Start with opacity 0
            transition="opacity 0.3s ease" // Smooth transition for opacity
            sx={{
                '&:hover': {
                    opacity: 1,
                },
            }}
        >
            <Heading fontSize="xl" textTransform="uppercase" fontWeight="medium">{title}</Heading>
        </Box>
    </Box>
);

const Homepage = () => {
    return (
        <Container maxW="container.xl" py={5}>
            <Navbar />
            <Grid
                templateColumns={{ base: '1fr', md: '1fr 2fr' }} 
                gap={6}
            >
                {/* Column 1 */}
                <GridItem>
                    {/* intro */}
                    <Box 
                        outlineColor="primary.1"
                        h="11rem" 
                        rounded="md"
                        p={6}
                        position="relative"
                    >
                        <VStack align="start" spacing={2}>
                            <Heading fontFamily="accent" size="xl" fontWeight="400">Eve Hartwell</Heading>
                            <Text lineHeight={1.5}>UX Designer and Web Developer in Philadelphia, dedicated to community building and creating immersive, human-centered digital experiences.</Text>
                            {/* peel */}
                        </VStack>
                    </Box>
                    <VStack spacing={4} align="stretch" mt={6}>
                        {/* project 1 */}
                        <ProjectBox 
                            title={projects[2].title}
                            imageSrc={projects[2].imageSrc}
                            link={projects[2].link}
                        />
                        {/* project 2 */}
                        <ProjectBox 
                            title={projects[0].title}
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
                            imageSrc={projects[3].imageSrc}
                            link={projects[3].link}
                        />
                    </VStack>
                    <Box 
                        bg="gray.100" 
                        h="12.5rem"  // Use auto height to allow resizing
                        rounded="lg"
                        p={6}
                        position="relative"
                        mt={4}
                    >
                        <VStack align="start" spacing={4}>
                            <Heading size="md">More Info</Heading>
                            <Text>Brief description</Text>
                            <Button 
                                variant="ghost"
                                size="sm"
                                position="absolute"
                                bottom={6}
                                right={6}
                            >
                                View
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
