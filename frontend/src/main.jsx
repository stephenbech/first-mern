import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "@/components/ui/provider";
// import {  ColorModeScript } from '@chakra-ui/react'
// import theme from './theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
