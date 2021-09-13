const TextInput = ({ type, title, name, value, onChange }) => {
  return (
    <div>
      <p className="text-body-2">{title}</p>
      <input
        type={type || "text"}
        name={name}
        value={value}
        className="input-text-field"
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
