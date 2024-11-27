module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Local Geth node
      port: 8545, // Default Geth RPC port
      network_id: "*", // Match any network id
      gas: 6721975, // Set the gas limit
      gasPrice: 20000000000, // Set the gas price (in Wei)
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Match your contract's version
    },
  },
};