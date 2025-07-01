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
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import InfoSection from '../components/infoSection';
import '/styles.css';

const projects = [
    {
        title: "Growing a 1,700+ Member Tech Community in One Year Through Local Sponsorship and Inclusive Design",
        imageSrc: "/images/ccp-mock-2.webp",
        link: "/ccp-study",
        aspectRatio: { base: 3/4, md: 3/2 },  
    }, 
    {
        title: "Boosting Grad Admissions by 20% Through Web Redesign and Brand Strategy",
        imageSrc: "/images/lebow-mock-hd.webp",
        link: "/lebow-study",
        aspectRatio: { base: 3/4, md: 3/2 },  
    },
    {
        title: "Delivering a 60% Faster Interactive E-Textile Map from Figma to Launch",
        imageSrc: "/images/cff-lab.webp",
        link: "/cff-study",
        aspectRatio: { base: 3/4, md: 3/2 },  
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

const ProjectBox = ({ title, desc, imageSrc, link, aspectRatio = 3/2 }) => (
    <Box
        position="relative"
        overflow="hidden"
    >
        {/* Image container with custom aspect ratio */}
        <AspectRatio ratio={aspectRatio}>
            <Image
                src={imageSrc}
                alt={title}
                objectFit="cover"
                borderRadius="4px"
                loading="lazy"
            />
        </AspectRatio>

        {/* Text description */}
        <Flex
            direction="column"
        >
            <Text mt={4} fontSize={{ base: 'xs', sm: 'sm' }}>
                {title}
            </Text>
            <Flex>
                <Button 
                    as={Link}
                    to={link}
                    fontSize={{ base: 'xs', sm: 'sm' }}
                    justifyContent="left"
                    p={0}
                    color="primary.3"
                    bg="transparent"
                    rightIcon={<ArrowForwardIcon />}
                    _hover={{   
                        color: "primary.1", 
                    }}
                >
                    Read Case Study 
                </Button>
            </Flex>
        </Flex>
    </Box>
);

const Homepage = () => {
    return (
        <Container maxW="7xl" py={2}>
            <Navbar />
            <Box>
                {/* intro */}
                <Flex
                    direction={{ base: 'column', md: 'row'}}
                    gap={{ base: '0', md: '3rem'}}
                    mt={{ base: '10', md: '20'}}
                    mb={{ base: '5', md: '20'}}
                    m={20}
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
                    >
                        <Box 
                            w={{ base: '100%', md: '80%'}} 
                            align={{ base: 'center', md: 'left'}} 
                            spacing={1}
                        >
                            <Text 
                                fontFamily="accent" 
                                fontSize="2xl"
                                mb={4} 
                            >
                                Eve Hartwell
                            </Text>
                            <Text mb={4}>
                                Design Engineer in Philadelphia, dedicated to community building and creating immersive, human-centered digital experiences.
                            </Text>
                            <Text mb={4}>
                                * Current UX lead on an AI startup for federal contractors.
                            </Text>
                        </Box>
                    </Box>
                </Flex>
                
                {/* projects */}
                <Text fontFamily="heading">Portfolio Work</Text>
                <Divider borderColor="primary.1" mt={1} mb={6}/>
                <SimpleGrid 
                    columns={{ base: 1, sm: 2, md: 3 }} 
                    spacing={4}
                    width="100%"
                    >
                    {projects.slice(0, 3).map((project, i) => (
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