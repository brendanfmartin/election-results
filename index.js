const axios = require('axios');

(async () => {
  const t = await axios.get('https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+qualified_voter_listing_2018_prima[…]listing_2018_primary_by_ward&format=json&skipfields=cartodb_id');
  console.log({resp: t.data});
})()
