import React from 'react'; // Importación de React
import "./Login.css"; // Estilo específico para el componente Login
import { Link } from 'react-router-dom'; // Navegación entre páginas
import Button from '@mui/material/Button'; // Botón estilizado de Material UI
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined'; // Ícono de contraseña
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'; // Ícono de usuario
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined'; // Ícono de mascota

function Login() {
  return (
    <div className="wrapper"> {/* Contenedor principal estilizado */}
      <form action=""> {/* Formulario para login */}
        <center><PetsOutlinedIcon className='icon' /></center> {/* Ícono de mascota centrado */}
        <h1>Login</h1> {/* Título del formulario */}
        <div className="inputbox"> {/* Contenedor para el campo de entrada */}
          <input type="text" placeholder='Username' required /> {/* Campo para el nombre de usuario */}
          <AccountCircleOutlinedIcon className='icon' /> {/* Ícono del usuario */}
        </div>
        <div className="inputbox"> {/* Contenedor para el campo de entrada */}
          <input type="Password" placeholder='Password' required /> {/* Campo para la contraseña */}
          <HttpsOutlinedIcon className='icon' /> {/* Ícono de la contraseña */}
        </div>

        <div className="rememberforgot"> {/* Sección para recordar contraseña y link de olvido */}
          <label>
            <input type="checkbox" /> {/* Checkbox para recordar credenciales */}
            Remember me
          </label>
          <a href="#">Forgot Password?</a> {/* Enlace para recuperación de contraseña */}
        </div>

        <Button variant="contained" sx={{ width: '100%' }}>Login</Button> {/* Botón de inicio de sesión */}
        <div className="register-link"> {/* Sección de registro */}
          <p>
            Don't have an account? <Link to="/register">Register</Link> {/* Enlace al registro */}
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login; // Exportación del componente para ser utilizado en otros archivos