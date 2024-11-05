import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Image, Text, Button, Link as ChakraLink } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Flex
            as="nav"
            justify={{ base: 'center', md: 'left' }}
            w="100%"
            p="1rem"
            position="relative"
            top="0"
            left="0"
            zIndex="1000"
            fontFamily='Inter, sans-serif'
        >
            <Flex
                gap={{ base: '30px', md: '50px' }}
            >
                {/* Navbar buttons */}
                <Link to="/">
                    <Button
                        display="flex"
                        alignItems="left"
                        gap={3}
                        variant="ghost"
                        textTransform="lowercase"
                        fontWeight="500"
                        fontSize={{ base: 'sm', md: 'md' }}
                        _hover={{ bg: 'none', color: 'primary.3' }}
                    >
                        <Image
                            src="/svg/star.svg" 
                            alt="Logo" 
                            w="1.4rem" 
                            filter="brightness(0) saturate(100%) invert(16%) sepia(19%) saturate(774%) hue-rotate(314deg) brightness(97%) contrast(91%)"
                            display="block"
                        />
                        <Text>Work</Text>
                    </Button>
                </Link>
                <Link to="/about">
                    <Button
                        display="flex"
                        alignItems="left"
                        gap={3}
                        variant="ghost"
                        textTransform="lowercase"
                        fontWeight="500"
                        fontSize={{ base: 'sm', md: 'md' }}
                        _hover={{ bg: 'none', color: 'primary.3' }}
                    >   
                        <Image
                            src="/svg/pointy-star.svg" 
                            alt="Logo" 
                            w="1.4rem" 
                            filter="brightness(0) saturate(100%) invert(16%) sepia(19%) saturate(774%) hue-rotate(314deg) brightness(97%) contrast(91%)"
                            display="block"
                        />
                        <Text>About</Text>
                    </Button>
                </Link>
                <ChakraLink 
                    href="mailto:evehartwell@gmail.com" 
                    isExternal
                    textDecoration="none"
                    _hover={{ textDecoration: 'none' }}
                > 
                    <Button
                        display="flex"
                        alignItems="left"
                        gap={3}
                        variant="ghost"
                        textTransform="lowercase"
                        fontWeight="500"
                        fontSize={{ base: 'sm', md: 'md' }}
                        _hover={{ bg: 'none', color: 'primary.3' }}
                    >
                        <Image
                            src="/svg/star-2.svg" 
                            alt="Logo" 
                            w="1.1rem" 
                            filter="brightness(0) saturate(100%) invert(16%) sepia(19%) saturate(774%) hue-rotate(314deg) brightness(97%) contrast(91%)"
                            display="block"
                        />
                        <Text>Contact</Text>
                    </Button>
                </ChakraLink>
            </Flex>
        </Flex>
    );
};

export default Navbar;
