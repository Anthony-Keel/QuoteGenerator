let apiQuotes =[];
// show new quote
function newQuote(){
    // to pick random quote from api quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get quotes from API 
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    }catch(error){
        // handle errors
    }
}
    // On Load
    getQuotes();