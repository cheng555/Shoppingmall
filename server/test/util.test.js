const expect = require('chai').expect
const md5 = require('md5')

const util = require('./../utils')
describe('Util function test', function() {
  describe('returnMsg()', function() {
    it('should return object when the value is not present', function() {
      expect(util.returnMsg()).to.be.an('object')
    })
  })

  describe('returnSuccess()', function() {
    it('should return object when the value is not present', function() {
      expect(util.returnSuccess()).to.be.an('object')
    })
  })

  describe('addSalt()', function() {
    it('should return  when the value is not present', function() {
      expect(util.addSalt(1, 2)).to.be.equal(md5(1 + 2))
    })
  })
})
