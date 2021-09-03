const TextInput = ({ type, title, name, onChange }) => {
  return (
    <div>
      <p className="text-body-2">{title}</p>
      <input
        type={type || "text"}
        name={name}
        className="input-text-field"
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
