const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

const link =	`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(link, (error, response, body) => {
  
  if (error) 
	{return callback(error);}

  const data = JSON.parse(body);
  return callback(null, data[0].description);
});
};

module.exports = { fetchBreedDescription };