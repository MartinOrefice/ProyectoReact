import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import theme from './MuiTheme';



function App() {
  //Lógica

  return (
    <ThemeProvider theme={theme}>
        <NavBar/>
        <ItemListContainer greeting='¡Bienvenidos a mi tienda online!'/>
    </ThemeProvider>
  );
}

export default App;
