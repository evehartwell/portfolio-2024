import {
    Box,
    Flex,
    Text,
    Container,
    Image,
    AspectRatio,
    Button,
    SimpleGrid,
    Tag,
    Link as ChakraLink
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from "react-router-dom";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '/styles.css';

const projects = [
    {
        title: "Finding Exhale",
        imageSrc: "/images/findingexhale.png",
        link: "/",
        aspectRatio: 3/2,
    },
    {
        title: "Black Hippie Art",
        desc: "none",
        imageSrc: "/images/BHA-preview.webp",
        link: "https://blackhippieart.com/",
        aspectRatio: 3/2,  
    },  
    {
        title: "This Way Out",
        imageSrc: "/images/TWO-preview.png",
        link: "https://www.thiswayout.life/",
        aspectRatio: 3/2,
    },
    {
        title: "Crosslocked",
        imageSrc: "/images/crosslocked.png",
        link: "/",
        aspectRatio: 3/2,
    },
    {
        title: "Modesens App Redesign",
        imageSrc: "/images/modesens-mock-hd.webp",
        link: "/modesens-study",
        aspectRatio: 3/2,
    },
    {
        title: "Brand Personality Picker",
        imageSrc: "/images/brand-picker.png",
        link: "/y",
        aspectRatio: 3/2,
    },
    {
        title: "Sustainable Fashion Hub",
        imageSrc: "/images/capstone.png",
        link: "/y",
        aspectRatio: 3/2,
    },
];

const ProjectBox = ({ title, imageSrc, link, aspectRatio = 3/2, tags = [], }) => (
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
        </Flex>
    </Box>
);

const Archive = () => {
    return (
        <Container maxW="6xl" py={2}>
            <Navbar />
            <Text 
                fontFamily="accent" 
                fontSize="2xl"
                mt={20}
                mb={6}
            >
                Client Projects
            </Text>
            <Box>
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
            </Box>
            <Text 
                fontFamily="accent" 
                fontSize="2xl"
                mt={20}
                mb={6}
            >
                Fun Projects
            </Text>
            <Box mb={40}>
                <SimpleGrid 
                    columns={{ base: 1, sm: 2, md: 3 }} 
                    spacingX={4}         
                    spacingY={8}
                    width="100%"
                >
                    {projects.slice(4, 7).map((project, i) => (
                        <ProjectBox key={i} {...project} />
                    ))}
                </SimpleGrid>   
            </Box>
            <Footer />
        </Container>
    )
}

export default Archive; 