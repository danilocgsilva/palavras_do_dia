import quotes from "./quotes";

function random() {
    let quote = quotes[randomPos()];
    let text = `"${quote.quote}"`;
    if (quote.author) {
        text += quote.author !== "" ? ` <a href="https://pt.wikipedia.org/wiki/${quote.author}" target="_blank">${quote.author}</a>` : "author desconhecido";
    }
    return text;
}

function randomPos() {
    return Math.floor(
        Math.random() * quotes.length
    )
}

export default random