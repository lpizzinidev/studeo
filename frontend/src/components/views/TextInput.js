const TextInput = ({ type, name }) => {
  return (
    <div>
      <p className="text-body-2">{name}</p>
      <input type={type || "text"} className="input-text-field" />
    </div>
  );
};

export default TextInput;
