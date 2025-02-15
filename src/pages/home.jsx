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
        title: "Code & Coffee",
        desc: "A community for tech enthusiasts in Philadelphia.",
        imageSrc: "/images/ccp-mock-hd.png",
        link: "/ccp-study",
        aspectRatio: 3/2,  // Default aspect ratio
    }, 
    /*{
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
        position="relative"
        overflow="hidden"
        minH="20rem" 
    >
        {/* Image container with custom aspect ratio */}
        <AspectRatio ratio={aspectRatio}>
            <Image
                src={imageSrc}
                alt={title}
                objectFit="cover"
                transition="filter 0.3s ease"
                borderRadius="8px"
            />
        </AspectRatio>

        {/* Text description */}
        <Flex
            direction="column"
            p={0}
            mb={4}
        >
            <Heading mt={4} fontSize="lg" textTransform="uppercase" fontWeight="regular">
                {title}
            </Heading>
            <Text 
                fontSize="md" 
                as="span" 
                fontWeight="normal" 
                mb={2}
                // text no wrapping
                noOfLines={1} 
                overflow="hidden" 
                textOverflow="ellipsis" 
            >
                {desc}
            </Text>
            <Button 
                as={Link}
                to={link}
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
                _hover={{
                    bg: "primary.1",     
                    color: "primary.2", 
                }}
            >
                Read Case Study
            </Button>
        </Flex>
    </Box>
);

