//Old code
// const express = require('express');
// let axios = require('axios');
// var app = express();

// app.post('/', function(req, res, next) {
//   try {
//     let results = req.body.developers.map(async d => {
//       return await axios.get(`https://api.github.com/users/${d}`);
//     });
//     let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

//     return res.send(JSON.stringify(out));
//   } catch {
//     next(err);
//   }
// });

// app.listen(3000);

const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const fetchDeveloperData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return {name: response.data.name, bio: response.data.bio};
};

app.post('/', async (req, res, next) => {
    try {
      if (!req.body.developers) {
        return res.status(400).json({error: 'Missing developers field in the body'});
      }
  
      const developers = req.body.developers;
      const results = await Promise.all(developers.map(d => fetchDeveloperData(d)));
  
      res.json(results);
    } catch (err) {
      next(err);
    }
  });

app.listen(3000);