export const Fab = ({ icon, alt, onClick }) => {
  return (
    <button type='button' className='fab' onClick={onClick} data-testid='fab'>
      <img src={icon} alt={alt} />
    </button>
  );
};
