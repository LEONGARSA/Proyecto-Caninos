import React, { useState } from 'react';
import './RegistroAdmin.css';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

//import {TextField} from '@mui/material';

const RegistroAdmin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    rol:'',
  });

  const [formErrors, setFormErrors] = useState({});
  
  const navigate = useNavigate(); // Crea la función para navegar

  const validate = () => {
    const errors = {};
    if (!formData.username) errors.username = <Alert severity="error">Usuario Obligatorio</Alert>;
    if (!formData.password) errors.password = <Alert severity="error">Contraseña Obligatoria</Alert>;
    if (!formData.firstName) errors.firstName = <Alert severity="error">Los nombres son obligatorios</Alert>;
    if (!formData.lastName) errors.lastName = <Alert severity="error">Los apellidos son obligatorios</Alert>;
    if (!formData.phone) errors.phone = <Alert severity="error">El teléfono es obligatorio</Alert>;
    if (!formData.email) errors.email = <Alert severity="error">El correo electrónico es obligatorio</Alert>;
    setFormErrors(errors);
    if (!formData.rol) errors.rol = <Alert severity="error">Selecciona un rol</Alert>;
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Acción después de la validación (simulación de registro exitoso)
      console.log('Formulario enviado');

      // Redirigir al login
      navigate('/login'); // Redirige a la página de login
    }
  };

return (
    <form className="wrapper" onSubmit={handleSubmit}>
        <h1>Registro Administrativo</h1>
        <div className="form-container">

        <div className="form-column">
            <div className="form-group">
            <div className="inputbox">
                <input
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                value={formData.username}
                onChange={handleChange}
                />
                <AccountCircleOutlinedIcon className="icon" />
            </div>
            {formErrors.username && <span className="error">{formErrors.username}</span>}
            </div>
    
            <div className="form-group">
            <div className="inputbox">
                <input
                type="text"
                name="firstName"
                placeholder="Ingrese sus nombres"
                value={formData.firstName}
                onChange={handleChange}
                />
                <AccountCircleOutlinedIcon className="icon" />
            </div>
            {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
            </div>
    
            <div className="form-group">
            <div className="inputbox">
                <input
                type="email"
                name="email"
                placeholder="Ingrese su correo electrónico"
                value={formData.email}
                onChange={handleChange}
                />
                <EmailOutlinedIcon className="icon" />
            </div>
            {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>
        </div>
    
        <div className="form-column">
            <div className="form-group">
            <div className="inputbox">
                <input
                type="text"
                name="lastName"
                placeholder="Ingrese sus apellidos"
                value={formData.lastName}
                onChange={handleChange}
                />
                <AccountCircleOutlinedIcon className="icon" />
            </div>
            {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
            </div>
    
            <div className="form-group">
            <div className="inputbox">
                <input
                type="text"
                name="phone"
                placeholder="Ingrese su teléfono"
                value={formData.phone}
                onChange={handleChange}
                />
                <LocalPhoneOutlinedIcon className="icon" />
            </div>
            {formErrors.phone && <span className="error">{formErrors.phone}</span>}
            </div>
    
            <div className="form-group">
            <div className="inputbox">
                <input
                type="password"
                name="password"
                placeholder="Ingrese su contraseña"
                value={formData.password}
                onChange={handleChange}
                />
                <HttpsOutlinedIcon className="icon" />
            </div>
            {formErrors.password && <span className="error">{formErrors.password}</span>}
            </div>

        </div>
        <div className="form-group">
            
            <div className="inputbox">
                <select
                    name="rol"
                    value={formData.rol}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecciona un rol</option>
                    <option value="Pequeño">Usuario</option>
                    <option value="Mediano">Asesor de Ventas</option>
                    
                </select>
            </div>
        </div>
        </div>

    
        <button type="submit">Registrarse</button>
    </form>
  );

};

  


export default RegistroAdmin;