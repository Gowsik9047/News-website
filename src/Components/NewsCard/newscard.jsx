import React from "react";

export default function NewsCard({ article, variant = "small" }) {
  console.log(article);
  console.log(variant);
  console.log('image',article.image)
  return (
    <article
      className={`news-card news-card-${variant}`}
      style={{ backgroundImage: `url("${article.image}")` }}>
      <div className="news-overlay">
        <span className="news-tag1">{article.tag1}</span>
        <span className="news-tag2">{article.tag2}</span>
        <h3 className="news-title">{article.title}</h3>
        {article.excerpt && <p className="news-excerpt">{article.excerpt}</p>}
        <div className="news-meta">{article.date}</div>
      </div>
    </article>
  );
}
