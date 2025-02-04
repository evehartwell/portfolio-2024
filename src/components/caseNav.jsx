import React from 'react';
import {
    Flex,
    Button,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

const CaseStudyNav = ({ previous, next }) => {
    const navigate = useNavigate();

    return (
        <Flex justify="space-between" flexDirection={{ base: 'column', sm: 'row'}} gap={10} p={2} mt={20} mb={20}>
            <Button 
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
                onClick={() => navigate(previous)}
                isDisabled={!previous} // Disable if no previous case study
            >
                Previous Study
            </Button>
            <Button 
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
                onClick={() => navigate("/")}
            >
                Home
            </Button>
            <Button 
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
                onClick={() => navigate(next)}
                isDisabled={!next} // Disable if no next case study
            >
                Next Study
            </Button>
        </Flex>
    );
};

export default CaseStudyNav;
