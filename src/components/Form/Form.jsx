import { useState } from 'react';
import './Form.css';

export const Form = () => {
  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [showValues, setShowValues] = useState(false);

  const renderUser = () => {
    console.log(userData);
  };

  return (
    <>
      <form className="form">
        <p>{showValues ? userData.email : null}</p>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          onChange={(event) => setUserData({ ...userData, email: event.target.value })}
        />
        <p>{showValues ? userData.password : null}</p>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          onChange={(event) => setUserData({ ...userData, password: event.target.value })}
        />
        <button onClick={() => setShowValues(true)}>Iniciar sesión</button>
      </form>
    </>
  );
};
