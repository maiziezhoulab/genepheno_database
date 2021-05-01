// local environment
let ipUrl = 'http://localhost:5000/api/';

// heroku environment
// let ipUrl = 'https://gene-phenotype.herokuapp.com/api/';

let servicePath = {
    getHomePaper: ipUrl + 'home',   //Home page of paper
    searchGene: ipUrl + 'searchGene/', //Jump to search Gene page
    searchPaper: ipUrl + 'searchPaper/'
}

export default servicePath;