'use strict';
function getObj() {
return this;  
}

function Country (title, capital, population, area) {
	this.title = title;
	this.capital = capital;
	this.population = population;
	this.area = area;
	this.getCountry = function () {
	};
}
const bmw = new Country('Germany', 'Berlin', '84.3 million', '357588km');
const toyota = new Country('France', 'Paris', '67.75 million', '551695km');