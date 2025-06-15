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
        <Container maxW="8xl" py={2}>
            <Navbar />
            <Flex direction="column" align="center">
                <Box maxW="60rem" textAlign="center" mt={10}>
                    <Heading fontFamily="accent" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} fontWeight="regular">{title}</Heading>
                    <Flex justify="center" gap={4} p={6} flexWrap="wrap">
                        {tags.map((tag) => (
                            <Tag
                                key={tag}
                                bg="transparent"
                                fontSize={{ base: 'xs', md: 'sm' }}
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
                    <Text textAlign="center">
                        {description}
                    </Text> 
                </Box>
                <Flex justify="center" mt={10}>
                    <Box w="100%" mb={20} position="relative" borderRadius="10px" overflow="hidden" outline="1px solid #D6D6D6">
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
                                <Text mt={2}>
                                    {context.team}
                                </Text>
                            </Box>
                        )}
                        {context.client && (
                            <Box textAlign="left" p={4}>
                                <Heading fontSize={{ base: 'lg', md: 'xl' }} textTransform="uppercase" fontWeight="regular">The Client</Heading>
                                <Text mt={2}>
                                    {context.client}
                                </Text>
                            </Box>
                        )}
                        {context.role && (
                            <Box textAlign="left" p={4}>
                                <Heading fontSize={{ base: 'lg', md: 'xl' }} textTransform="uppercase" fontWeight="regular">My Role</Heading>
                                <Text mt={2}>
                                    {context.role}
                                </Text>
                            </Box>
                        )}
                        {context.requirements && (
                            <Box textAlign="left" p={4}>
                                <Heading fontSize={{ base: 'lg', md: 'xl' }} textTransform="uppercase" fontWeight="regular">Requirements</Heading>
                                <UnorderedList mt={2} fontSize={{ base: 'xs', sm: 'sm' }}>
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
                            <Text mt={2}>
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
                                    as="a"
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fontSize={{ base: 'xs', md: 'sm' }}
                                    borderWidth={1}
                                    bg='primary.4'
                                    color='primary.3'
                                    outline='primary.3'
                                    _hover={{
                                        bg: "primary.1",     
                                        color: "primary.2", 
                                    }}
                                    _focus={{
                                        bg: 'primary.4',
                                        color: 'primary.3'
                                    }}
                                    _active={{
                                        bg: 'primary.4',
                                        color: 'primary.3'
                                    }}
                                    p={3}
                                    h={8}
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
                            <Heading fontSize={{ base: 'lg', md: 'xl' }} textTransform="uppercase" fontWeight="regular">{section.title}</Heading>
                            <Text mt={5} whiteSpace="pre-line">
                                {section.content}
                            </Text>
                        </Box>
                    </Flex>
                ))}

                <Divider borderColor="#ababab" my={10} />

                {outcomes && outcomes.length > 0 && (
                    <Box w="full" textAlign="left" p={{ base: '3', md: '4' }}>
                        <Heading fontSize={{ base: '2xl', md: '3xl' }} textTransform="uppercase" fontWeight="regular">Outcomes</Heading>
                        <Text mt={5}>
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
