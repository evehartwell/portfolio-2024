import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Button } from '@chakra-ui/react';
import '../style.css';

const Navbar = () => {
    return (
        <Flex className="navbar" align="center">
            <Flex className="navbar-links">
                <Link to="#portfolio" className="navbar-button">
                    <Button variant="ghost">
                        Work
                    </Button>
                </Link>
                <Link to="/about" className="navbar-button">
                    <Button className="navbar-button" variant="ghost">
                        About
                    </Button>
                </Link>
                <Link to="/contact" className="navbar-button">
                    <Button className="navbar-button" variant="ghost">
                        Contact
                    </Button>
                </Link>
            </Flex>
        </Flex>
    );
};

export default Navbar;
