function NewsCard({ article, variant = "small" }) {
  return (
    <article
      className={`news-card news-card-${variant}`}
      style={{ backgroundImage: `url("${article.image}")` }}>
      <div className="news-overlay">
        <div className="news-tag">
          {article.tag1 ? (<span className="news-tag1">{article.tag1}</span>) : null}
          {article.tag2 ? (<span className="news-tag2">{article.tag2}</span>) : null}
        </div>
        <h3 className="news-title">{article.title}</h3>
        {article.excerpt && <p className="news-excerpt">{article.excerpt}</p>}
        <section className="common-flex-container">
          <p>{article.name}</p>
          <section className="common-flex-container">
            <i className="fa-solid fa-clock"></i>
            <p>{article.date}</p>
          </section>
          <section className="common-flex-container">
            <i className={article.icon}></i>
            <p>{article.video}</p>
          </section>
        </section>
        {article.btnvalue ? (<button className="reader-more-btn">{article.btnvalue}</button>) : null}
      </div>
    </article>
  );
}

export default NewsCard;