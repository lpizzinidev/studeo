import { useState, useEffect } from "react";

import { createCategory, updateCategory } from "../../../api/server";

import TextInput from "../../views/TextInput";

const initialFormData = {
  title: "",
  description: "",
};

const CategoriesEditTabGeneral = ({ match }) => {
  const { _id } = match.params;

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    console.log(_id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    createCategory(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput title="Name" name="name" onChange={handleChange} />
        <TextInput
          title="Description"
          name="description"
          onChange={handleChange}
        />
        <input type="submit" className="button" value="SAVE" />
      </form>
    </div>
  );
};

export default CategoriesEditTabGeneral;
