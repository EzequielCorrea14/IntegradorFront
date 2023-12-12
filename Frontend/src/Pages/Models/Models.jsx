import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "../../context/CartContext";



const App = () => {



  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProductsData();
  }, []);

  const fetchProductsData = async () => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/products`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  if (error) return <p>Hubo un error al cargar los productos.</p>;

  if (isLoading) return <p>Cargando...</p>;

  return (
    <>
      <CartProvider>
        
      {isLoading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>Hubo un error al cargar los productos.</p>
        ) : (
          <ProductList products={products} />
        )}
        <ToastContainer />
      </CartProvider>
  
      
    </>
  );
};

export default App;