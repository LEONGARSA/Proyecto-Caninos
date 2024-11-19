import React, { useState } from 'react';
import './FormValidation.css';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

import { registerUser } from '../api/UserApi.jsx';

//import {TextField} from '@mui/material';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    registrationDate: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({});
  
  const navigate = useNavigate(); // Crea la función para navegar

  const validate = () => {
    const errors = {};
    if (!formData.username) errors.username = <Alert severity="error">Usuario Obligatorio</Alert>;
    if (!formData.password) errors.password = <Alert severity="error">Contraseña Obligatoria</Alert>;
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = <Alert severity="error">Las contraseñas no coinciden</Alert>;
    if (!formData.firstName) errors.firstName = <Alert severity="error">Los nombres son obligatorios</Alert>;
    if (!formData.lastName) errors.lastName = <Alert severity="error">Los apellidos son obligatorios</Alert>;
    if (!formData.phone) errors.phone = <Alert severity="error">El teléfono es obligatorio</Alert>;
    if (!formData.email) errors.email = <Alert severity="error">El correo electrónico es obligatorio</Alert>;
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Llama a la función registerUser con los datos del formulario
        const response = await registerUser(formData);
  
        if (response) {
          console.log('Usuario creado exitosamente:', response);
  
          // Redirigir al login
          navigate('/login');
        } else {
          console.error('Error al crear el usuario.');
          alert('No se pudo registrar el usuario. Intente nuevamente.');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Ocurrió un error al procesar la solicitud.');
      }
    }
  };

return (
    <form className="wrapper" onSubmit={handleSubmit}>
      <h1>Registro Usuarios</h1>

      <div className="inputbox">
        <input type="text" name="username" placeholder='Nombre de usuario' value={formData.username} onChange={handleChange} />
        <AccountCircleOutlinedIcon className='icon'/>
      </div>
      {formErrors.username && <span className="error">{formErrors.username}</span>}

      <div className="inputbox">
        <input type="password" name="password" placeholder='Ingrese su contraseña' value={formData.password} onChange={handleChange} />
        <HttpsOutlinedIcon className='icon'/>
      </div>
      {formErrors.password && <span className="error">{formErrors.password}</span>}

      <div className="inputbox">
        <input type="password" name="confirmPassword" placeholder='Confirme su contraseña' value={formData.confirmPassword} onChange={handleChange} />
        <HttpsOutlinedIcon className='icon'/>
      </div>
      {formErrors.confirmPassword && <span className="error">{formErrors.confirmPassword}</span>}

      <div className="inputbox">
        <input type="text" name="firstName" placeholder='Ingrese sus nombres' value={formData.firstName} onChange={handleChange} />
        <AccountCircleOutlinedIcon className='icon'/>
      </div>
      {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}

      <div className="inputbox">
        <input type="text" name="lastName" placeholder='Ingrese sus apellidos' value={formData.lastName} onChange={handleChange} />
        <AccountCircleOutlinedIcon className='icon'/>
      </div>
      {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}

      <div className="inputbox">
        <input type="text" name="phone" placeholder='Ingrese su teléfono' value={formData.phone} onChange={handleChange} />
        <LocalPhoneOutlinedIcon className='icon'/>
      </div>
      {formErrors.phone && <span className="error">{formErrors.phone}</span>}

      <div className="inputbox">
        <input type="date" name="registrationDate" value={formData.registrationDate} onChange={handleChange} />
      </div>

      <div className="inputbox">
        <input type="email" name="email" placeholder="Ingrese su correo electrónico" value={formData.email} onChange={handleChange} />
        <EmailOutlinedIcon className='icon'/>
      </div>
      {formErrors.email && <span className="error">{formErrors.email}</span>}

      <button type="submit">Registrarse</button>
    </form>
  );

};

  


export default FormValidation;