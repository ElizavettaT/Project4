const request = require('supertest');
const app = require('../../src/server/index');
const mockAPIResponse = require('../../src/server/mockAPI')

describe('Test Server - index.js', () => {
  it('Should load index.html', async () => {
    return request(app)
      .get('/')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200)
  })

  it('Should perform call to mocked API', async () => {
    const response = await request(app)
      .get('/test')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.body).toStrictEqual(mockAPIResponse)
  })

  it('Should perform call to NLP model', async () => {
    const response = await request(app)
      .get('/nlp')
      .set('article', 'https://www.google.com')
      .expect('Content-Type', /json/)
      .expect(200)
    //I am not sure if google will always deliver same semantic analysis (as on some holidays the content may change)
    //therefore I only check if all expected parameters are returned
    expect(response.body).toMatchObject({
      polarity: expect.any(String),
      subjectivity: expect.any(String),
      text: expect.any(String)
    });
  })

})