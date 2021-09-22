import noDataLogo from '../../assets/img/no-data.png';

export const NoData = ({ text }) => {
  return (
    <div className='no-data-container'>
      <img src={noDataLogo} alt={text} className='logo-small' />
      <p className='text-body-2'>{text}</p>
    </div>
  );
};
