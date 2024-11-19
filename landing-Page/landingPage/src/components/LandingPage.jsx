import * as React from 'react'; // Importación de React
import PropTypes from 'prop-types'; // Validación de tipos de propiedades
import {
  AppBar, // Barra de navegación superior
  Box, // Contenedor flexible
  Card, // Tarjeta para mostrar contenido
  CardContent, // Contenido de la tarjeta
  CardMedia, // Imagen dentro de la tarjeta
  CssBaseline, // Reinicio de estilos base
  Divider, // Separador visual
  Drawer, // Menú lateral
  IconButton, // Botón con ícono
  List, // Lista de elementos
  ListItem, // Elemento de la lista
  ListItemButton, // Botón dentro del elemento de la lista
  ListItemText, // Texto del elemento de la lista
  Toolbar, // Contenedor para los elementos de la barra de navegación
  Typography, // Componente para texto
  Button, // Botón estilizado
} from '@mui/material'; // Componentes de Material UI
import MenuIcon from '@mui/icons-material/Menu'; // Ícono del menú
import { Link } from 'react-router-dom'; // Navegación entre páginas

import doberman from '../assets/img/doberman.png'; // Imagen de un Doberman
import golden from '../assets/img/golden.png'; // Imagen de un Golden Retriever
import pastorAleman from '../assets/img/pastorAleman.png'; // Imagen de un Pastor Alemán

const drawerWidth = 240; // Ancho del menú lateral
const navItems = ['About', 'Contact', 'Login']; // Elementos de navegación

// Componente para las tarjetas de perros
function DogCard({ name, description, image, alt }) {
  return (
    <Box sx={{ margin: 2 }}> {/* Margen alrededor de cada tarjeta */}
      <Card
        sx={{
          width: 420, // Ancho de la tarjeta
          background: 'transparent', // Fondo transparente
          border: '2px solid rgba(255, 255, 255, 0.2)', // Borde semitransparente
          backdropFilter: 'blur(40px)', // Desenfoque de fondo
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Sombra ligera
          borderRadius: '30px', // Bordes redondeados
          transition: 'transform 0.3s, box-shadow 0.3s', // Animación en hover
          '&:hover': { // Estilo al pasar el mouse
            transform: 'scale(1.05)', // Escala la tarjeta
            boxShadow: 'none', // Sin sombra al hacer hover
            filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))', // Sombra alternativa
          },
        }}
      >
        <CardMedia component="img" height="240" image={image} alt={alt} /> {/* Imagen del perro */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: 'inherit' }}>
            {name} {/* Nombre del perro */}
          </Typography>
          <Typography variant="body2" sx={{ color: 'inherit' }}>
            {description} {/* Descripción del perro */}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

// Página principal
function LandingPage(props) {
  const { window } = props; // Propiedad de ventana para el contenedor del menú
  const [mobileOpen, setMobileOpen] = React.useState(false); // Estado del menú móvil

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState); // Alterna el estado del menú móvil
  };

  // Información de los perros
  const dogs = [
    {
      name: 'Doberman',
      description: 'Es un perro dócil, cariñoso y muy apegado a su familia, pero a la vez valiente y seguro de sí mismo.',
      image: doberman,
      alt: 'doberman',
    },
    {
      name: 'Golden Retriever',
      description: 'Es un perro dócil, cariñoso y muy apegado a su familia, ideal para hogares con niños.',
      image: golden,
      alt: 'golden',
    },
    {
      name: 'Pastor Alemán',
      description: 'Es un perro leal, valiente y versátil, ampliamente utilizado en trabajos policiales y de rescate.',
      image: pastorAleman,
      alt: 'pastorAleman',
    },
  ];

  // Menú lateral
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Tu Mejor Amigo {/* Título del menú */}
      </Typography>
      <Divider /> {/* Línea divisoria */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={
                  <Link to={`/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {item} {/* Elemento de navegación */}
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined; // Contenedor del menú

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Diseño en columna
        minHeight: '100vh', // Altura mínima
        background: 'transparent', // Fondo transparente
        color: 'aliceblue', // Color del texto
        padding: '30px 40px', // Espaciado interno
      }}
    >
      <CssBaseline /> {/* Reinicio de estilos base */}
      <AppBar
        component="nav"
        sx={{
          height: '80px', // Altura de la barra
          background: 'transparent', // Fondo transparente
          boxShadow: 'none', // Sin sombra
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }} // Solo en pantallas pequeñas
          >
            <MenuIcon /> {/* Ícono del menú */}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight: 'bold', fontSize: '2rem' }}
          >
            Tu Mejor Amigo {/* Título */}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex', gap: '8px' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: '#fff',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                    background: 'transparent',
                    transform: 'scale(1.05)',
                  },
                  border: '0.5px solid white',
                }}
              >
                <Link to={`/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item} {/* Enlace de navegación */}
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
            keepMounted: true, // Mejora el rendimiento en pantallas móviles
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
  window: PropTypes.func, // Propiedad opcional para el contenedor
};

export default LandingPage;