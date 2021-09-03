import login from "../../assets/img/login.png";

const AuthDescription = () => {
  return (
    <div>
      <img src={login} className="home-logo" alt="Login" />
      <p className="subtitle">Login to unlock your potential</p>
    </div>
  );
};

export default AuthDescription;
