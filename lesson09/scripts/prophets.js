function displayProphets (prophets) {
    
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach(prophet => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');

      let dob = document.createElement('p');
      let pob = document.createElement('p');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;

      dob.textContent = `Date of Birth: ${prophet.birthdate}`;
      pob.textContent = `Place of Birth: ${prophet.birthplace}`;

      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(dob);
      card.appendChild(pob);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression

prophetList = {};

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); 
    prophetList = data.prophets;
    displayProphets(prophetList);
  }

getProphetData();