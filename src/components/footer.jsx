import React from 'react';
import { Flex, Text, IconButton, Tooltip, Link as ChakraLink } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'; 

const Footer = () => {
    return (
        <Flex
            flexDirection={{ base: 'column', md: 'row'}}
            as="footer"
            justify="space-between"
            align="center"
            mt={4}
        >
            <Flex align="center">
                <Text color="primary.3">Designed and built by Eve Hartwell</Text>
            </Flex>
            <Flex gap={4}>
                <ChakraLink href="https://www.linkedin.com/in/eve-hartwell/" isExternal>
                    <Tooltip label="LinkedIn" aria-label="LinkedIn tooltip" backgroundColor="primary.1" borderRadius={5}>
                        <IconButton
                            icon={<FaLinkedin />}
                            aria-label="LinkedIn"
                            variant="ghost"
                            bg="transparent"
                            _hover={{ bg: "transparent"}}
                        />
                    </Tooltip>
                </ChakraLink>
                <ChakraLink href="https://github.com/evehartwell" isExternal>
                    <Tooltip label="Github" aria-label="Github tooltip" backgroundColor="primary.1" borderRadius={5}>
                        <IconButton
                            icon={<FaGithub />}
                            aria-label="GitHub"
                            variant="ghost"
                            bg="transparent"
                            _hover={{ bg: "transparent" }}
                        />
                    </Tooltip>
                </ChakraLink>
                <ChakraLink href="mailto:evehartwell@gmail.com" isExternal>
                    <Tooltip label="Email" aria-label="Email tooltip" backgroundColor="primary.1" borderRadius={5}>
                        <IconButton
                            icon={<MdAlternateEmail />}
                            aria-label="Email"
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
