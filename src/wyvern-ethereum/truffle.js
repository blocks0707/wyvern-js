require('dotenv').config()

// var HDWalletProvider = require('truffle-hdwallet-provider')
var KlaytnHDWalletProvider = require('truffle-hdwallet-provider-klaytn')
var Caver = require('caver-js')

var rinkebyMnemonic = process.env.RINKEBY_MNEMONIC || ''
var mumbaiMnemonic = process.env.MUMBAI_MNEMONIC || ''
var mainnetMnemonic = process.env.MAINNET_MNEMONIC || ''
var klaytnPrivateKey = process.env.KLAYTN_PRIVATE_KEY || ''
var baobabPrivateKey = process.env.BAOBAB_PRIVATE_KEY || ''
var infuraKey = process.env.INFURA_KEY || '';

var kasAccessKeyId = process.env.KAS_ACCESS_KEY_ID || ''
var kasSecretAccessKey = process.env.KAS_SECRET_KEY || ''

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 6700000
    },
    kovan: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 6700000
    },
    rinkeby: {
      host: 'localhost',
      from: '0xb483a98e72a583cc9b45b70cee07ac628d633d69',
      port: 8545,
      network_id: '*',
      gas: 6700000,
      gasPrice: 21000000000
    },
    klaytn: {
      provider: () => {
        const options = {
          headers: [
            { name: 'Authorization', value: 'Basic ' + Buffer.from(kasAccessKeyId + ':' + kasSecretAccessKey).toString('base64') },
            { name: 'x-chain-id', value: '8217' }
          ],
          keepAlive: false,
        }
        return new KlaytnHDWalletProvider(klaytnPrivateKey, new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", options))
      },
      from: '',
      network_id: '8217',
      networkCheckTimeout: 10000,
      gas: '8500000',
      gasPrice:'25000000000'
    },
    coverage: {
      host: 'localhost',
      network_id: '*',
      port: 8545,
      gas: 0xfffffffffff,
      gasPrice: 0x01
    },
    main: {
      host: 'localhost',
      port: 8547,
      from: '0x0084a81668B9A978416aBEB88bC1572816cc7cAC',
      network_id: 1,
      gas: 6700000,
      gasPrice: 6110000000
    }
  },
  compilers: {
    solc: {
      version: '0.5.16'
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
