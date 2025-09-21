import { useState } from 'react'
import { createTheme } from '@mui/material/styles';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WeddingInvitation from './WeddingInvitation';

import { ThemeProvider, CssBaseline, } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  const theme = createTheme({
    typography: {
      fontFamily: 'Raleway, sans-serif',
      headerFont: {
        fontFamily: 'Playfair Display, serif',
        fontSize: '1rem',
      },
      bodyFont: {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '0.8rem',
      },
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
