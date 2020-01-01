const faunadb = require('faunadb');
const webpush = require('web-push');

const q = faunadb.query;
const client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });

// TODO: Tidy this up

exports.handler = (event, context, callback) => {
  const vapidKeys = {
    publicKey: process.env.VAPID_PUBLIC_KEY,
    privateKey: process.env.VAPID_PRIVATE_KEY
  };

  webpush.setGCMAPIKey(process.env.GCM_API_KEY);

  webpush.setVapidDetails(
    'mailto:hi@alexclapperton.co.uk',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );

  client.query(q.Paginate(q.Match(q.Ref('indexes/all_users'))))
    .then((response) => {
      const userRefs = response.data;
      const getAllUsersDataQuery = userRefs.map((ref) => q.Get(ref));

      return client.query(getAllUsersDataQuery)
        .then((ret) => {
          const send = ret.map(user => {
            return webpush.sendNotification(user.data)
              .then(response => response)
              .catch(error => {
                if (error.statusCode === 410) {
                  const ref = user.ref.toString().split(',')[1].match(/(\d+)/)[0];

                  client.query(q.Delete(q.Ref(`classes/users/${ref}`)))
                    .then((response) => {
                      return callback(null, {
                        statusCode: 200,
                        body: JSON.stringify(response)
                      })
                    })
                    .catch((error) => {
                      return callback(null, {
                        statusCode: 400,
                        body: JSON.stringify(error)
                      })
                    });
                }
              });
          });

          Promise.all(send).then(response => {
            return callback(null, {
              statusCode: 200,
              body: JSON.stringify(response)
            });
          });
        });
    })
    .catch((error) => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      })
    })
}
