// Importa las dependencias de React
import React, { useState } from 'react';
import './styles.css';

// Componente principal
function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleToLogin = () => setIsActive(false);
  const toggleToRegister = () => setIsActive(true);

  return (
    <div className="auth-container">
      <div className={`container ${isActive ? 'active' : ''}`}>
        <RegisterForm />
        <LoginForm />
        <TogglePanel toggleToLogin={toggleToLogin} toggleToRegister={toggleToRegister} />
      </div>
    </div>
  );
}

// Componente de formulario de Registro
function RegisterForm() {
  return (
    <div className="form-container sign-up">
      <form>
        <h1>Registrarse</h1>
        <div className="social-icons">
          <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
        </div>
        <span>O usa tu correo para registrarte</span>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button>Iniciar Sesion</button>
      </form>
    </div>
  );
}

// Componente de formulario de Inicio de Sesión
function LoginForm() {
  return (
    <div className="form-container sign-in">
      <form>
        <h1>Iniciar Sesion</h1>
        <div className="social-icons">
          <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
        </div>
        <span>O usa tu correo para ingresar</span>
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <a href="#">Olvidaste tu contraseña?</a>
        <button>Iniciar Sesion</button>
      </form>
    </div>
  );
}

// Componente de Panel de Alternancia (Toggle)
function TogglePanel({ toggleToLogin, toggleToRegister }) {
  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Bienvenido de nuevo!</h1>
          <p>Ingresa tus datos para completar el registro</p>
          <button className="hidden" onClick={toggleToLogin}>Iniciar Sesion</button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Hola, Amigo!</h1>
          <p>Ingresa tus datos para completar el registro</p>
          <button className="hidden" onClick={toggleToRegister}>Registrarse</button>
        </div>
      </div>
    </div>
  );
}


export default App;