import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Button, Link as ChakraLink } from '@chakra-ui/react';
import '../styles.css';

const Navbar = () => {
    return (
        <Flex className="navbar" align="center">
            <Flex className="navbar-links">
                <Link to="/" className="navbar-button">
                    <Button className="navbar-button" variant="ghost">
                        Work
                    </Button>
                </Link>
                <Link to="/about" className="navbar-button">
                    <Button className="navbar-button" variant="ghost">
                        About
                    </Button>
                </Link>
                <ChakraLink href="mailto:evehartwell@gmail.com" isExternal className="navbar-button"> 
                    <Button className="navbar-button" variant="ghost">
                        Contact
                    </Button>
                </ChakraLink>
            </Flex>
        </Flex>
    );
};

export default Navbar;
