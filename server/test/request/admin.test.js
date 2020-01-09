const request = require('supertest')
const expect = require('chai').expect

let fixed_head = 'http://localhost:3000'

describe('API test', function() {
  beforeEach(() => {
    console.info('API test start')
  })
  it('register api testing', function(done) {
    request(fixed_head)
      .post('/api/admin/register')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('login api testing', function(done) {
    request(fixed_head)
      .post('/api/admin/login')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('changing password api testing', function(done) {
    request(fixed_head)
      .post('/api/admin/changePwd')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('all users aoi testing', function(done) {
    request(fixed_head)
      .get('/api/admin/allUser')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('seaarch user api testing', function(done) {
    request(fixed_head)
      .get('/api/admin/searchUser')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('no reply message api testing', function(done) {
    request(fixed_head)
      .get('/api/admin/noReplyMsg')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('respond with json adn code 200', function(done) {
    request(fixed_head)
      .get('/api/admin/repliedMsg')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('respond with json adn code 200', function(done) {
    request(fixed_head)
      .post('/api/admin/reply')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('respond with json adn code 200', function(done) {
    request(fixed_head)
      .get('/api/admin/orders')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('respond with json adn code 200', function(done) {
    request(fixed_head)
      .get('/api/admin/order')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
