import '@fontsource/reenie-beanie/400.css';
import '@fontsource/bungee/400.css';

import { Center, ChakraProvider, Grid, GridItem } from '@chakra-ui/react';

import Calculator from './components/calculator';
import Textbox from './components/textbox';
import theme from './theme.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center>
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
          ]}
        >
          {' '}
          <GridItem
            bg="blue.400"
            h={['40vh', '40vh', '100vh']}
            w={['100vw', '100vw', '50vw']}
          >
            <Center>
              <Textbox />
            </Center>
          </GridItem>
          <GridItem
            h={['50vh', '50vh', '100vh']}
            w={['100vw', '100vw', '50vw']}
          >
            <Center>
              <Calculator />
            </Center>
          </GridItem>
        </Grid>
      </Center>
    </ChakraProvider>
  );
}

export default App;
