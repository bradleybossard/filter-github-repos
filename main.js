const fs = require('fs-extra');
const request = require('request-promise-native');
const _ = require('lodash');
const { Client } = require('pg')
const client = new Client()

const sqlStrings = require('./sql-strings')

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

async function writeData() {
  await client.connect()

  //const res = await client.query('SELECT $1::text as message', ['Hello world!'])
  console.log(sqlStrings);
  const res = await client.query(sqlStrings.createTable);
  console.log(res) // Hello world!
  await client.end()
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
  result = await writeData();
  console.log('done');
})();
