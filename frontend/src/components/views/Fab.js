export const Fab = ({ icon, alt, onClick }) => {
  return (
    <button type='button' className='fab' onClick={onClick}>
      <img src={icon} alt={alt} />
    </button>
  );
};
