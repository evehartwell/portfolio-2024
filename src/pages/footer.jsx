import React from 'react';
import { Flex, Text, IconButton, Tooltip, Link as ChakraLink } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'; 
import { IoDocumentAttachOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <Flex
            flexDirection={{ base: 'column', md: 'row'}}
            as="footer"
            justify="space-between"
            align="center"
            p={2}
            mt={4}
        >
            <Flex align="center">
                <Text>Designed and built by Eve Hartwell</Text>
            </Flex>
            <Flex gap={4}>
                <ChakraLink href="https://www.linkedin.com/in/eve-hartwell/" isExternal>
                    <Tooltip label="LinkedIn" aria-label="LinkedIn tooltip" fontFamily="heading" backgroundColor="primary.1" textTransform="uppercase" borderRadius={5}>
                        <IconButton
                            icon={<FaLinkedin />}
                            aria-label="LinkedIn"
                            variant="ghost"
                            _hover={{ bg: "transparent"}}
                        />
                    </Tooltip>
                </ChakraLink>
                <ChakraLink href="https://github.com/evehartwell" isExternal>
                    <Tooltip label="Github" aria-label="Github tooltip" fontFamily="heading" backgroundColor="primary.1" textTransform="uppercase" borderRadius={5}>
                        <IconButton
                            icon={<FaGithub />}
                            aria-label="GitHub"
                            variant="ghost"
                            _hover={{ bg: "transparent" }}
                        />
                    </Tooltip>
                </ChakraLink>
                <ChakraLink href="mailto:evehartwell@gmail.com" isExternal>
                    <Tooltip label="Email" aria-label="Email tooltip" fontFamily="heading" backgroundColor="primary.1" textTransform="uppercase" borderRadius={5}>
                        <IconButton
                            icon={<MdAlternateEmail />}
                            aria-label="Email"
                            backgroundColor="none"
                            bg="transparent"
                            _hover={{ bg: "transparent" }}
                        />
                    </Tooltip>
                </ChakraLink>
                <ChakraLink href={`${process.env.PUBLIC_URL}/Hartwell-UX-Resume.pdf`} isExternal>
                    <Tooltip label="Resume" aria-label="Resume tooltip" fontFamily="heading" backgroundColor="primary.1" textTransform="uppercase" borderRadius={5}>
                        <IconButton
                            icon={<IoDocumentAttachOutline />}
                            aria-label="Resume"
                            backgroundColor="none"
                            bg="transparent"
                            _hover={{ bg: "transparent" }}
                        />
                    </Tooltip>
                </ChakraLink>
            </Flex>
        </Flex>
    );
};

export default Footer;
