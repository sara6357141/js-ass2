const quotes = [
    { text: "Be yourself; everyone else is already taken.", author: "― Oscar Wilde" },
    { text: "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.", author: "― William W. Purkey" },
    { text: "So many books, so little time.", author: "― Frank Zappa" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "― Albert Einstein" },
    { text: "A room without books is like a body without a soul.", author: "― Marcus Tullius Cicero" }
];

let lastQuoteIndex = -1;

function showRandomQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);

    lastQuoteIndex = randomIndex;
    const randomQuote = quotes[randomIndex];

    document.getElementById('quoteOutput').innerText = `"${randomQuote.text}"`;
    document.getElementById('authorOutput').innerText = `- ${randomQuote.author}`;
}    