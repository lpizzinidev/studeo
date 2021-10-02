import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import AuthForm from './AuthForm';
import AuthDescription from './AuthDescription';

const AuthContainer = () => {
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    setIsLogin(location.pathname === '/signin');
  }, [location]);

  return (
    <div className='auth-container'>
      <AuthForm isLogin={isLogin} />
      <AuthDescription isLogin={isLogin} />
    </div>
  );
};

export default AuthContainer;
