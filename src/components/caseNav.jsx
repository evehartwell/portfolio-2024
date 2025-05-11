import React from 'react';
import {
    Flex,
    Button,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

const CaseStudyNav = ({ previous, next }) => {
    const navigate = useNavigate();

    return (
        <Flex 
            justify="space-between" 
            flexDirection={{ base: 'column', sm: 'row'}} 
            gap={10} 
            p={2} 
            mt={20} 
            mb={20}
        >
            <Button 
                textTransform="capitalize" 
                fontWeight="medium"
                fontFamily="heading"
                fontSize={{ base: 'xs', sm: 'sm'}}
                bg='primary.4'
                borderWidth={1}
                _hover={{
                    bg: "primary.1",     
                    color: "primary.2", 
                }}
                p={3}
                h={8}
                onClick={() => navigate(previous)}
                isDisabled={!previous} // Disable if no previous case study
            >
                Previous Study
            </Button>
            <Button 
                textTransform="capitalize" 
                fontWeight="medium"
                fontFamily="heading"
                fontSize={{ base: 'xs', sm: 'sm'}}
                bg='primary.4'
                borderWidth={1}
                _hover={{
                    bg: "primary.1",     
                    color: "primary.2", 
                }}
                p={4}
                h={8}
                onClick={() => navigate("/")}
            >
                Home
            </Button>
            <Button 
                textTransform="capitalize" 
                fontWeight="medium"
                fontFamily="heading"
                fontSize={{ base: 'xs', sm: 'sm'}}
                bg='primary.4'
                borderWidth={1}
                _hover={{
                    bg: "primary.1",     
                    color: "primary.2", 
                }}
                p={4}
                h={8}
                onClick={() => navigate(next)}
                isDisabled={!next} // Disable if no next case study
            >
                Next Study
            </Button>
        </Flex>
    );
};

export default CaseStudyNav;
