import HomeNav from './HomeNav';
import HomeHeading from './HomeHeading';
import HomeLogo from './HomeLogo';

const HomeContainer = () => {
  return (
    <div>
      <HomeNav />
      <div className='home-container'>
        <HomeLogo />
        <HomeHeading />
      </div>
    </div>
  );
};

export default HomeContainer;
