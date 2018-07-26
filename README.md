Flocore
=======

[![NPM Package](https://img.shields.io/npm/v/flocore.svg?style=flat-square)](https://www.npmjs.org/package/flocore)
[![Build Status](https://img.shields.io/travis/bitpay/flocore.svg?branch=master&style=flat-square)](https://travis-ci.org/bitpay/flocore)

Infrastructure to build Florincoin and blockchain-based applications for the next generation of financial technology.

**Note:** If you're looking for the Flocore Library please see: https://github.com/bitpay/flocore-lib

## Getting Started

Before you begin you'll need to have Node.js v8 installed. There are several options for installation. One method is to use [nvm](https://github.com/creationix/nvm) to easily switch between different versions, or download directly from [Node.js](https://nodejs.org/).

```bash
npm install -g flocore
```

### Running a Flocore server

Spin up a full node and join the network:

```bash
npm install -g flocore
flocored
```

You can then view the Insight block explorer at the default location: `http://localhost:3001/insight`, and your configuration file will be found in your home directory at `~/.flocore`.

### Using Flocore programmatically

Create a transaction:
```js
var flocore = require('flocore');
var transaction = new flocore.Transaction();
var transaction.from(unspent).to(address, amount);
transaction.sign(privateKey);
```

## Applications

- [Node](https://github.com/bitpay/flocore-node) - A full node with extended capabilities using Florincoin Core
- [Insight API](https://github.com/bitpay/insight-api) - A blockchain explorer HTTP API
- [Insight UI](https://github.com/bitpay/insight) - A blockchain explorer web user interface
- [Wallet Service](https://github.com/bitpay/flocore-wallet-service) - A multisig HD service for wallets
- [Wallet Client](https://github.com/bitpay/flocore-wallet-client) - A client for the wallet service
- [CLI Wallet](https://github.com/bitpay/flocore-wallet) - A command-line based wallet client
- [Angular Wallet Client](https://github.com/bitpay/angular-flocore-wallet-client) - An Angular based wallet client
- [Copay](https://github.com/bitpay/copay) - An easy-to-use, multiplatform, multisignature, secure florincoin wallet

## Libraries

- [Lib](https://github.com/bitpay/flocore-lib) - All of the core Florincoin primatives including transactions, private key management and others
- [Payment Protocol](https://github.com/bitpay/flocore-payment-protocol) - A protocol for communication between a merchant and customer
- [P2P](https://github.com/bitpay/flocore-p2p) - The peer-to-peer networking protocol
- [Mnemonic](https://github.com/bitpay/flocore-mnemonic) - Implements mnemonic code for generating deterministic keys
- [Channel](https://github.com/bitpay/flocore-channel) - Micropayment channels for rapidly adjusting florincoin transactions
- [Message](https://github.com/bitpay/flocore-message) - Florincoin message verification and signing
- [ECIES](https://github.com/bitpay/flocore-ecies) - Uses ECIES symmetric key negotiation from public keys to encrypt arbitrarily long data streams.

## Documentation

The complete docs are hosted here: [flocore documentation](http://flocore.io/guide/). There's also a [flocore API reference](http://flocore.io/api/) available generated from the JSDocs of the project, where you'll find low-level details on each flocore utility.

- [Read the Developer Guide](http://flocore.io/guide/)
- [Read the API Reference](http://flocore.io/api/)

To get community assistance and ask for help with implementation questions, please use our [community forums](http://bitpaylabs.com/c/flocore).

## Security

We're using Flocore in production, as are [many others](http://flocore.io#projects), but please use common sense when doing anything related to finances! We take no responsibility for your implementation decisions.

If you find a security issue, please email security@bitpay.com.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/bitpay/flocore/blob/master/CONTRIBUTING.md) file.

This will generate files named `flocore.js` and `flocore.min.js`.

You can also use our pre-generated files, provided for each release along with a PGP signature by one of the project's maintainers. To get them, checkout a release commit (for example, https://github.com/bitpay/flocore/commit/e33b6e3ba6a1e5830a079e02d949fce69ea33546 for v0.12.6).

To verify signatures, use the following PGP keys:
- @gabegattis: https://pgp.mit.edu/pks/lookup?op=get&search=0x441430987182732C `F3EA 8E28 29B4 EC93 88CB  B0AA 4414 3098 7182 732C`
- @kleetus: https://pgp.mit.edu/pks/lookup?op=get&search=0x33195D27EF6BDB7F `F8B0 891C C459 C197 65C2 5043 3319 5D27 EF6B DB7F`
- @matiu: https://pgp.mit.edu/pks/lookup?op=get&search=0x9EDE6DE4DE531FAC `25CE ED88 A1B1 0CD1 12CD  4121 9EDE 6DE4 DE53 1FAC`

## License

Code released under [the MIT license](https://github.com/bitpay/flocore/blob/master/LICENSE).

Copyright 2013-2017 BitPay, Inc. Flocore is a trademark maintained by BitPay, Inc.
