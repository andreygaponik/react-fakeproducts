import { useState } from 'react';
import { CreateProduct } from './components/CreateProduct';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import Product from './components/Product';
import { useProducts } from './hooks/products';
import { IProduct } from './models';

const App = () => {

  const { products, loading, error, addProduct } = useProducts();
  const [modal, setModal] = useState(true);

  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  }

  return (
    <>
      <div className="container mx-auto max-w-4xl pt-5">
        {error && <ErrorMessage error={error} />}
        {
          loading
            ? <Loader />
            : products.map((product) => <Product product={product} key={product.id} />)
        }
      </div>

      {
        modal && <Modal title="Create product">
          <CreateProduct onCreate={createHandler} />
        </Modal>
      }
    </>
  );
}

export default App;
