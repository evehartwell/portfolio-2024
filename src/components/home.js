import React from 'react';
import {
    Box,
    Text,
    Flex,
    Button,
    Container,
} from '@chakra-ui/react';

const Homepage = () => {
    return (
        <Container maxW="container.xl" py={10}>
        <Flex direction="column" align="center">
            {/* Navbar */}
            <Flex justify="space-between" w="full" py={5}>
            <Text fontSize="xl" fontWeight="bold">Logo</Text>
            <Flex gap={4}>
                <Button variant="ghost">Work</Button>
                <Button variant="ghost">About</Button>
                <Button variant="ghost">Contact</Button>
            </Flex>
            </Flex>

            {/* Header */}
            <Box textAlign="center" mt={10}>
            <Text fontSize="5xl" fontWeight="bold">Hartwell</Text>
            <Text mt={5}>
                I’m a UX Designer based in Philadelphia, passionate about HCI, fashion, and building meaningful communities online. 
            </Text>
            </Box>

            {/* My Work Section */}
            <Box mt={10} w="full">
            <Text fontSize="3xl" fontWeight="bold" mb={5}>My Work</Text>
            <Box w="full" h="300px" bg="gray.300" mb={5} p={5}>
                <Text fontSize="2xl" fontWeight="bold">Modesens</Text>
                {/* Additional details about the project can go here */}
            </Box>
            <Flex wrap="wrap" justify="space-between">
                <Box w="48%" h="200px" bg="gray.200" mb={5}>
                <Text fontSize="2xl" fontWeight="bold">Black Hippie Art</Text>
                </Box>
                <Box w="48%" h="200px" bg="gray.200" mb={5}>
                <Text fontSize="2xl" fontWeight="bold">Center For Functional Fabrics</Text>
                </Box>
                <Box w="48%" h="200px" bg="gray.200" mb={5}>
                <Text fontSize="2xl" fontWeight="bold">LeBow College of Business</Text>
                </Box>
                <Box w="48%" h="200px" bg="gray.200" mb={5}>
                <Text fontSize="2xl" fontWeight="bold">PA Central Credit Union</Text>
                </Box>
            </Flex>
            </Box>
        </Flex>
        </Container>
    );
};

export default Homepage;
