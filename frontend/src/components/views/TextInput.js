const TextInput = ({ type, title, name, value, onChange, dataTestId }) => {
  return (
    <div>
      <span className='text-body-2'>{title}</span>
      <input
        type={type || 'text'}
        name={name}
        value={value}
        className='input-text-field'
        onChange={onChange}
        data-testid={dataTestId}
      />
    </div>
  );
};

export default TextInput;
