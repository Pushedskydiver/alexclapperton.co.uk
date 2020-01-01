const faunadb = require('faunadb');

const q = faunadb.query;
const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });

exports.handler = (event, context, callback) => {
  const id = event.path.match(/([^\/]*)\/*$/)[0].toString();

  client.query(q.Get(q.Match(q.Index('users_id'), id)))
    .then((response) => {
      const ref = response.ref.toString().split(',')[1].match(/(\d+)/)[0];

      return client.query(q.Delete(q.Ref(`classes/users/${ref}`)))
        .then((response) => {
          console.log("success", response)
          return callback(null, {
            statusCode: 200,
            body: JSON.stringify(response)
          })
        }).catch((error) => {
          console.log("error", error)
          return callback(null, {
            statusCode: 400,
            body: JSON.stringify(error)
          })
        })
    }).catch((error) => {
      console.log("error", error)
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      })
    });
}
