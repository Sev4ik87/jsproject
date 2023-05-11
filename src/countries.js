'use strict';
function getObj() {
  return this;
}


function Country(title, capital, population, area) {
	this.title = title;
	this.capital = capital;
	this.population = population;
	this.area = area;
	this.getCountry = getObj ;
 
  }

const Germany = new Country('Germany', 'Berlin', '84.3 million', '357588km');
const France = new Country('France', 'Paris', '67.75 million', '551695km');

console.log(Germany);
console.log(France);

function showItem(name) {
for (let item in name){
  if ( typeof name[item] !== 'function') {
console.log(`${item}: ${name.getCountry()[item]}`);
}
}
}
showItem(Germany);
showItem(France);