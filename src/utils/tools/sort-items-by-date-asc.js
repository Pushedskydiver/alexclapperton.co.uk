function sortItemsByDateAsc(a, b) {
  const a_timestamp = Date.parse(a.sys.firstPublishedAt);
  const a_date = new Date(a_timestamp);

  const b_timestamp = Date.parse(b.sys.firstPublishedAt);
  const b_date = new Date(b_timestamp);

  return a_date - b_date;
}

module.exports = sortItemsByDateAsc;
