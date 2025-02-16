import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Image, Text, Button, Link as ChakraLink } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Flex
            as="nav"
            justify={{ base: 'center', md: 'flex-start' }}
            w="100%"
            position="relative"
            zIndex="1000"
            fontFamily="Inter, sans-serif"
            mb={2}
        >
            <Flex
                gap={{ base: '1rem', md: '2rem' }}
            >
                {/* Navbar buttons */}
                <Link to="/">
                    <Button
                        display="flex"
                        gap={3}
                        variant="ghost"
                        textTransform="lowercase"
                        fontWeight="500"
                        fontSize="sm"
                        _hover={{ bg: 'none', color: 'primary.3', '& img': { transform: 'rotate(180deg)' }}}
                    >
                        <Image
                            src="/svg/star.svg"
                            alt="Logo"
                            w="1.2rem"
                            filter="brightness(0) saturate(100%) invert(16%) sepia(19%) saturate(774%) hue-rotate(314deg) brightness(97%) contrast(91%)"
                            sx={{
                                transition: "transform 0.3s ease",
                            }}
                        />
                        <Text>Work</Text>
                    </Button>
                </Link>
                
                <Link to="/about">
                    <Button
                        display="flex"
                        gap={3}
                        variant="ghost"
                        textTransform="lowercase"
                        fontWeight="500"
                        fontSize="sm"
                        _hover={{ bg: 'none', color: 'primary.3', '& img': { transform: 'rotate(90deg)' }}}
                    >
                        <Image
                            src="/svg/pointy-star.svg"
                            alt="Logo"
                            w="1.2rem"
                            filter="brightness(0) saturate(100%) invert(16%) sepia(19%) saturate(774%) hue-rotate(314deg) brightness(97%) contrast(91%)"
                            sx={{
                                transition: "transform 0.3s ease",
                            }}
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
                        gap={3}
                        variant="ghost"
                        textTransform="lowercase"
                        fontWeight="500"
                        fontSize="sm"
                        _hover={{ bg: 'none', color: 'primary.3', '& img': { transform: 'rotate(180deg)' }}}
                    >
                        <Image
                            src="/svg/star-2.svg"
                            alt="Logo"
                            w="1rem"
                            filter="brightness(0) saturate(100%) invert(16%) sepia(19%) saturate(774%) hue-rotate(314deg) brightness(97%) contrast(91%)"
                            sx={{
                                transition: "transform 0.3s ease",
                            }}
                        />
                        <Text>Contact</Text>
                    </Button>
                </ChakraLink>
            </Flex>
        </Flex>
    );
};

export default Navbar;
