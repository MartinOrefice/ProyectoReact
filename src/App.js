import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Promesas from './tests/Promesas';
import theme from './MuiTheme';



function App() {
  //Lógica
  
  const onAdd=()=>{
    console.log("Item agregado al carrito");
  }

  return (
    <ThemeProvider theme={theme}>
        <NavBar/>
        <ItemListContainer greeting='¡Bienvenidos a mi tienda online!'/>
        <ItemCount valorInicial={1} stock={5} onAdd={onAdd}/>
        <Promesas/>
    </ThemeProvider>
  );
}

export default App;
