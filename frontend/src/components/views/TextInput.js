const TextInput = ({ type, title, name, value, onChange, dataTestId }) => {
  return (
    <div data-testid={dataTestId}>
      <span className='text-body-2'>{title}</span>
      <input
        type={type || 'text'}
        name={name}
        value={value}
        className='input-text-field'
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
