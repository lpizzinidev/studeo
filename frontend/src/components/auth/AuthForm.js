import { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import TextInput from '../views/TextInput';

const initialFormData = {
  email: '',
  password: '',
  confirmPassword: '',
};

const AuthForm = () => {
  const history = useHistory();
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const { authErrors, signin, signup } = useContext(AuthContext);

  useEffect(() => {
    setIsLogin(location.pathname === '/signin');
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      signin(formData, history);
    } else {
      signup(formData, history);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className='heading-2'>Login</h2>
      {authErrors.length > 0 && (
        <ul className='list-error'>
          {authErrors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <form className='auth-form' onSubmit={handleSubmit}>
        <TextInput
          type='email'
          name='email'
          title='E-mail'
          onChange={handleChange}
        />
        <TextInput
          type='password'
          name='password'
          title='Password'
          onChange={handleChange}
        />
        {isLogin || (
          <TextInput
            type='password'
            name='confirmPassword'
            title='Confirm password'
            onChange={handleChange}
          />
        )}
        <input
          type='submit'
          className='button auth-submit'
          value={isLogin ? 'LOGIN' : 'REGISTER'}
        />
      </form>
      {isLogin ? (
        <p>
          Not registered?{' '}
          <Link to='/signup' className='link-text'>
            <strong>Create an account</strong>
          </Link>
        </p>
      ) : (
        <p>
          Already registered?{' '}
          <Link to='/signin' className='link-text'>
            <strong>Sign in</strong>
          </Link>
        </p>
      )}
    </div>
  );
};

export default AuthForm;
