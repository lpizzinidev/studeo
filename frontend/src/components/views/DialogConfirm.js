export const DialogConfirm = ({
  title,
  message,
  confirmAction,
  show,
  setShow,
}) => {
  const handleCancel = () => {
    setShow(false);
  };

  return (
    <div className={`modal ${show ? 'open' : ''}`}>
      <div className='modal-content'>
        <h1 className='heading-2'>{title}</h1>
        <div className='modal-body'>
          <p className='text-body-2'>{message}</p>
        </div>
        <div className='modal-footer'>
          <input
            type='button'
            className='text-button'
            value='CANCEL'
            onClick={handleCancel}
          />
          <input
            type='button'
            className='button'
            value='CONFIRM'
            onClick={confirmAction}
          />
        </div>
      </div>
    </div>
  );
};