const Homepage = () => {
    return (
        <Container maxW="7xl" py={2}>
            <Navbar />
            <Box maxW="4xl" justifySelf="center">
                {/* intro */}
                <Flex
                    direction={{ base: 'column', md: 'row'}}
                >
                    <Box
                        flex="2"
                        w={{ base: '100%', md: '60%'}}
                        h="auto" 
                        rounded="md"
                        mt={8}
                        mb={8}
                        position="relative"
                    >
                        <Box align="start" spacing={1}>
                            <Image
                                src="/svg/signature.svg" 
                                alt="Eve Hartwell" 
                                w="12rem" 
                                filter="brightness(0) saturate(100%) invert(16%) sepia(19%) saturate(774%) hue-rotate(314deg) brightness(97%) contrast(91%)"
                                display="block"
                                mb={4}
                            />
                            <Text mb={4} fontSize={{ base: 'sm', sm: 'md', md: 'md'}} lineHeight={1.5}>Design Engineer in Philadelphia, dedicated to community building and creating immersive, human-centered digital experiences.</Text>
                            
                        </Box>
                        <Box
                            w={{ base: '100%', md: '80%'}}
                            h="4.5rem"
                            borderRadius="8px"
                            borderWidth="1px"
                            borderColor="primary.1"
                            backgroundColor="rgba(217, 151, 137, 0.15)"
                            display="flex"
                            alignItems="center" 
                            pl={4}
                            pr={4}
                        >
                            <Box textAlign="left"> 
                                <Text mb={1} fontFamily="heading" fontSize={{ base: 'xs', sm: 'sm', md: 'sm'}} lineHeight={1.5}>
                                    Currently a co-organizer of Code & Coffee Philly
                                </Text>
                                <Text fontFamily="heading" fontSize={{ base: 'xs', sm: 'sm', md: 'sm'}} lineHeight={1.5}>
                                    Searching for new UX adventures!
                                </Text>
                            </Box>
                            <Image
                                src="/images/stickers/ccp-logo.png"
                                alt="code and coffee logo"
                                w="3rem"
                                borderRadius="4px"
                                position="absolute"
                                top="50%"
                                right={{ base: '0%', md: '18%' }}
                                transform="rotate(5deg)"
                                transition="all 0.1s ease-in-out"
                                boxShadow="0 5px 5px rgba(0, 0, 0, 0.2)"
                                _hover={{
                                    transform: "translateY(-3px) rotate(5deg)",
                                    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
                                }}
                                _active={{
                                    transform: "translateY(-1px) rotate(5deg)",
                                    boxShadow: "0 5px 5px rgba(0, 0, 0, 0.2)",
                                }}
                                sx={{
                                    "&::after": {
                                        content: '""',
                                        display: "inline-block",
                                        height: "100%",
                                        width: "100%",
                                        borderRadius: "4px",
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        zIndex: -1,
                                        transition: "all 0.1s ease-in-out",
                                    },
                                    "&:hover::after": {
                                        transform: "scaleX(1.4) scaleY(1.6)",
                                        opacity: 0,
                                    },
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setTimeout(() => {
                                        window.open("https://www.phillycodes.rsvp", "_blank");
                                    }, 200); // transition duration
                                }} 
                            />
                        </Box>
                    </Box>
                    {/* side stickers */}
                    <Box
                        flex="1"
                    >
                        <Image
                            src="/images/stickers/tea.png"
                            alt="I love tea"
                            display={{ base: 'none', md: 'block' }} /* hide on mobile */
                            w={{ base: '5rem', md: '6rem'}}
                            position="absolute"
                            top={{ base: '4%', md: '5%'}}
                            right={{ base: '40%', md: '20%'}}
                            filter="drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.4))"
                            transition="all 0.1s ease-in-out"
                            _hover={{
                                transform: "translateY(-3px) rotate(-10deg)",
                            }}
                        />
                        <Image
                            src="/images/stickers/macaron.png"
                            alt="macaron"
                            display={{ base: 'none', md: 'block' }} /* hide on mobile */
                            w={{ base: '5rem', md: '6rem'}}
                            position="absolute"
                            top="10%"
                            right="5%"
                            filter="drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.4))"
                            transition="all 0.1s ease-in-out"
                            _hover={{
                                transform: "translateY(-3px) rotate(5deg)",
                            }}
                        />
                        <Image
                            src="/images/stickers/aiga-logo.png"
                            alt="support designers!"
                            w={{ base: '3.5rem', md: '4rem'}}
                            borderRadius="4px"
                            position="absolute"
                            top={{ base: '3%', md: '15%'}}
                            right="15%"
                            transform="rotate(-15deg)"
                            transition="all 0.1s ease-in-out"
                            boxShadow="-5px 5px 5px rgba(0, 0, 0, 0.2)"
                            _hover={{
                                transform: "translateY(-3px) rotate(-15deg)",
                                boxShadow: "-5px 5px 10px rgba(0, 0, 0, 0.2)",
                            }}
                            _active={{
                                transform: "translateY(-1px) rotate(-15deg)",
                                boxShadow: "-5px 5px 5px rgba(0, 0, 0, 0.2)",
                            }}
                            sx={{
                                "&::after": {
                                    content: '""',
                                    display: "inline-block",
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: "4px",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    zIndex: -1,
                                    transition: "all 0.1s ease-in-out",
                                },
                                "&:hover::after": {
                                    transform: "scaleX(1.4) scaleY(1.6)",
                                    opacity: 0,
                                },
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                setTimeout(() => {
                                    window.open("https://www.aiga.org", "_blank");
                                }, 200); // transition duration
                            }} 
                        />
                    </Box>
                </Flex>
                
                {/* projects */}
                <Flex alignItems="center">
                    <Image
                        src="/svg/hollow-star.svg"
                        alt="star logo"
                        w={{ base: '1.5rem', md: '1.6rem'}}
                        filter="brightness(0) saturate(100%) invert(16%) sepia(19%) saturate(774%) hue-rotate(314deg) brightness(97%) contrast(91%)"
                        sx={{
                            transition: "transform 0.3s ease",
                        }}
                    />
                    <Text ml={2} fontSize={{ base: 'lg', md: 'xl'}} fontFamily="heading" textTransform="uppercase">Portfolio Work</Text>
                </Flex>
                <Flex 
                    direction={{ base: 'column', sm: 'row' }}
                    mt={6} 
                    justify="space-between" 
                    align="stretch"
                >
                    <VStack width={{ base: '100%', sm: '48%'}} spacing={2} align="stretch">
                        <ProjectBox 
                            title={projects[3].title}
                            desc={projects[3].desc}
                            imageSrc={projects[3].imageSrc}
                            link={projects[3].link}
                            aspectRatio={projects[3].aspectRatio}
                        />
                        <ProjectBox 
                            title={projects[2].title}
                            desc={projects[2].desc}
                            imageSrc={projects[2].imageSrc}
                            link={projects[2].link}
                            aspectRatio={projects[2].aspectRatio}
                        />
                    </VStack>
                    <VStack width={{ base: '100%', sm: '48%'}} spacing={2} align="stretch">
                        <ProjectBox 
                            title={projects[1].title}
                            desc={projects[1].desc}
                            imageSrc={projects[1].imageSrc}
                            link={projects[1].link}
                            aspectRatio={projects[1].aspectRatio}
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
                {/* bottom CTA */}
                <Box 
                    borderWidth={1}
                    borderColor="primary.1"
                    rounded="lg"
                    p={6}
                    mt={8}
                    mb={10}
                    position="relative"
                    flex="1"
                    display="flex"
                    flexDirection="column"
                >
                    <Flex 
                        direction="column" 
                        height="100%"
                        justifyContent="space-between"
                    >
                        <VStack fontFamily="heading" align="start">
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
                                fontSize={{ base: 'sm', sm: 'md', md: 'md'}}  
                                lineHeight={1.7}
                                pt={2}
                                pb={2}
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
                        <Image
                                src="/images/stickers/cup.png"
                                alt="code and coffee logo"
                                w="4rem"
                                borderRadius="4px"
                                position="absolute"
                                top="75%"
                                right={{ base: '0%', md: '5%' }}
                                transform="rotate(5deg)"
                                transition="all 0.1s ease-in-out"
                                filter="0 5px 5px rgba(0, 0, 0, 0.2)"
                        />
                    </Flex>
                </Box>
            </Box>
            <Footer />
        </Container>
    );
};

export default Homepage;