import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Navbar from '../pages/navbar';
import Homepage from '../pages/home';

const aboutNav = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Flex direction="column">
        {/* Pass down the hover state and setter to Navbar */}
            <Navbar setIsHovered={setIsHovered} />
        {/* Pass down the hover state to HomePage */}
            <HomePage isHovered={isHovered} />
        </Flex>
    );
};

export default aboutNav;
