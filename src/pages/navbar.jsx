import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Button, Link as ChakraLink } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Flex
            as="nav"
            justify="center"
            w="100%"
            p="1rem"
            position="fixed"
            top="0"
            left="0"
            zIndex="1000"
            fontFamily='Inter, sans-serif'
        >
            <Flex
                bg="rgba(214, 214, 214, 0.50)"
                backdropFilter="blur(5px)"
                borderRadius="30px"
                gap={{ base: '30px', md: '80px' }}
                border="1px solid"
                borderColor="primary.1"
            >
                {/* Navbar buttons */}
                <Link to="/">
                    <Button
                        variant="ghost"
                        textTransform="uppercase"
                        fontWeight="500"
                        fontSize={{ base: 'sm', md: 'md' }}
                        _hover={{ bg: 'none', color: 'primary.3' }}
                    >
                        Work
                    </Button>
                </Link>
                <Link to="/about">
                    <Button
                        variant="ghost"
                        textTransform="uppercase"
                        fontWeight="500"
                        fontSize={{ base: 'sm', md: 'md' }}
                        _hover={{ bg: 'none', color: 'primary.3' }}
                    >
                        About
                    </Button>
                </Link>
                <ChakraLink href="mailto:evehartwell@gmail.com" isExternal> 
                    <Button
                        variant="ghost"
                        textTransform="uppercase"
                        fontWeight="500"
                        fontSize={{ base: 'sm', md: 'md' }}
                        _hover={{ bg: 'none', color: 'primary.3' }}
                    >
                        Contact
                    </Button>
                </ChakraLink>
            </Flex>
        </Flex>
    );
};

export default Navbar;
