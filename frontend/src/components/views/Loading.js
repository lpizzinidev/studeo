export const Loading = ({ text }) => {
  return (
    <div className='loading-container'>
      <div className='lds-spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className='text-body-2'>{text}</p>
    </div>
  );
};
