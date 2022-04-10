let quotes = [
    {
        "quote": "Mais um dia para mudar o mundo..."
    },
    {
        "quote": "Como é bom saber que é possível recomeçar tudo de novo.",
        "author": "Inajá Martins de Almeida"
    },
    {
        "quote": "O primeiro dos bens, depois da saúde, é a paz interior",
        "author": "François de La Rochefoucauld"
    },
    {
        "quote": "Com o conhecimento nossas dúvidas aumentam.",
        "author": "Johann Goethe"
    },
    {
        "quote": "As palavras são os suspiros da alma.",
        "author": "Pitágoras"
    },
    {
        "quote": "As pessoas felizes lembram o passado com gratidão, alegram-se com o presente e encaram o futuro sem medo.",
        "author": "Epícuro"
    },
    {
        "quote": "Todas as vidas de homens são contos de fadas escritos pelas mãos de Deus.",
        "author": "Hans Christian Andersen"
    },
    {
        "quote": "A felicidade é simplesmente uma questão de luz interior.",
        "author": "Henri Lacordaire"
    },
    {
        "quote": "Mesmo as noites totalmente sem estrelas podem anunciar a aurora de uma grande realização.",
        "author": "Martin Luther King"
    },
    {
        "quote": "Todo homem tem o direito de decidir o seu próprio destino.",
        "author": "Bob Marley"
    },
    {
        "quote": "Apenas um raio de sol é suficiente para afastar várias sombras.",
        "author": "São Francisco de Assis."
    },
    {
        "quote": "Cultivar estados mentais positivos, como a generosidade e a compaixão, leva à felicidade.",
        "author": "Dalai lama"
    },
    {
        "quote": "O homem é um gênio quando está sonhando.",
        "author": "Akira Kurosawa"
    },
    {
        "quote": "Nenhuma atividade no bem é insignificante. As mais altas árvores são oriunidas de minúsculas sementes.",
        "author": "Chico Xavier."
    },
    {
        "quote": "O bom humor é a única qualidade divina do homem.",
        "author": "Arthur Schopenhauer"
    },
    {
        "quote": "Alimente seu cérebro com pensamentos saudáveis, para que seu corpo possa refletir saúde.",
        "author": "Minutos de Sabedoria"
    },
    {
        "quote": "Abra seus braços para as mudanças, mas não abra mão de seus valores.",
        "author": "Dalai Lama"
    },
    {
        "quote": "Um grande homem sem religião é um simples animal sem alma.",
        "author": "Daniel Defoe"
    },
    {
        "quote": "A cidadania não é atitude passiva, mas ação permanente, em favor da comunidade.",
        "author": "Tancredo Neves"
    },
    {
        "quote": "Outrora, a velhice era uma dignidade; hoje, ela é um peso.",
        "author": "Fraçois René de Chateaubriand"
    },
    {
        "quote": "Seus sonhos são as letras do livro que sua vida está escrevendo.",
        "author": "Paulo Coelho"
    },
    {
        "quote": "A gula mata mais do que a espada.",
        "author": "George Herbert"
    },
    {
        "quote": "Uma boa cabeça e um bom coração são sempre uma formidável combinação",
        "author": "Nelson Mandela"
    },
    {
        "quote": "Eu não destruo um inimigo quando eu o torno meu amigo?",
        "author": "Abraham Lincoln"
    },
    {
        "quote": "... se você quiser testar o caráter de um homen, dê-lhe poder.",
        "author": "Abraham Lincoln"
    },
    {
        "quote": "Seu eu tivesse 9 horas para cortar uma árvore, passaria 6 horas afiando meu machado",
        "author": "Abraham Lincoln"
    },
    {
        "quote": "Invenção requer duas coisa. 1. A habilidade de tentar muitos experimentos. 2. Não ter que viver com danos colaterais de experimentos falhos.",
        "author": "Andy Jassy"
    }
];


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