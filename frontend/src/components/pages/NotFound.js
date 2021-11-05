import notFoundLogo from '../../assets/img/404.png';

export const NotFound = () => {
  return (
    <div className='not-found-container'>
      <img src={notFoundLogo} alt='Not found' className='logo-small' />
      <h1 className='heading-1'>Page not found</h1>
      <p className='subtitle'>Looks like you are lost</p>
    </div>
  );
};
