import HomeNav from "./HomeNav";
import HomeHeading from "./HomeHeading";
import HomeLogo from "./HomeLogo";

const HomeContainer = () => {
  return (
    <div>
      <HomeNav />
      <div className="home-container">
        <HomeHeading />
        <HomeLogo />
      </div>
    </div>
  );
};

export default HomeContainer;
