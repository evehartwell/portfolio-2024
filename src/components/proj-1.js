import React from 'react';
import {
    Box,
    Text,
    Flex,
    Button,
    Container,
    Tag,
} from '@chakra-ui/react';

const Project1 = () => {
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

            {/* Title and Description */}
            <Box textAlign="center" mt={10}>
            <Text fontSize="5xl" fontWeight="bold">Project Name</Text>
            <Text mt={5}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ultricies ex. Aliquam convallis scelerisque lacus consequat bibendum.
            </Text>
            </Box>

            {/* Project Overview */}
            <Box mt={10} textAlign="center">
            <Text fontSize="3xl" fontWeight="bold">Project Overview</Text>
            <Flex justify="center" gap={4} mt={4}>
                <Tag>#web design</Tag>
                <Tag>#web development</Tag>
            </Flex>

            {/* Client and Deliverables */}
            <Flex justify="space-around" mt={10}>
                <Box textAlign="left">
                <Text fontSize="xl" fontWeight="bold">The Client</Text>
                <Text mt={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                </Box>
                <Box textAlign="left">
                <Text fontSize="xl" fontWeight="bold">Deliverables</Text>
                <Text mt={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                </Box>
            </Flex>

            <Button mt={5}>Visit Website</Button>
            </Box>
        </Flex>

        {/* Project Images */}
        <Flex justify="space-between" mt={10}>
            <Box w="48%" h="200px" bg="gray.200"></Box>
            <Box w="48%" h="200px" bg="gray.200"></Box>
        </Flex>
        </Container>
    );
};

export default Project1;
