import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado.
import './FormValidation.css'; // Importa el archivo de estilos CSS para el formulario.
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined'; // Icono para campos relacionados con contraseñas.
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'; // Icono para nombres o usuarios.
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'; // Icono para el teléfono.
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'; // Icono para el correo electrónico.
import { useNavigate } from 'react-router-dom'; // Hook para navegar entre rutas.
import Alert from '@mui/material/Alert'; // Componente de Material UI para mostrar alertas estilizadas.

import { registerUser } from '../api/UserApi.jsx'; // Importa la función para registrar usuarios desde la API.

// Componente principal del formulario de validación
const FormValidation = () => {
  const [formData, setFormData] = useState({ // Estado para almacenar los datos del formulario.
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    registrationDate: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({}); // Estado para almacenar los mensajes de error de validación.

  const navigate = useNavigate(); // Hook para redirigir al usuario después de un registro exitoso.

  // Función para validar los datos del formulario
  const validate = () => {
    const errors = {}; // Objeto para almacenar errores encontrados.

    // Validación para cada campo del formulario.
    if (!formData.username) errors.username = <Alert severity="error">Usuario Obligatorio</Alert>; // Validar usuario.
    if (!formData.password) errors.password = <Alert severity="error">Contraseña Obligatoria</Alert>; // Validar contraseña.
    if (formData.password !== formData.confirmPassword) // Validar que las contraseñas coincidan.
      errors.confirmPassword = <Alert severity="error">Las contraseñas no coinciden</Alert>;
    if (!formData.firstName) errors.firstName = <Alert severity="error">Los nombres son obligatorios</Alert>; // Validar nombres.
    if (!formData.lastName) errors.lastName = <Alert severity="error">Los apellidos son obligatorios</Alert>; // Validar apellidos.
    if (!formData.phone) errors.phone = <Alert severity="error">El teléfono es obligatorio</Alert>; // Validar teléfono.
    if (!formData.email) errors.email = <Alert severity="error">El correo electrónico es obligatorio</Alert>; // Validar correo.
    
    setFormErrors(errors); // Actualizar el estado con los errores encontrados.
    return Object.keys(errors).length === 0; // Retorna true si no hay errores.
  };

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Actualiza el estado con los nuevos valores.
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario (recargar la página).
    if (validate()) { // Si la validación es exitosa:
      try {
        const response = await registerUser(formData); // Llama a la función para registrar al usuario.

        if (response) { // Si el registro es exitoso:
          console.log('Usuario creado exitosamente:', response);
          navigate('/login'); // Redirige al usuario a la página de inicio de sesión.
        } else { // Si ocurre un error en el servidor:
          console.error('Error al crear el usuario.');
          alert('No se pudo registrar el usuario. Intente nuevamente.');
        }
      } catch (error) { // Captura errores durante la solicitud.
        console.error('Error en la solicitud:', error);
        alert('Ocurrió un error al procesar la solicitud.');
      }
    }
  };

  // Renderizado del formulario
  return (
    <form className="wrapper" onSubmit={handleSubmit}> {/* Envoltura del formulario con manejador de envío. */}
      <h1>Registro Usuarios</h1> {/* Título del formulario. */}

      {/* Campo de Nombre de Usuario */}
      <div className="inputbox">
        <input type="text" name="username" placeholder='Nombre de usuario' value={formData.username} onChange={handleChange} />
        <AccountCircleOutlinedIcon className='icon'/> {/* Ícono del campo. */}
      </div>
      {formErrors.username && <span className="error">{formErrors.username}</span>} {/* Mensaje de error si existe. */}

      {/* Campo de Contraseña */}
      <div className="inputbox">
        <input type="password" name="password" placeholder='Ingrese su contraseña' value={formData.password} onChange={handleChange} />
        <HttpsOutlinedIcon className='icon'/> {/* Ícono del campo. */}
      </div>
      {formErrors.password && <span className="error">{formErrors.password}</span>} {/* Mensaje de error si existe. */}

      {/* Campo de Confirmar Contraseña */}
      <div className="inputbox">
        <input type="password" name="confirmPassword" placeholder='Confirme su contraseña' value={formData.confirmPassword} onChange={handleChange} />
        <HttpsOutlinedIcon className='icon'/> {/* Ícono del campo. */}
      </div>
      {formErrors.confirmPassword && <span className="error">{formErrors.confirmPassword}</span>} {/* Mensaje de error si existe. */}

      {/* Campo de Nombres */}
      <div className="inputbox">
        <input type="text" name="firstName" placeholder='Ingrese sus nombres' value={formData.firstName} onChange={handleChange} />
        <AccountCircleOutlinedIcon className='icon'/> {/* Ícono del campo. */}
      </div>
      {formErrors.firstName && <span className="error">{formErrors.firstName}</span>} {/* Mensaje de error si existe. */}

      {/* Campo de Apellidos */}
      <div className="inputbox">
        <input type="text" name="lastName" placeholder='Ingrese sus apellidos' value={formData.lastName} onChange={handleChange} />
        <AccountCircleOutlinedIcon className='icon'/> {/* Ícono del campo. */}
      </div>
      {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}  {/* Mensaje de error si existe. */}

      {/* Campo de Teléfono */}
      <div className="inputbox">
        <input type="text" name="phone" placeholder='Ingrese su teléfono' value={formData.phone} onChange={handleChange} />
        <LocalPhoneOutlinedIcon className='icon'/>  {/* Ícono del campo. */}
      </div>
      {formErrors.phone && <span className="error">{formErrors.phone}</span>}  {/* Mensaje de error si existe. */}

      {/* Campo de Fecha de Registro */}
      <div className="inputbox">
        <input type="date" name="registrationDate" value={formData.registrationDate} onChange={handleChange} />
      </div>

      {/* Campo de Correo Electrónico */}
      <div className="inputbox">
        <input type="email" name="email" placeholder="Ingrese su correo electrónico" value={formData.email} onChange={handleChange} />
        <EmailOutlinedIcon className='icon'/> {/* Ícono del campo. */}
      </div>
      {formErrors.email && <span className="error">{formErrors.email}</span>} {/* Mensaje de error si existe. */}

      <button type="submit">Registrarse</button> {/* Botón para enviar el formulario. */}
    </form>
  );
};

export default FormValidation; // Exporta el componente.