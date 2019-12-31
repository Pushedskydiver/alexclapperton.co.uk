const contentful = require('contentful');

const client = contentful.createClient({
  accessToken: '73940eda44dadba56db69ec6395029036dbd43845eb476473e17a79f627d351a',
  space: '66vjslfacivy'
});

exports.client = client;
