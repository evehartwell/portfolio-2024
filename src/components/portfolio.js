import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import '../style.css';

const ProjectBox = ({ title, imageSrc }) => (
    <Box className="project-box">
        <Image src={imageSrc} alt={title} className="project-image" />
        <Box className="project-text-overlay">
            <Text className="project-text">{title}</Text>
        </Box>
    </Box>
);

export default ProjectBox;
