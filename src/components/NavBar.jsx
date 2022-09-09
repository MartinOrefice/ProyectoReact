import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const pages = [{enlace:'/categoria/nuevos', nombre:'Nuevos'}, {enlace:'/categoria/promociones', nombre:'Promociones'}, {enlace:'/categoria/usados', nombre:'Usados'}];


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  


  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalMallIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to='/' className='links' style={{color:'white', textDecoration:'none'}}>
          <Typography
            variant="h6"
            noWrap
            
            
            sx={{
              mr: 50,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            E-Commerce
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.nombre} onClick={handleCloseNavMenu}>
                  <Link className='links' style={{color:'black', textDecoration:'none'}} to={page.enlace}>{page.nombre}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalMallIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            E-Commerce
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
                <MenuItem key={page.nombre} onClick={handleCloseNavMenu}>
                 <Link style={{color:'white', textDecoration:'none'}} to={page.enlace}>{page.nombre}</Link>
                </MenuItem>
              ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>

            <CartWidget counter={10}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
