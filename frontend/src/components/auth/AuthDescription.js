import login from '../../assets/img/login.png';
import register from '../../assets/img/register.png';

const AuthDescription = ({ isLogin }) => {
  return (
    <div>
      <img
        src={isLogin ? login : register}
        className='logo'
        alt={isLogin ? 'Login' : 'Register'}
      />
      <p className='subtitle'>
        {isLogin
          ? 'Login to unlock your potential'
          : 'Register to keep track of your progress'}
      </p>
    </div>
  );
};

export default AuthDescription;
