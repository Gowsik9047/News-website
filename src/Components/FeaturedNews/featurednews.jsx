// function FeaturedNews({ image, title, category, description }) {
//   return (
//     // <div className="featured-news" style={{ backgroundImage: `url(${image})` }}>
//       <div className="overlay">
//         <span className="category">{category}</span>
//         <h2>{title}</h2>
//         <p>{description}</p>
//         <button>மேலும் படிக்க</button>
//       </div>
//     // </div>
//   );
// }
// export default FeaturedNews;


// src/components/FeaturedNews.jsx
import React from "react";
import NewsCard from "../NewsCard/newscard";
import featuredData from "../../Data/datafeatured";

export default function FeaturedNews() {
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
