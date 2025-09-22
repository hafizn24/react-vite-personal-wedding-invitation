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
      fontFamily: '"Quintessential", serif',
      secondaryFont: {
        fontFamily: '"Domine", serif',
        fontSize: '1rem',
      },
      sansSerifFont: {
        fontFamily: '"Roboto", sans-serif',
        fontSize: '1rem',
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
