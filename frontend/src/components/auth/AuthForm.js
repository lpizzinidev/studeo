import { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import TextInput from '../views/TextInput';
import { ErrorInfo } from '../views/ErrorInfo';

const initialFormData = {
  email: '',
  password: '',
  confirmPassword: '',
};

const AuthForm = ({ isLogin }) => {
  const history = useHistory();

  const [formData, setFormData] = useState(initialFormData);

  const { signin, signup, errors, clearError } = useContext(AuthContext);

  useEffect(() => {
    clearError();
  }, [isLogin]);

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
    clearError();
  };

  return (
    <div>
      <h2 className='heading-2'>{isLogin ? 'Login' : 'Register'}</h2>
      <form className='auth-form' onSubmit={handleSubmit}>
        <ErrorInfo errors={errors} />
        <TextInput
          type='email'
          name='email'
          title='E-mail'
          dataTestId='email'
          onChange={handleChange}
        />
        <TextInput
          type='password'
          name='password'
          title='Password'
          dataTestId='password'
          onChange={handleChange}
        />
        {isLogin || (
          <TextInput
            type='password'
            name='confirmPassword'
            title='Confirm password'
            onChange={handleChange}
            dataTestId='confirm-password'
          />
        )}
        <input
          type='submit'
          className='button auth-submit'
          value={isLogin ? 'LOGIN' : 'REGISTER'}
          data-testid='login-button'
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
