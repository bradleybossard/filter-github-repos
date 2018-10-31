const request = require('request-promise-native');
const _ = require('lodash');

const username = 'bradleybossard';
const url = `https://api.github.com/users/${username}/repos`;

var options = {
  url,
  headers: {
    'User-Agent': 'request'
  }
};

request.get(options)
.then(res => {
  console.log(res);
});
