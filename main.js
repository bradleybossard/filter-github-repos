const fs = require('fs-extra');
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
    .then(res => fs.outputJson(reposFilename, res));
}

fs.pathExists(reposFilename)
  .then(result => {
    if (!result) {
      console.log('Fetching file');
      return fetchData();
    } else {
      console.log('File exists!');
    }
  });

