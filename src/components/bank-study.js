import React from 'react';
import {
    Box,
    Text,
    Flex,
    Button,
    Container,
    Tag,
    Image,
    Link as ChakraLink,
} from '@chakra-ui/react';
import Navbar from './navbar.js';
import Footer from './footer.js';
import { PiArrowRightLight } from "react-icons/pi";
import '../style.css';

const BankStudy = () => {
    return (
        <Container maxW="container.xl" textTransform="uppercase" py={5}>
            {/* Navbar */}
            <Flex justify="flex-start">
                <img src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="Logo" className="logo" />
            </Flex>
            <Navbar />

            <Flex direction="column" align="center">
                {/* Title and Description */}
                <Box maxW="45rem" textAlign="center" p={10} pt={20}>
                    <Text fontSize="5xl" fontWeight="regular">PA Central Federal Credit Union</Text>
                    <Text mt={5}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ultricies ex. Aliquam convallis scelerisque lacus consequat bibendum.
                    </Text> 
                </Box>
                {/* Cover Image */} 
                <Flex mt={10}>
                    <Box w="full" mb={20} position="relative" borderRadius="10px" overflow="hidden">
                        <Image 
                            src="/images/bank-preview.png" 
                            alt="lebow homepage" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                {/* Overview */} 
                <Text fontSize="3xl" fontWeight="medium">Project Overview</Text>
                <Flex justify="center" gap={4} p={6}>
                    <Tag className="button">#figma</Tag>
                    <Tag className="button">#tag</Tag>
                    <Tag className="button">#tag</Tag>
                </Flex>
                {/* Client and Deliverables */}
                <Flex
                    direction={{ base: 'column', md: 'row' }}  
                    wrap="wrap"  
                    justify="space-between"
                    mt={10}
                    mb={20}
                    p={5}
                    w="full"
                >
                    <Box textAlign="left" flex="1" minW="200px" pr={8} mb={{ base: 4, md: 0 }}>
                        <Text fontSize="xl" fontWeight="medium">Problem Space</Text>
                        <Text textTransform="lowercase" mt={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Box>
                    <Box textAlign="left" flex="1" minW="200px" pr={8}>
                        <Text fontSize="xl" fontWeight="medium">Deliverables</Text>
                        <Text textTransform="lowercase" mt={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Box>
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
                    mb={20}
                    justify="space-between"
                >
                    <Box w="full" textAlign="left" p={10}>
                        <Text fontSize="xl" fontWeight="medium">Header</Text>
                        <Text textTransform="lowercase" mt={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Box>
                    <Flex 
                        direction="column"
                        w="full" 
                        gap={5} 
                        mt={10}
                        justify="space-between"
                    >
                        <Box className="case-image">
                            <Image 
                                src="/images/bank-original.png" 
                                alt="" 
                                objectFit="cover"  
                                height="100%" 
                            />
                        </Box>
                        <Box className="case-image">
                            <Image 
                                src="/images/bank-style.png" 
                                alt="" 
                                objectFit="cover"  
                                height="100%" 
                            />
                        </Box>
                    </Flex>
                </Flex>
                {/* Process Stage 2 */}
                <Flex 
                    direction={{ base: 'column', md: 'row' }}  
                    w="full" 
                    gap={5} 
                    mt={20}
                    mb={20}
                    justify="space-between"
                >
                    <Box>
                        <Image className="case-image"
                            src="/images/bank-persona.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                    <Box w="full" textAlign="left" p={10}>
                        <Text fontSize="xl" fontWeight="medium">Header</Text>
                        <Text textTransform="lowercase" mt={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Box>
                </Flex>
                {/* Process Stage 3 */}
                <Flex 
                    direction="row"
                    w="full" 
                    gap={3} 
                    mt={10}
                    justify="space-between"
                >
                    <Box className="case-image">
                        <Image 
                            src="/images/bank-ia-orig.png" 
                            alt="" 
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
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="xl" fontWeight="medium">Header</Text>
                    <Text textTransform="lowercase" mt={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </Box>
                {/* Process Stage 4 */}
                <Flex 
                    direction={{ base: 'column', md: 'row' }}  
                    w="full" 
                    gap={5} 
                    mt={10}
                    justify="space-between"
                >
                    <Box className="case-image">
                        <Image 
                            src="/images/bank-figma.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="xl" fontWeight="medium">Header</Text>
                    <Text textTransform="lowercase" mt={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </Box>
                {/* Process Stage 5 */}
                <Flex mt={10}>
                    <Box className="case-image">
                        <Image 
                            src="/images/bank-mobile.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="xl" fontWeight="medium">Header</Text>
                    <Text textTransform="lowercase" mt={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </Box>
                {/* Process Stage 6 */}
                <Flex mt={10}>
                    <Box className="case-image">
                        <Image 
                            src="/images/bank-eval.png" 
                            alt="" 
                            objectFit="cover"  
                            height="100%" 
                        />
                    </Box>
                </Flex>
                <Box w="full" textAlign="left" p={10}>
                    <Text fontSize="xl" fontWeight="medium">Heuristic Evaluation</Text>
                    <Text textTransform="lowercase" mt={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </Box>
            </Flex>
            {/* button to go next to other proj */}
            <Footer />
        </Container>
    );
};

export default BankStudy;
