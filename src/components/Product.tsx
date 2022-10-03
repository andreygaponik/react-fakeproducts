import { IProduct } from "../models";
import { useState } from 'react';

interface ProductProps {
  product: IProduct
}

const Product = (props: ProductProps) => {
  const { product } = props;

  const [details, setDetails] = useState(false);

  return (
    <div className="border px-4 py-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6 mb-4" alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold mb-4">{product.price}$</p>
      <button onClick={() => setDetails(!details)} className="py-2 px-4 border mb-4">
        {
          details ? 'Hide Details' : 'Show Details'
        }
      </button>

      {
        details && <div className="flex flex-col items-center text-center max-w-2xl">
          <p className="mb-4">{product.description}</p>
          <p>Rate: <span className="font-bold">{product.rating.rate}</span></p>
        </div>
      }
    </div>
  )
}

export default Product;