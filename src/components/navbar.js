import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Button } from '@chakra-ui/react';
import '../style.css';

const Navbar = () => {
    return (
        <Flex className="navbar" align="center">
            <Flex className="navbar-links">
                <Link href="#portfolio" className="navbar-button">Work</Link>
                <Button className="navbar-button" variant="ghost">
                About
                </Button>
                <Button className="navbar-button" variant="ghost">
                Contact
                </Button>
            </Flex>
        </Flex>
    );
};

export default Navbar;
