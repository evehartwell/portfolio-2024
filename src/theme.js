import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    components: {
        Table: {
            baseStyle: {
                border: 'none',
            },
        },
        Th: {
            baseStyle: {
                border: 'none',
            },
        },
        Td: {
            baseStyle: {
                border: 'none',
            },
        },
        Button: {
            baseStyle: {
                border: 'none',
            },
        },
    },
});

export default theme;
