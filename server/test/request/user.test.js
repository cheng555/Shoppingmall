const expect = require('chai').expect
const request = require('supertest')

let fixed_head = 'http://localhost:3000'

describe('API test', function() {
  beforeEach(() => {
    console.info('API test start')
  })
  it('sign up api testing', function(done) {
    request(fixed_head)
      .post('/api/user/signup')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('log in api testing', function(done) {
    request(fixed_head)
      .post('/api/user/login')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('update user data api testing', function(done) {
    request(fixed_head)
      .post('/api/user/updateUserData')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('update password api testing', function(done) {
    request(fixed_head)
      .post('/api/user/updatePwd')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
