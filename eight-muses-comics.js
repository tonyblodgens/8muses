const { Source } = require('./sources');

class EightMusesComics extends Source {
  constructor(cheerio) {
    super(cheerio);
    this.BaseURL = 'https://comics.8muses.com/comics';
  }

  search(query, metadata) {
    // Implement the search function for this website here
  }

  getData(link, metadata) {
    // Implement the getData function for this website here
  }

  // Implement any additional methods necessary for accessing data from this website here
}

module.exports = { EightMusesComics };
