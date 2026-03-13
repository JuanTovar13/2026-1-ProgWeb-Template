import { Link, useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Zapatos',
    price: 100,
    description: 'Zapatos de cuero de alta calidad',
  },
  {
    id: 2,
    name: 'Camisa',
    price: 50,
    description: 'Camisa de algodón suave y cómoda',
  },
];

export const Products = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Products</h1>

      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => navigate(`/products/${product.id}`)}>
            Ir al detalle
          </button>
        </div>
      ))}
    </div>
  );
};
