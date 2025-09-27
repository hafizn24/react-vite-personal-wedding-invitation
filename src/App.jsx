import { useState } from 'react'
import { createTheme } from '@mui/material/styles';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WeddingInvitation from './WeddingInvitation';

import { ThemeProvider, CssBaseline, } from '@mui/material';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: '"Quintessential", serif',
      allVariants: {
        color: 'rgba(45, 46, 12, 0.87)',
      },
      secondaryFont: {
        fontFamily: '"Domine", serif',
        fontSize: '1rem',
      },
      sansSerifFont: {
        fontFamily: '"Roboto", sans-serif',
        fontSize: '1rem',
      },
      serifFont: {
        fontFamily: '"Playfair Display", serif',
        fontSize: '1rem',
        fontWeight: 500
      },
      altSerifFont: {
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: '1rem',
        fontWeight: 500
      },
      cursiveFont: {
        fontFamily: '"Parisienne", cursive',
        fontSize: '1rem',
        fontWeight: 400
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WeddingInvitation />
    </ThemeProvider >
  )
}

export default App
