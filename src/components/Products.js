import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Product 1',
    imageUrl: 'https://quarco.ru/assets/images/resources/46/1.jpg',
    description: 'This is product 1',
  },
  {
    id: 2,
    name: 'Product 2',
    imageUrl: 'https://quarco.ru/assets/images/resources/45/3.jpg',
    description: 'This is product 2',
  },
  {
    id: 3,
    name: 'Product 3',
    imageUrl: 'https://quarco.ru/assets/images/resources/49/1.jpg',
    description: 'This is product 3',
  },
  {
    id: 4,
    name: 'Product 4',
    imageUrl: 'https://quarco.ru/assets/images/resources/51/1.jpg',
    description: 'This is product 4',
  },
  {
    id: 5,
    name: 'Product 5',
    imageUrl: 'https://quarco.ru/assets/images/resources/52/1.jpg',
    description: 'This is product 5',
  },
  {
    id: 6,
    name: 'Product 6',
    imageUrl: 'https://quarco.ru/assets/images/resources/53/1.jpg',
    description: 'This is product 6',
  },
  {
    id: 7,
    name: 'Product 7',
    imageUrl: 'https://quarco.ru/assets/images/resources/54/1.jpg',
    description: 'This is product 7',
  },
  {
    id: 8,
    name: 'Product 8',
    imageUrl: 'https://quarco.ru/assets/images/resources/55/1.jpg',
    description: 'This is product 8',
  },
  {
    id: 9,
    name: 'Product 9',
    imageUrl: 'https://quarco.ru/assets/images/resources/43/1.jpg',
    description: 'This is product 9',
  },
];

const Product = ({ product }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-3">
      <Link to={`/product/${product.id}`} className="text-decoration-none">
        <div className="card rounded-3">
          <img src={product.imageUrl} className="card-img-top rounded-top-3" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const ProductDetails = ({ match }) => {
  const product = products.find(p => p.id === parseInt(match.params.id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
};

const Products = () => {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           < Products />
//         </Route>
//         <Route path="/product/:id">
//           <ProductDetails />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

