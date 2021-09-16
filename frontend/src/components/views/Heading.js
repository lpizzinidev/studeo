import { useHistory } from "react-router-dom";

import arrowLeftIcon from "../../assets/icons/arrow-left.svg";

const Heading = ({ title }) => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div>
      <img
        src={arrowLeftIcon}
        className="icon"
        alt="Back"
        onClick={handleBack}
      />
      <h1 className="heading-2">{title}</h1>
    </div>
  );
};

export default Heading;
