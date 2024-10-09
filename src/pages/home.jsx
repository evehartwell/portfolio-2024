import {
    Box,
    Text,
    Flex,
    Container,
    Divider,
    Grid,
    Image,
    AspectRatio,
    VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';


const projects = [
    {
        title: "Modesens",
        imageSrc: "/images/LUXR-preview.png",
        videoSrc: "/media/modesens-mobile-edit.mp4",
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
    {
        title: "PA Central Credit Union",
        imageSrc: "/images/bank-preview.png",
        link: "/bank-study",
    },
];

const ProjectBox = ({ title, imageSrc, videoSrc, link }) => (
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
                    opacity: 0,
                },
            }}
        >
            {/* image/video styles */}
            {videoSrc ? (
            <AspectRatio ratio={16 / 9}>
                <Box
                as="video"
                autoPlay
                muted
                loop
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="10px"
                >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
                </Box>
            </AspectRatio>
            ) : (
            <AspectRatio ratio={3 / 2}>
                <Image
                src={imageSrc}
                alt={title}
                objectFit="cover"
                borderRadius="10px"
                />
            </AspectRatio>
            )}
        </Box>
        {/* text overlay image */}
        <Box
            position="absolute"
            bottom="0"
            left="0"
            width="100%"
            height="25%"
            p="1rem"
            display="flex"
            alignItems="flex-end"
            color="white"
            zIndex={2}
            fontWeight="medium"
            sx={{
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(117, 117, 117, 0.634)',
                    backdropFilter: 'blur(20px)',
                    zIndex: -1,
                    maskImage: 'linear-gradient(to top, rgb(2, 2, 2), rgba(0, 0, 0, 0))',
                    borderBottomLeftRadius: '10px', /* ensure border-radius styles */
                    borderBottomRightRadius: '10px', 
                },
            }}
        >
            <Text fontSize="xl" textTransform="uppercase">{title}</Text>
        </Box>
    </Box>
);

const Homepage = () => {
    return (
        <Container maxW="container.xl" py={5}>
            <Flex justify="flex-start">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Image 
                        src="/images/star.svg" 
                        alt="Logo" 
                        w="2.5rem" 
                        filter="brightness(0) saturate(100%) invert(16%) sepia(19%) saturate(774%) hue-rotate(314deg) brightness(97%) contrast(91%)"
                        position="fixed"
                        zIndex={1001}
                        display={{ base: "none", md: "block" }}
                    />
                </Link>
            </Flex>
            <Navbar />
            <VStack spacing={10} align="stretch">
                <Box textAlign="center" py={20} mt={20} maxW="40rem" mx="auto">
                    <Text fontFamily="'Old London', serif" textTransform="capitalize" fontSize="5xl" fontWeight="medium">Hartwell</Text>
                    <Text fontSize={{ base: 'sm', md: 'sm' }} textTransform="uppercase" mt={8}>
                        I'm a UX designer and web developer in Philadelphia, dedicated to building immersive, human-centered digital experiences. 
                    </Text>
                </Box>
                <Box>
                    <Text fontSize="3xl" fontWeight="medium" mb={5} textTransform="uppercase">My Work</Text>
                    <Divider borderColor="#422D2D" mb={5} />
                    <ProjectBox {...projects[0]} />
                </Box>
                {/* project grid */}
                <Grid 
                    templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} 
                    gap={10}
                >
                    {projects.slice(1).map((project, index) => (
                        <ProjectBox key={index} {...project} />
                    ))}
                </Grid>
            </VStack>
            <Footer />
        </Container>
    );
};

export default Homepage;