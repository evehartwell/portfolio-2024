import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import theme from './theme'
import '/styles.css'

createRoot(document.getElementById('root')).render(
    <ChakraProvider theme={theme}>
        <StrictMode>
            <App />
        </StrictMode>
    </ChakraProvider>

)
