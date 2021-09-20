import CategoriesEditTabGeneral from "./CategoriesEditTabGeneral";
import CategoriesEditResourcesList from "./CategoriesEditResourcesList";

const CategoriesEditContainer = () => {
  return (
    <div>
      <h1 className="heading-1">Edit category</h1>
      <CategoriesEditTabGeneral />
      <CategoriesEditResourcesList />
    </div>
  );
};

export default CategoriesEditContainer;
