const quoteContainer = document.getElementById('quote-conatiner');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes =[];

function showLoadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner(){
    if(!loader.hidden){
    loader.hidden = true;
    quoteContainer.hidden = false;
    }
}




// show new quote
function newQuote(){
    showLoadingSpinner();
    // to pick random quote from api quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check for blank author and replace 
    if (!quote.author){
        authorText.textContent = 'Unknown';
    }else {
    authorText.textContent = quote.author;
    }
    // check quote length and apply appropiate sytle
    if (quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    // set quote and hide loader
        quoteText.textContent = quote.text;
        removeLoadingSpinner
    ();
}

// Get quotes from API 
async function getQuotesFromApi() {
    showLoadingSpinner();
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    }catch(error){
        // handle errors
    }
}

// tweet a quote 
function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');

}

// event listners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
    // On Load
    getQuotesFromApi();
    