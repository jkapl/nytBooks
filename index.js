const prompt = require('prompt');
const key = require('./config.js');
const axios = require('axios');

class Booksearch {
  constructor () {
    this.history = [];

  }

  getBook () {
    prompt.get(['author'], (err, result) => {
      console.log(`Getting books by ${result.author}`)
      let authorString = result.author.replace(/\s/g, '+');
      console.log(authorString);
      console.log(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${authorString}&api-key=${key}`);
      axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${authorString}&api-key=${key}`)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    })
  }
}

prompt.start();
const start = new Booksearch();
start.getBook();