import { Link } from 'react-router-dom';

export const Fab = ({ icon, destination }) => {
  return (
    <Link to={destination}>
      <button type='button' className='fab'>
        <img src={icon} alt={destination} />
      </button>
    </Link>
  );
};
