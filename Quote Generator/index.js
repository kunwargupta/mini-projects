const apiURL = "https://api.allorigins.win/get?url=https://zenquotes.io/api/random";

// const apiURL = "https://api.allorigins.win/get?url=https://favqs.com/api/qotd"



const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newQuoteBtn = document.querySelector(".new");
const tweetBtn = document.querySelector(".tweet");

const getQuote = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new error("URL isn't working");
        } else {
            const data = await response.json();
            const parsedData = JSON.parse(data.contents);
            quote.innerHTML = parsedData[0].q; // Access 'q' for the quote
            author.innerHTML = parsedData[0].a; // Access 'a' for the author's name
        }
    } catch (error) {
        console.error("Error fetching the quote:", error);
    }
}


getQuote(apiURL);

newQuoteBtn.addEventListener("click", ()=> {
    getQuote(apiURL);
});

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "by " + author.innerHTML);
}

tweetBtn.addEventListener("click", ()=> {
    tweet();
})