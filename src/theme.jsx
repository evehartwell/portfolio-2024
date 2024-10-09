import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        primary: {
        1: '#422D2D',
        2: '#F8F8F8',
        3: '#848484'
        },
    },
    fonts: {
        heading: 'Inter, sans-serif',
        body: 'Times Now, serif',
        accent: 'Old London, serif',
    },
    styles: {
        global: {
        body: {
            bg: 'linear-gradient(to bottom, rgba(225, 225, 225, 0.20) 2%, rgb(248, 248, 248) 98%)',
            color: 'primary.1',
            lineHeight: '2rem',
            letterSpacing: '-0.5px'
        },
        },
    },
    components: {
        Button: {
        baseStyle: {
            borderRadius: '30px',
            _hover: {
            bg: '#D6D6D6',
            },
        },
        variants: {
            outline: {
            color: 'primary.1',
            bg: 'transparent',
            border: '1px solid',
            borderColor: 'primary.1',
            },
        },
        },
    },
});

export default theme;