import Navbar from "../Components/Navbar/navbar";
import LiveTicker from "../Components/LiveTicker/liveticker";
import NewsGrid from "../Components/NewsGrid/newsgrid";
import AdBanner from "../Components/AdBanner/adbanner";
import FeaturedNews from "../Components/FeaturedNews/featurednews";

function Home() {
  return (
    <>
      <Navbar />
      <LiveTicker />
      {/* <NewsGrid /> */}
      <FeaturedNews />
      <AdBanner />
    </>
  );
}

export default Home;
