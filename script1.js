let twitterBtn = document.querySelector(".button__twitter")
let quote = document.querySelector(".quote__text")
let author = document.querySelector(".quote__author")
let quotes;
let nextbtn = document.querySelector(".button__next")

function tweetconsole() {
    console.log('clicou')
}

function tweetQuote() {
    window.open('https://twitter.com/intent/tweet?text=' + quote.textContent + "%0d" + author.textContent, '_blank')
}

async function getQuotes() {
    let url = 'https://run.mocky.io/v3/113fd6e0-7f32-44fa-8542-f5280e051547';
    let response = await fetch(url);
    quotes = await response.json();
    let posicao = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[posicao].text;
    author.textContent = quotes[posicao].author;
}
nextbtn.addEventListener("click", getQuotes)
twitterBtn.addEventListener("click", tweetQuote)
getQuotes();