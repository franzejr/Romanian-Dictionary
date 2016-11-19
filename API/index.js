var api = {
    getWord(word){
        word = word.toLowerCase().trim();
        var url = `https://romanian-dictionary-api.herokuapp.com/api/v1/words/${word}`;
        return fetch(url).then((res) => res.json())
    }
};

export default api;
