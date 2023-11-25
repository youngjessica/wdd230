const baseURL = "https://youngjessica.github.io/wdd230/index.html";
const linksURL = "https://youngjessica.github.io/wdd230/data/links.json";

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); 
    prophetList = data.prophets;
    displayProphets(prophetList);
  }

getProphetData();

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
  getLinks();