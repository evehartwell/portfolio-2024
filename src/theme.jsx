import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        primary: {
        1: '#2C2C2C',
        2: '#FFFFFF',
        3: '#686868',
        4: '#F8F8F8',
        5: '#DBDBDB'
        },
    },
    fonts: {
        heading: 'IBM Plex Mono, sans-serif',
        body: 'IBM Plex Mono, sans-serif',
        accent: 'Erode, serif',
    },
    styles: {
        global: {
            body: {
                bg: 'primary.2',
                color: 'primary.1',
                lineHeight: '1.4rem',
                letterSpacing: '-0.6px',
            },
            '*': {
                padding: 0,
                margin: 0,
            },
            '*:focus': {
                bg: 'none !important',
            },
        },
    },
    components: {
        Text: {
            baseStyle: {
            fontSize: { base: 'xs', sm: 'sm' },
            },
        },
        Heading: {
            baseStyle: {
            fontSize: { base: 'lg', sm: 'xl' },
            },
        },
        Button: {
            baseStyle: {
                fontSize: { base: 'xs', sm: 'sm' },
                borderRadius: '2px',
                fontWeight: '400',
                color: "primary.2", 
                borderColor: 'primary.5',
                _focus: {
                    bg: 'primary.4',
                    color: 'primary.3',
                },
            },
        },
    },
});

export default theme;