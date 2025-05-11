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
                lineHeight: '1.2rem',
                letterSpacing: '-0.6px',
            },
            '*': {
                padding: 0,
                margin: 0,
            },
            '*:focus': {
                outline: 'none !important',
                boxShadow: 'none !important',
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
                color: "primary.3",
                bg: 'primary.4',
                borderColor: 'primary.5',
                fontWeight: '400',
                _focus: {
                    outline: 'none', 
                },
            },
            variants: {
                ghost: {
                    _focus: {
                        outline: 'none',  
                    },
                    _hover: {
                        bg: 'primary.5',
                    }
                },
            },
        },
    },
});

export default theme;