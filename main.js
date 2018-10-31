const fs = require('fs');
const request = require('request-promise-native');
const _ = require('lodash');

const username = 'bradleybossard';
const url = `https://api.github.com/users/${username}/repos`;
const reposFilename = './repos.json';

function fetchData() {
  const options = {
    url,
    headers: {
      'User-Agent': 'request'
    }
  };

  return request.get(options)
  .then(res => {
    console.log(`File written with ${res.length} entries`);
    fs.writeFile(reposFilename, res);
    return Promise.resolve();
  });
}

if (!fs.existsSync(reposFilename)) {
  fetchData();
}
