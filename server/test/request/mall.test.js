const expect = require('chai').expect
const request = require('supertest')

let fixed_head = 'http://localhost:3000'

describe('API test', function() {
  beforeEach(() => {
    console.info('API test start')
  })
  
  it('get goods by type api', function(done) {
    request(fixed_head)
      .get('/api/mall/getGoodsByType')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('get goods info api testing', function(done) {
    request(fixed_head)
      .get('/api/mall/getGoodsInfo')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('get ggods messages api testing', function(done) {
    request(fixed_head)
      .get('/api/mall/getGoodsMsg')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('ask goods messages api testing', function(done) {
    request(fixed_head)
      .post('/api/mall/askGoodsMsg')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('add order api testing', function(done) {
    request(fixed_head)
      .post('/api/mall/addOrder')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  // it('respond with json adn code 200', function(done) {
  //   request(fixed_head)
  //     .get('/api/mall/getOrderByState')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200, done)
  // })

  it('delete oeder api testing', function(done) {
    request(fixed_head)
      .delete('/api/mall/deleteOrder')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('respond with json adn code 200', function(done) {
    request(fixed_head)
      .get('/api/mall/pay')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('respond with json adn code 200', function(done) {
    request(fixed_head)
      .get('/api/mall/confirmReceive')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('respond with json adn code 200', function(done) {
    request(fixed_head)
      .post('/api/mall/settleAccounts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('respond with json adn code 200', function(done) {
    request(fixed_head)
      .post('/api/mall/sendComment')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
  // it('respond with json adn code 200', function(done) {
  //   request(fixed_head)
  //     .get('api/mall/getGoodsComment')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200, done)
  // })
  it('respond with json adn code 200', function(done) {
    request(fixed_head)
      .get('/api/mall/searchGoods')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
