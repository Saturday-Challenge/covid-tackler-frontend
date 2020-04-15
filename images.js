const imageSearch = require('image-search-google');
 
const client = new imageSearch('014664146352616991879:ks7yobv8izn', 'AIzaSyDNyuPp6Gnw_NH9WevungrCC6LJAVhaDcI');
const options = {page:1};
client.search('ayushnagar123', options)
    .then(images => {
        console.log(images[0].url)
    })
    .catch(error => console.log(error));