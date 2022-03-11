module.exports = (articles) => {
  const dates = articles.map(article => article.sys.publishedAt);

  console.log(dates, 'dates');

  return new Date(Math.max(...dates.map(date => new Date(date))));
}
