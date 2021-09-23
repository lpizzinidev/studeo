export const TextFieldInput = ({ title, name, value, rows = 5, onChange }) => {
  return (
    <div>
      <p className='text-body-2'>{title}</p>
      <textarea
        name={name}
        className='input-text-field'
        onChange={onChange}
        rows={rows}
      >
        {value}
      </textarea>
    </div>
  );
};
