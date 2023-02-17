import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "src/styles/global.css"
import Context from 'src/context/context';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Context>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Context>
    </>
  );
}
