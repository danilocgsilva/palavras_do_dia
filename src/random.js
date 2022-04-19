import quotes from "./quotes";

function random() {
    let quote = quotes[randomPos()];
    let text = `"${quote.quote}"`;
    if (quote.author) {
        text += ", " + quote.author;
    }
    return text;
}

function randomPos() {
    return Math.floor(
        Math.random() * quotes.length
    )
}

export default random