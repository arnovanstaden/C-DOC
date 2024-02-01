import axios from 'axios';
import fs from 'fs-extra';

const cacheProducts = async () => {
  const products = await axios({
    method: 'GET',
    url: 'https://c-doc.cyclic.app/products',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.data)
    .catch((err) => console.error(err.response));

  fs.outputJson('data/products.json', products)
};

cacheProducts();
