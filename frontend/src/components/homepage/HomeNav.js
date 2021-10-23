import { Link } from 'react-router-dom';

const HomeNav = () => {
  return (
    <div className='home-navbar'>
      <Link to='/signin'>
        <input
          type='button'
          className='text-button mr-15'
          value='LOG IN'
          data-testid='signin-button'
        />
      </Link>
      <Link to='/signup'>
        <input
          type='button'
          className='button'
          value='SIGN UP'
          data-testid='signup-button'
        />
      </Link>
    </div>
  );
};

export default HomeNav;
