const faunadb = require('faunadb');

require('dotenv').config();

const q = faunadb.query;
const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });

/* export our lambda function as named "handler" export */
exports.handler = (event, context, callback) => {
  // get the form data
  const body = JSON.parse(event.body);

  const data = {
    id: body.id,
    endpoint: body.notificationEndPoint,
    keys: {
      p256dh: body.publicKey,
      auth: body.auth
    }
  };

  const user = {
    data: data
  };

  // Create the lolly entry in the fauna db
  client.query(q.Create(q.Ref('classes/users'), user))
    .then((response) => {
      console.log('success', response);

      // Success! Go to a page to view the result
      return callback(null, {
        body: JSON.stringify(response),
        statusCode: 200,
      });
    }).catch((error) => {
      console.log('error', error);
      // Error! return the error with statusCode 400
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      });
    });

}
