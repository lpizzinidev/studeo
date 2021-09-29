export const ErrorInfo = ({ errors }) => {
  if (errors.length === 0) return <></>;

  return (
    <ul className='list-error'>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );
};
