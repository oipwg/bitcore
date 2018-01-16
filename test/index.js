'use strict';

var should = require('chai').should();
var flocore = require('../');

describe('Library', function() {
  it('should export primatives', function() {
    should.exist(flocore.crypto);
    should.exist(flocore.encoding);
    should.exist(flocore.util);
    should.exist(flocore.errors);
    should.exist(flocore.Address);
    should.exist(flocore.Block);
    should.exist(flocore.MerkleBlock);
    should.exist(flocore.BlockHeader);
    should.exist(flocore.HDPrivateKey);
    should.exist(flocore.HDPublicKey);
    should.exist(flocore.Networks);
    should.exist(flocore.Opcode);
    should.exist(flocore.PrivateKey);
    should.exist(flocore.PublicKey);
    should.exist(flocore.Script);
    should.exist(flocore.Transaction);
    should.exist(flocore.URI);
    should.exist(flocore.Unit);
  });
});
