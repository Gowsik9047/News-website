import NewsCard from "../NewsCard/newscard";
import featuredData from "../../Data/datafeatured";

function FeaturedNews() {
  const [hero, ...rest] = featuredData;
  const side = rest.slice(0, 2);
  const smalls = rest.slice(2);

  return (
    <section className="featured-wrapper">
      <div className="top-grid">
        <div className="hero">
          <NewsCard article={hero} variant="hero" />
        </div>

        <div className="side-col">
          {side.map((s) => (
            <NewsCard key={s.id} article={s} variant="side" />
          ))}
        </div>
      </div>

      <div className="small-grid">
        {smalls.map((s) => (
          <NewsCard key={s.id} article={s} variant="small" />
        ))}
      </div>
    </section>
  );
}

export default FeaturedNews;