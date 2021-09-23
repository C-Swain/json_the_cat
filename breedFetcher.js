const request = require('request');
const breed = process.argv[2];
const link = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(link, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  const data = JSON.parse(body);
  console.log(data[0].description);
  console.log(typeof data);
});
 


