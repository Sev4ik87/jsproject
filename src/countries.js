'use strict';
function getObj() {
  return this;
}


function Country (title, capital, population, area) {
	this.title = title;
	this.capital = capital;
	this.population = population;
	this.area = area;
	this.getCountry = function (name) {
    for (let item in name) 
{
  if(typeof name[item] === 'string'){
    console.log(this)};
} 
  }
}
const Germany = new Country('Germany', 'Berlin', '84.3 million', '357588km');
const France = new Country('France', 'Paris', '67.75 million', '551695km');

function choose(name) {
name.getCountry(name);

}
choose(Germany);
 choose(France);
// Germany.getCountry();
// France.getCountry();