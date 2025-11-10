import Navbar from "../Components/Navbar/navbar";
import LiveTicker from "../Components/LiveTicker/liveticker";
import AdBanner from "../Components/AdBanner/adbanner";
import FeaturedNews from "../Components/FeaturedNews/featurednews";
import NewsGrid from "../Components/NewsGrid/newsgrid";

function Home() {
  return (
    <>
      <Navbar />
      <LiveTicker />
      <FeaturedNews />
      <AdBanner />
      <NewsGrid />
    </>
  );
}

export default Home;
