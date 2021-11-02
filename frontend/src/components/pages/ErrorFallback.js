export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className='heading-1'>Something went wrong</h1>
      <p className='subtitle'>{error.message}</p>
      <button type='button' className='button' onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
};
