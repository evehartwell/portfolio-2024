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
        accent: 'Sloop, script',
    },
    styles: {
        global: {
            body: {
                bg: 'linear-gradient(to bottom, rgba(225, 225, 225, 0.20) 2%, rgb(248, 248, 248) 98%)',
                color: 'primary.1',
                lineHeight: '2rem',
                letterSpacing: '-0.5px'
            },
            '*': {
                padding: 0,
                margin: 0,
            },
        },
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: '30px',
                _focus: {
                    outline: 'transparent', 
                    boxShadow: 'none',
                },
            },
            variants: {
                ghost: {
                    _focus: {
                        outline: 'none',  
                        boxShadow: 'none', 
                    },
                    _hover: {
                        bg: '#D6D6D6',
                    }
                },
            },
        },
    },
});

export default theme;