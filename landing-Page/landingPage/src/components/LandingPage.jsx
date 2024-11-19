import * as React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,

} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import doberman from '../assets/img/doberman.png';
import golden from '../assets/img/golden.png';
import pastorAleman from '../assets/img/pastorAleman.png';

const drawerWidth = 240;
const navItems = ['About', 'Contact', 'Login'];

// Componente para las tarjetas de perros
function DogCard({ name, description, image, alt }) {
  return (
    <Box sx={{ margin: 2 }}>
      <Card
        sx={{
          width: 420,
          background: 'transparent',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(40px)',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          color: 'white',
          borderRadius: '30px',
          padding: '30px 40px',
          transition: 'transform 0.3s, box-shadow 0.3s',
          willChange: 'boxShadow, transform',
                      '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: "none", // Desactiva box-shadow si afecta el texto
          filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))", // Usa una alternativa con filter
          backfaceVisibility: "visible", // Asegura claridad del texto
                      },
        }}
      >       

          <CardMedia component="img" height="240" image={image} alt={alt} />
        
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'inherit' }}>
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'inherit' }}>
              {description}
            </Typography>
          </CardContent>

      </Card>
    </Box>
  );
}

function LandingPage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const dogs = [
    {
      name: 'Doberman',
      description:
        'Es un perro dócil, cariñoso y muy apegado a su familia, pero a la vez valiente y seguro de sí mismo.',
      image: doberman,
      alt: 'doberman'
    },
    {
      name: 'Golden Retriever',
      description:
        'Es un perro dócil, cariñoso y muy apegado a su familia, ideal para hogares con niños. Requiere ejercicio regular y entrenamiento básico.',
      image: golden,
      alt: 'golden'
    },
    {
      name: 'Pastor Alemán',
      description:
        'Es un perro leal, valiente y versátil, ampliamente utilizado en trabajos policiales y de rescate. Ideal para dueños activos.',
      image: pastorAleman,
      alt: 'pastorAleman'
    },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Tu Mejor Amigo
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={<Link to={`/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>{item}</Link>} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh', 
        background: 'transparent', 
        color: 'aliceblue', 
        padding: '30px 40px' 
      }}
    >
    <CssBaseline />
    <AppBar 
      component="nav" 
      sx={{ 
        height: '80px', 
        background: 'transparent',  // Fondo transparente
        boxShadow: 'none'  // Eliminar sombra (si prefieres que no haya sombra)
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' }}}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },fontWeight: 'bold', fontSize:'2rem' }}>
          Tu Mejor Amigo
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'flex', gap:'8px' }}}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#fff', transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
              backfaceVisibility: "visible", // Asegura claridad del texto
              background:'transparent',
              transform: 'scale(1.05)'
              },
              border:'0.5px solid white',
            
              }}>
              <Link to={`/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item}
              </Link>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {dogs.map((dog, index) => (
            <DogCard
              key={index}
              name={dog.name}
              description={dog.description}
              image={dog.image}
              alt={dog.alt}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

LandingPage.propTypes = {
  window: PropTypes.func,
};

export default LandingPage;