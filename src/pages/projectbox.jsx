import React from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../style.css';

const ProjectBox = ({ title, imageSrc, videoSrc, link }) => (
    <Link to={link}>
        <Flex
            direction={{ base: 'column', md: 'row' }}  
            wrap="wrap"  
            justify="space-between"
        >
            <Box className="project-box">
                {videoSrc ? (
                    <video className="project-media">
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <Image src={imageSrc} alt={title} className="project-image" />
                )}
                <Box className="project-text-overlay">
                    <Text className="project-text">{title}</Text>
                </Box>
            </Box>
        </Flex>
    </Link>
);

export default ProjectBox;
