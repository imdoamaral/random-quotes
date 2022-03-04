const url = 'https://type.fit/api/quotes';

class Quotes {
    static getQuotesArray() {
        const response = axios.get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => console.log(error));

        return response;
    }

    static async getRandomQuote() {
        const arr = await this.getQuotesArray();
        const quote = arr[Math.floor(Math.random() * arr.length)];

        this.addQuote(quote);
    }

    static removeQuotationMarks(string) {
        return string.slice(1, -1);
    }

    static addQuote(quote) {
        let text = JSON.stringify(quote.text)
        // text =  this.removeQuotationMarks(text);
        renderQuote.textContent = text;

        let author = JSON.stringify(quote.author);
        author = this.removeQuotationMarks(author);
        renderAuthor.textContent = author;
    }
}

Quotes.getRandomQuote();