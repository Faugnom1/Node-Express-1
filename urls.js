const fs = require('fs');
const axios = require('axios');
const url = require('url');
const filename = 'urls.txt';

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${filename}`);
    process.exit(1);
  }

  const urls = data.split('\n').filter(line => line);

  urls.forEach((currentUrl) => {
    const {hostname} = new URL(currentUrl);

    axios.get(currentUrl)
      .then(response => {
        fs.writeFile(hostname, response.data, (err) => {
          if (err) {
            console.error(`Error writing to file: ${hostname}`);
          } else {
            console.log(`Saved ${hostname}`);}
        });
      })
      .catch(error => {
        console.error(`Error fetching ${currentUrl}: ${error.message}`);
      });
  });
});