// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*' // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "0.8.18",
    }
  }
}
