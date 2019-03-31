/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/




/***
  Create 5 array of quote objects and name it `quotes`.
***/
var quotes = [
  {
    quote: 'I’m not the smart man. But I know what love is.',
    source: 'Forest Gump',
  },
  {
    quote: 'I\'m king of the world!',
    source: 'Jack Dawson',
    citation: 'Titanic',
    year: 1997

  },

  {
    quote: 'Yo, Adrian!',
    source: 'Rocky Balboa',
    citation: 'Rocky',
    year: 1976
  },
  {
    quote: 'May the Force be with you.',
    source: 'Luke Skywalker',

  },
  {
    quote: 'E.T. phone home.',
    source: 'E.T.',
    citation: ' E.T. The Extra-Terrestrial',
    year: 1982
  }
];



/***
  Create the `getRandomQuote` function to
  return a random qoute from the quote array object.
***/

function getRandomQuote() {
var randomNumber;
randomNumber = Math.floor(Math.random() * quotes.length) ;
return quotes[randomNumber];
}
console.log(getRandomQuote());

/***
  Create the `printQuote` function to print the single quote to the
  web page using the getRandomQuote fuction and buld the html for the web page.
***/
function printQuote() {
  var singleQuote = getRandomQuote();
  var html = '';
  html += '<p class = "quote">' + singleQuote.quote + '</p>';
  html += '<p class = "source">' + singleQuote.source;
  if (singleQuote.citation) {
    html += '<span class = "citation">' + singleQuote.citation + '</span>';
  }
  if (singleQuote.year) {
      html += '<span class = "year">' + singleQuote.year + '</span>';

  }
  html += '</p>';
  var outPutHtml = document.getElementById('quote-box');
  outPutHtml.innerHTML = html;
}




/***
  When the button is click the function will load a new
  quote from the quote object.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
