import React from 'react';
import { Flex, Image, IconButton, Link as ChakraLink } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'; 
import { IoDocumentAttachOutline } from "react-icons/io5";
import '../style.css';

const Footer = () => {
    return (
        <Flex
            as="footer"
            justify="space-between"
            align="center"
            p={4}
        >
            <Flex align="center">
                <Image 
                    src={`${process.env.PUBLIC_URL}/images/EH.svg`} 
                    alt="Logo" 
                    boxSize="8rem"
                    className="svg"
                />
            </Flex>
            <Flex>
                <ChakraLink href="https://www.linkedin.com/in/eve-hartwell/" isExternal>
                    <IconButton
                        icon={<FaLinkedin />}
                        aria-label="LinkedIn"
                        variant="ghost"
                        className="footer-icon"
                    />
                </ChakraLink>
                <ChakraLink href="https://github.com/evehartwell" isExternal>
                    <IconButton
                        icon={<FaGithub />}
                        aria-label="GitHub"
                        variant="ghost"
                        className="footer-icon"
                    />
                </ChakraLink>
                <ChakraLink href="mailto:evehartwell@gmail.com" isExternal>
                    <IconButton
                        icon={<MdAlternateEmail />}
                        aria-label="Email"
                        className="footer-icon"
                    />
                </ChakraLink>
                <ChakraLink href={`${process.env.PUBLIC_URL}/resume-2024.pdf`} isExternal>
                    <IconButton
                        icon={<IoDocumentAttachOutline />}
                        aria-label="Resume"
                        className="footer-icon"
                    />
                </ChakraLink>
            </Flex>
        </Flex>
    );
};

export default Footer;
