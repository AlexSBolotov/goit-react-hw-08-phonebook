import s from '../ContactForm/ContactForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <form className={s.wrapper} action="" onSubmit={onFormSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name..."
        required
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email..."
        required
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password..."
        required
      />
      <button className={s.button} type="submit">
        Register
      </button>
    </form>
  );
}
