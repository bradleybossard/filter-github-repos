const fs = require('fs-extra');
const request = require('request-promise-native');
const _ = require('lodash');

const username = 'bradleybossard';
const url = `https://api.github.com/users/${username}/repos`;
const reposFilename = './repos.json';

async function fetchData() {
  const options = {
    url,
    headers: {
      'User-Agent': 'request'
    }
  };

  let res = await request.get(options)
  let fsRet = await fs.outputJson(reposFilename, res);
  return fsRet;
}

(async () =>  {
  console.log('start');
  let result = await fs.pathExists(reposFilename);
  if (!result) {
    console.log('Fetching file');
    let data = await fetchData();
  } else {
    console.log('File exists!');
  }
  console.log('done');
})();

