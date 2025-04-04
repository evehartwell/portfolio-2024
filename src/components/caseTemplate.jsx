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
    Heading,
    Link as ChakraLink,
} from '@chakra-ui/react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CaseStudyNav from '../components/caseNav';
import CaseList from './caseList';
import { useLocation } from 'react-router-dom';

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
    const location = useLocation();
    const currentRoute = location.pathname;

    // Find the current case study index
    const currentIndex = CaseList.findIndex(caseStudy => caseStudy.route === currentRoute);

    // Determine previous and next case studies
    const previousCaseStudy = currentIndex > 0 ? CaseList[currentIndex - 1].route : null;
    const nextCaseStudy = currentIndex < CaseList.length - 1 ? CaseList[currentIndex + 1].route : null;

    return (
        <Container maxW="7xl" py={2}>
            <Navbar />
            <Flex direction="column" align="center">
                <Box maxW="60rem" textAlign="center" mt={20}>
                    <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} textTransform="uppercase" fontWeight="regular">{title}</Heading>
                    <Flex justify="center" textTransform="uppercase" gap={4} p={6} flexWrap="wrap">
                        {tags.map((tag) => (
                            <Tag
                                key={tag}
                                bg="transparent"
                                color="primary.1"
                                borderRadius="30px"
                                borderWidth={1}
                                borderColor="primary.1"
                                _hover={{ bg: "#D6D6D6" }}
                                fontFamily="heading"
                                fontSize={{ base: 'xs', md: 'sm' }}
                            >
                                {tag}
                            </Tag>
                        ))}
                    </Flex>
                    <Text textAlign="center" fontSize={{ base: 'md', md: 'lg' }}>
                        {description}
                    </Text> 
                </Box>
                <Flex justify="space-between" mt={20}>
                    <Box w="full" mb={20} position="relative" borderRadius="10px" overflow="hidden" outline="1px solid #D6D6D6">
                        {typeof coverMedia === 'string' ? (
                            <Image src={coverMedia} alt="Cover media" objectFit="cover" w="100%" h="100%" />
                        ) : (
                            coverMedia
                        )}
                    </Box>
                </Flex>
                <Heading mb={10} fontSize={{ base: '2xl', md: '3xl' }} textTransform="uppercase" fontWeight="regular">Project Overview</Heading>
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
                        {context.team && (
                            <Box textAlign="left" p={4}>
                                <Heading fontSize={{ base: 'lg', md: 'xl' }} textTransform="uppercase" fontWeight="regular">The Team</Heading>
                                <Text mt={2} fontSize={{ base: 'md', md: 'lg' }}>
                                    {context.team}
                                </Text>
                            </Box>
                        )}
                        {context.client && (
                            <Box textAlign="left" p={4}>
                                <Heading fontSize={{ base: 'lg', md: 'xl' }} textTransform="uppercase" fontWeight="regular">The Client</Heading>
                                <Text mt={2} fontSize={{ base: 'md', md: 'lg' }}>
                                    {context.client}
                                </Text>
                            </Box>
                        )}
                        {context.role && (
                            <Box textAlign="left" p={4}>
                                <Heading fontSize={{ base: 'lg', md: 'xl' }} textTransform="uppercase" fontWeight="regular">My Role</Heading>
                                <Text mt={2} fontSize={{ base: 'md', md: 'lg' }}>
                                    {context.role}
                                </Text>
                            </Box>
                        )}
                        {context.requirements && (
                            <Box textAlign="left" p={4}>
                                <Heading fontSize={{ base: 'lg', md: 'xl' }} textTransform="uppercase" fontWeight="regular">Requirements</Heading>
                                <UnorderedList fontSize="lg" mt={2}>
                                    {context.requirements.map((req, index) => (
                                        <ListItem key={index} mb={1}>
                                        <b>{req.title}:</b> {req.description}
                                        </ListItem>
                                    ))}
                                </UnorderedList>
                            </Box>
                        )}
                    </Flex>
                    <Flex
                        direction="column"
                        flex="1"
                        gap={5}
                    >
                        <Box textAlign="left" p={4}>
                            <Heading fontSize={{ base: 'lg', md: 'xl' }} textTransform="uppercase" fontWeight="regular">Problem Space</Heading>
                            <Text mt={2} fontSize={{ base: 'md', md: 'lg' }}>
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
                                    fontWeight="medium"
                                    fontFamily="heading"
                                    backgroundColor='primary.2'
                                    borderWidth={1}
                                    borderColor="primary.1"
                                    _hover={{
                                        bg: "primary.1",     
                                        color: "primary.2", 
                                    }}
                                    p={4}
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
                        <Box flex="1" borderRadius="10px" overflow="hidden" outline={section.imageBorder ? "1px solid #D6D6D6" : "none"} order={section.imageOrder}>
                            <Image 
                                src={section.imageSrc} 
                                alt={section.imageAlt} 
                                objectFit="cover"  
                                w="100%"
                                h="100%"
                            />
                        </Box>
                        <Box flex="1" textAlign="left" p={{ base: '3', md: '4' }} order={section.textOrder}>
                            <Heading fontSize={{ base: '2xl', md: '3xl' }} textTransform="uppercase" fontWeight="regular">{section.title}</Heading>
                            <Text mt={5} fontSize={{ base: 'md', md: 'lg' }}>
                                {section.content}
                            </Text>
                        </Box>
                    </Flex>
                ))}

                <Divider borderColor="#ababab" my={10} />

                {outcomes && outcomes.length > 0 && (
                    <Box flex="1" textAlign="left" p={{ base: '3', md: '4' }}>
                        <Heading fontSize={{ base: '2xl', md: '3xl' }} textTransform="uppercase" fontWeight="regular">Outcomes</Heading>
                        <Text mt={5} fontSize={{ base: 'md', md: 'lg' }}>
                            {outcomes.map((outcome, index) => (
                                <Text key={index} mb={2}>{outcome}</Text>
                            ))}
                        </Text>
                    </Box>
                )}
            </Flex>
            <CaseStudyNav previous={previousCaseStudy} next={nextCaseStudy} />
            <Footer />
        </Container>
    );
};

export default CaseStudyTemplate;
