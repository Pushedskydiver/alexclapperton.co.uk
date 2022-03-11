module.exports = (articles) => {
  const dates = articles.map(article => article.sys.publishedAt);

  return new Date(Math.max(...dates.map(date => new Date(date))));
}
