const expect = require('chai').expect
const request = require('supertest')

let fixed_head = 'http://localhost:3000'

describe('API test', function() {
  beforeEach(() => {
    console.info('API test start')
  })
  it('respond with json adn code 200', function(done) {
    request(fixed_head)
      .post('/api/user/signup')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('respond with json adn code 200', function(done) {
    request(fixed_head)
      .post('/api/user/login')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('respond with json adn code 200', function(done) {
    request(fixed_head)
      .post('/api/user/updateUserData')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('respond with json adn code 200', function(done) {
    request(fixed_head)
      .post('/api/user/updatePwd')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
