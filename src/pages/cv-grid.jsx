import React from 'react';
import { Flex, Table, Thead, Tbody, Tr, Th, Td, Text, Box } from '@chakra-ui/react';
import '../style.css';

const CustomTable = () => {
    return (
        <Flex direction="column" align="center" p={4} width="100%">
            <Flex
                direction={{ base: "column", md: "row" }} // Stack vertically on mobile, horizontally on larger screens
                wrap="wrap"
                width="80%"
                overflowX="auto"
                gap={3}
            >
                <Box
                    flex="1"
                    p={4}
                    mb={{ base: 4, md: 0 }} // Margin-bottom on mobile screens
                >
                    <Text fontWeight="medium" textTransform="uppercase" mb={2}>Experience</Text>
                    <Text fontFamily="var(--secondary-font)" textTransform="uppercase" mt={4}>Govbrain</Text>
                        <Text fontFamily="var(--secondary-font)">
                            UX Designer<br/>
                            June 2024  &mdash; Current</Text>
                    <Text fontFamily="var(--secondary-font)" textTransform="uppercase" mt={4}>Black Hippie Art</Text>
                        <Text fontFamily="var(--secondary-font)">
                            Social Media Manager<br/>
                            May 2024  &mdash; Current</Text>
                    <Text fontFamily="var(--secondary-font)" textTransform="uppercase" mt={4}>Center for Functional Fabrics</Text>
                        <Text fontFamily="var(--secondary-font)">
                            UX Designer & Web Developer<br/>
                            September 2022  &mdash; March 2023</Text>
                    <Text fontFamily="var(--secondary-font)" textTransform="uppercase" mt={4}>Drexel LeBow College</Text>
                        <Text fontFamily="var(--secondary-font)">
                            Web Designer & Communications Assistant<br/>
                            September 2021  &mdash; September 2022</Text>
                </Box>
                <Box
                    flex="1"
                    p={4}
                    mb={{ base: 4, md: 0 }} // Margin-bottom on mobile screens
                >
                    <Text fontWeight="medium" textTransform="uppercase" mb={2}>Education</Text>
                    <Text fontFamily="var(--secondary-font)" textTransform="uppercase">Drexel University</Text>
                        <Text fontFamily="var(--secondary-font)">
                        BS in Information Systems<br/>
                        Minor in User Experience & Interaction Design, 2024</Text>
                </Box>
                <Box flex="1"
                    p={4}
                >
                    <Text fontWeight="medium" textTransform="uppercase" mb={2}>Contact</Text>
                    <Text fontFamily="var(--secondary-font)" textTransform="uppercase">Email</Text>
                        <Text fontFamily="var(--secondary-font)" textTransform="lowercase">
                            evehartwell@gmail.com</Text>
                </Box>
            </Flex>
        </Flex>
    );
};

export default CustomTable;
