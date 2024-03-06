import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'

const url = 'https://api-football-v1.p.rapidapi.com/v3/leagues?id=39';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59bf205327mshd21d81c4299e3a0p1c8ddcjsnf415b60dc5bd',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

fetch(url, options)

  .then(response => response.json())
  .then(data => fsPromises.writeFile('./data.json', JSON.stringify(data)))
  .catch(error => console.error(error))