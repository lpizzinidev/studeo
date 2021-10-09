export const ErrorInfo = ({ errors }) => {
  if (errors.length === 0) return <></>;

  return (
    <ul className='list-error'>
      <li key={errors[0]}>{errors[0]}</li>
    </ul>
  );
};
