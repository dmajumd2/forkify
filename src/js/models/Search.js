import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '9b2bcc63ec28c1c7af73675a4c25398a';
    try{
        const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
        this.result = res.data.recipes;
    //console.log(this.result);
        } catch(error) {
            alert(error);
        }
    }
}
