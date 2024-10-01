import ReactDOM from 'react-dom/client';

import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import { store } from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
      <Provider store={store}>

        <App />

      </Provider>

    </BrowserRouter>


  </ChakraProvider>

);


