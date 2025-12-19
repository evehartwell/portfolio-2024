import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Image, Text, Button, Link as ChakraLink } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Flex
            as="nav"
            justify="space-between"
            align="center" 
            w="100%"
            position="relative"
            zIndex="1000"
        >
            <Link to="/">
                <Text 
                    fontFamily='accent' 
                    fontSize='2xl' 
                    _hover={{ color: 'primary.3' }}
                    display={{ base: 'none', md: 'block'}}
                >
                    E.H.
                </Text>
            </Link>
            <Flex
                gap={'1rem'}
                align="center"
            >
            {/* Navbar buttons */}
                <Link to="/archive">
                    <Button
                        display="flex"
                        gap={3}
                        variant="ghost"
                        textTransform="lowercase"
                        bg="primary.2"
                        _hover={{ bg: 'none', color: 'primary.3', '& img': { transform: 'rotate(180deg)' }}}
                    >
                        <Image
                            src="/svg/star.svg"
                            alt="Logo"
                            w="1.2rem"
                            filter="brightness(0) saturate(100%) invert(10%) sepia(21%) saturate(8%) hue-rotate(76deg) brightness(101%) contrast(84%)"
                            sx={{
                                transition: "transform 0.3s ease",
                            }}
                        />
                        <Text>Archive</Text>
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
                        bg="primary.2"
                        _hover={{ bg: 'none', color: 'primary.3', '& img': { transform: 'rotate(180deg)' }}}
                    >
                        <Image
                            src="/svg/star-2.svg"
                            alt="Logo"
                            w="1rem"
                            filter="brightness(0) saturate(100%) invert(10%) sepia(21%) saturate(8%) hue-rotate(76deg) brightness(101%) contrast(84%)"
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
