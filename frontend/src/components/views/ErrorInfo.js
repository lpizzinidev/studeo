export const ErrorInfo = ({ errors }) => {
  if (!errors || errors.length === 0) return <></>;

  return (
    <ul className='list-error' data-testid='error-info'>
      <li key={errors[0]}>{errors[0]}</li>
    </ul>
  );
};
