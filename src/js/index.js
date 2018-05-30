import Search from './models/Search'
import * as searchView from './views/searchView';
import { elements, renderloader, removeLoader } from './views/base';

const state = {};

const controlSearch = async () => {
    //get query from view
    const query = searchView.getInput(); // we get input from the search text

    if(query){
        // new search object and add to state
        state.search = new Search(query);  // we make a search class object for using Search.js and getting a result from the api

        //prepare UI for results
        searchView.clearInput();
        searchView.clearPreviousResult();
        renderloader(elements.searchRes);

        //search for recipes
       await state.search.getResults(); // using that object we get the result what to search

        // render result in UI
        removeLoader();
        searchView.renderResults(state.search.result); // render the search result
    } 
}
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


