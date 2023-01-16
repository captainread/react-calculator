import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  textStyles: {
    h1: {
      fontFamily: `"Bungee", sans-serif`,
      fontWeight: 'semibold',
      letterSpacing: '0.1rem',
      fontSize: '5xl',
    },
    h2: {
      fontFamily: `"Reenie Beanie", cursive`,
      fontWeight: 'semibold',
      fontSize: '4xl',
      ml: '10%',
      letterSpacing: '0.1rem',
    },
  },
});

export default theme;
