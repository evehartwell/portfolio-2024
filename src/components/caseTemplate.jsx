import React from 'react';
import {
    Box,
    Text,
    Flex,
    Container,
    Tag,
    Image,
    Divider,
    UnorderedList,
    ListItem,
    Button,
    Link as ChakraLink,
} from '@chakra-ui/react';
import Navbar from '../pages/navbar';
import Footer from '../pages/footer';

const CaseStudyTemplate = ({
    title,
    tags,
    description,
    coverMedia,
    context,
    problemSpace,
    externalLinks,
    processSections,
    outcomes
}) => {
    return (
        <Container maxW="container.xl" py={5}>
            <Flex justify="flex-start">
                <Box
                    as="a"
                    href="/"
                    position="fixed"
                    width="2.5rem"
                    zIndex={1001}
                    filter="brightness(0) saturate(100%) invert(16%) sepia(19%) saturate(774%) hue-rotate(314deg) brightness(97%) contrast(91%)"
                    display={{ base: 'none', md: 'block' }}
                >
                    <Image src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="Logo" />
                </Box>
            </Flex>
            <Navbar />
            <Flex direction="column" align="center">
                <Box maxW="65rem" textAlign="center" mt={28}>
                    <Text fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}  mb={3} textTransform="uppercase" fontWeight="regular">{title}</Text>
                    <Flex justify="center" textTransform="uppercase" gap={4} p={6} flexWrap="wrap">
                        {tags.map((tag) => (
                            <Tag
                                key={tag}
                                bg="transparent"
                                color="var(--primary-color-1)"
                                borderRadius="30px"
                                outline="1px solid var(--primary-color-1)"
                                _hover={{ bg: "#D6D6D6" }}
                                fontSize={{ base: 'xs', md: 'sm' }}
                            >
                                {tag}
                            </Tag>
                        ))}
                    </Flex>
                    <Text textAlign="center" fontSize={{ base: 'sm', md: 'md' }}>
                        {description}
                    </Text> 
                </Box>
                <Flex justify="space-between" mt={10}>
                    <Box w="full" mb={20} position="relative" borderRadius="10px" overflow="hidden" outline="1px solid #D6D6D6">
                        {coverMedia}
                    </Box>
                </Flex>
                <Text mb={10} fontSize={{ base: '2xl', md: '3xl' }} textTransform="uppercase" fontWeight="medium">Project Overview</Text>
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    wrap="wrap"
                    gap={5}
                    pt={5}
                    mb={10}
                    w="full"
                >
                    <Flex
                        direction="column"
                        flex="1"
                        gap={5}
                    >
                        <Box textAlign="left" p={4}>
                            <Text fontSize={{ base: 'lg', md: 'xl' }} textTransform="uppercase" fontWeight="medium">The Team</Text>
                            <Text mt={2} fontSize={{ base: 'sm', md: 'md' }}>
                                {context.team}
                            </Text>
                        </Box>
                        <Box textAlign="left" p={4}>
                            <Text fontSize={{ base: 'lg', md: 'xl' }} textTransform="uppercase" fontWeight="medium">My Role</Text>
                            <Text mt={2} fontSize={{ base: 'sm', md: 'md' }}>
                                {context.role}
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        direction="column"
                        flex="1"
                        gap={5}
                    >
                        <Box textAlign="left" p={4}>
                            <Text fontSize={{ base: 'lg', md: 'xl' }} textTransform="uppercase" fontWeight="medium">Problem Space</Text>
                            <Text mt={2} fontSize={{ base: 'sm', md: 'md' }}>
                                {problemSpace}
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
                
                {externalLinks && externalLinks.length > 0 && (
                    <Flex justify="center" gap={10} p={6} flexWrap="wrap">
                        {externalLinks.map((link, index) => (
                            <ChakraLink key={index} href={link.url} isExternal>
                                <Button 
                                    className="button" 
                                    textTransform="uppercase" 
                                    fontWeight={500}
                                    p={6}
                                >
                                    {link.label}
                                </Button>
                            </ChakraLink>
                        ))}
                    </Flex>
                )}
                
                {processSections.map((section, index) => (
                    <Flex 
                        key={index}
                        direction={section.direction || { base: 'column', md: 'row' }}
                        w="full" 
                        gap={5} 
                        mt={20}
                    >
                        <Box flex="1" borderRadius="10px" overflow="hidden" outline="1px solid #D6D6D6" order={section.imageOrder}>
                            <Image 
                                src={section.imageSrc} 
                                alt={section.imageAlt} 
                                objectFit="cover"  
                                w="100%"
                                h="100%"
                            />
                        </Box>
                        <Box flex="1" textAlign="left" p={{ base: '3', md: '4' }} order={section.textOrder}>
                            <Text fontSize={{ base: '2xl', md: '3xl' }} textTransform="uppercase" fontWeight="medium">{section.title}</Text>
                            <Text mt={5} fontSize={{ base: 'sm', md: 'md' }}>
                                {section.content}
                            </Text>
                        </Box>
                    </Flex>
                ))}

                <Divider borderColor="#ababab" my={10} />

                <Box textAlign="left" w="full" p={{ base: '3', md: '4' }}>
                    <Text fontSize={{ base: '2xl', md: '3xl' }} textTransform="uppercase" fontWeight="medium">Outcomes</Text>
                    {outcomes.map((outcome, index) => (
                        <Text key={index} mt={5} fontSize={{ base: 'sm', md: 'md' }}>
                            {outcome}
                        </Text>
                    ))}
                </Box>
            </Flex>
            <Footer />
        </Container>
    );
};

export default CaseStudyTemplate;
