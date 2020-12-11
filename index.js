const axios = require('axios');

(async () => {
  const t = await axios.get('https://phl.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20voter_turnout_primary_election_2018');
  console.log({resp: t.data});
})()
