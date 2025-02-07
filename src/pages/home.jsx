import {
    Box,
    Flex,
    Text,
    Container,
    Image,
    AspectRatio,
    VStack,
    Heading,
    Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '/styles.css';

const projects = [
    {
        title: "Modesens",
        desc: "A polished and simplified shopping assistant app.",
        imageSrc: "/images/modesens-mock-hd.jpeg",
        link: "/modesens-study",
        aspectRatio: 3/2,  // Default aspect ratio
    },
    {
        title: "Black Hippie Art",
        desc: "none",
        imageSrc: "/images/BHA-preview.png",
        link: "/bha-study",
        aspectRatio: 3/2,  // Default aspect ratio
    }, */
    {
        title: "Center For Functional Fabrics",
        desc: "An accessible interactive map for PA e-textile lab.",
        imageSrc: "/images/cff-lab.jpg",
        link: "/cff-study",
        aspectRatio: 3/2,  // Default aspect ratio
    },
    {
        title: "LeBow College of Business",
        desc: "A brand and web revamp for business college.",
        imageSrc: "/images/drexel-mock-hd.jpeg",
        link: "/lebow-study",
        aspectRatio: 3/2,  // Custom aspect ratio for feature project
    },
];

const ProjectBox = ({ title, desc, imageSrc, link, aspectRatio = 3/2 }) => (
    <Box
        as={Link}
        to={link}
        position="relative"
        borderRadius="10px"
        overflow="hidden"
        mb="10px"
        border="1px solid"
        borderColor="transparent"
        _hover={{
            borderColor: 'primary.1',
        }}
        sx={{
            '&:hover .blur-image': {
                filter: 'blur(6px)',
            },
        }}
    >
        {/* Image container with custom aspect ratio */}
        <AspectRatio ratio={aspectRatio}>
            <Image
                src={imageSrc}
                alt={title}
                objectFit="cover"
                className="blur-image"
                transition="filter 0.3s ease"
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
            opacity={0}
            transition="opacity 0.3s ease"
            bg="rgba(235, 235, 235, 0.50)"
            _hover={{
                opacity: 1,
            }}
        >
            <Heading ml={2} fontSize="lg" textTransform="uppercase" fontWeight="regular">
                {title}
            </Heading>
            <Text ml={2} fontSize="md" as="span" fontWeight="normal" mb={4}>
                {desc}
            </Text>
            <Button 
                as={Link}
                to={link}
                variant="ghost"
                size="sm"
                position="relative"
                bottom={2}
                left={2}
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
        <Container maxW="7xl" py={2}>
            <Navbar />
            <Box width="100%">
                <Flex 
                    direction={{ base: 'column', md: 'row' }} 
                    gap={4}
                    flexWrap="wrap"
                >
                    <Flex 
                        direction="column" 
                        flex="1"
                        minW={{ base: '100%', md: '300px' }}
                        gap={4}
                    >
                        <Box
                            borderWidth={1}
                            borderColor="primary.1"
                            w="auto"
                            h="auto" 
                            rounded="md"
                            p={6}
                            position="relative"
                            transition="transform 0.3s ease" // Smooth transition
                            // transform={isHovered ? 'scale(1.2) rotate(15deg)' : 'scale(1)'}
                        >
                            <VStack align="start" spacing={1}>
                                <Image
                                    src="/svg/signature.svg" 
                                    alt="Eve Hartwell" 
                                    w="12rem" 
                                    filter="brightness(0) saturate(100%) invert(16%) sepia(19%) saturate(774%) hue-rotate(314deg) brightness(97%) contrast(91%)"
                                    display="block"
                                    mb={2}
                                />
                                <Text fontSize={{ base: 'sm', md: 'md'}} lineHeight={1.5}>Design Engineer in Philadelphia, dedicated to community building and creating immersive, human-centered digital experiences.</Text>
                                <Text fontFamily="heading" fontSize='sm' lineHeight={1.5}>* Co-organizer of <a href="https://phillycodes.rsvp/" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>Code & Coffee Philly</a></Text>
                            </VStack>
                        </Box>
                        <VStack spacing={2} align="stretch" flex="1">
                            <ProjectBox 
                                title={projects[2].title}
                                desc={projects[2].desc}
                                imageSrc={projects[2].imageSrc}
                                link={projects[2].link}
                                aspectRatio={projects[2].aspectRatio}
                            />
                            <ProjectBox 
                                title={projects[0].title}
                                desc={projects[0].desc}
                                imageSrc={projects[0].imageSrc}
                                link={projects[0].link}
                                aspectRatio={projects[0].aspectRatio}
                            />
                        </VStack>
                    </Flex>
                    
                    <Flex 
                        direction="column" 
                        flex="2"
                        minW={{ base: '100%', md: '400px' }}
                        gap={2}
                    >
                        <VStack spacing={4} align="stretch" flex="1">
                            <ProjectBox 
                                title={projects[3].title}
                                desc={projects[3].desc}
                                imageSrc={projects[3].imageSrc}
                                link={projects[3].link}
                                aspectRatio={projects[3].aspectRatio}
                            />
                        </VStack>
                        <Box 
                            borderWidth={1}
                            borderColor="primary.1"
                            rounded="lg"
                            p={6}
                            position="relative"
                            overflow="hidden"
                            flex="1"
                            display="flex"
                            flexDirection="column"
                        >
                            <Flex 
                                direction="column" 
                                height="100%"
                                justifyContent="space-between"
                            >
                                <VStack fontFamily="heading" align="start" spacing={2}>
                                    <Flex direction="row" justifyContent="space-between" gap={2}>
                                        <Image
                                            src="/svg/heart-2.svg" 
                                            alt="heart" 
                                            w="1.1rem" 
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
                                    <Text 
                                        fontFamily="body" 
                                        fontSize={{ base: 'sm', md: 'md'}}  
                                        lineHeight={1.7}
                                    >
                                        I create digital spaces that bring people together, crafting websites and apps that transform everyday interactions into meaningful connections. 
                                        By blending thoughtful user research with creative touches, I design experiences that make people feel at home and keep communities coming back for more. 
                                        Let's collaborate to turn your ideas into vibrant digital spaces that your audience will love.
                                    </Text>
                                </VStack>
                                <Button 
                                    as="a"
                                    href="mailto:evehartwell@gmail.com"
                                    variant="ghost"
                                    size="sm"
                                    position="relative"
                                    left={0}
                                    textTransform="uppercase"
                                    borderWidth={1}
                                    borderRadius={30}
                                    borderColor="primary.1"
                                    fontWeight="500"
                                    fontFamily="heading"
                                    alignSelf="start"
                                    mt={4}
                                    _hover={{
                                        bg: "primary.1",     
                                        color: "primary.2", 
                                    }}
                                >
                                    Contact Me
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <Footer />
        </Container>
    );
};

export default Homepage;