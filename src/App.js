import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import theme from './MuiTheme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';




function App() {
  //Lógica
  const saludo = 'Hola chicos!'

  return (
    // <ThemeProvider theme={theme}>
    //     <NavBar/>
    //     <ItemListContainer />
    //     <ItemCount valorInicial={1} stock={5} onAdd={onAdd}/>
    // </ThemeProvider>
    <>
      <BrowserRouter>
      {/* Aqui van los componentes que van en todas las rutas */}
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer saludo={saludo} greeting='hello' />}/>
          <Route path='/categoria/:categoriaId' element={ <ItemListContainer saludo={saludo} greeting='hello' />}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>

  );
}

export default App;
