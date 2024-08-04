import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import '../style.css';

const ProjectBox = ({ title, imageSrc, videoSrc }) => (
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
);

export default ProjectBox;
