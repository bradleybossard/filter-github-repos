'require strict';

const createTable = `CREATE TABLE IF NOT EXISTS repos (
  id integer,
  node_id varchar(100),
  name varchar(100)
);`;

module.exports = {
  createTable
};
