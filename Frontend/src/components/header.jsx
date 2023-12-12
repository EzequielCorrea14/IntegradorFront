
import ProductForm from "../Pages/registerProduct/components/ProductForm";

const Header = ({fetchProductsData}) => {
    return (
      <div className="header-container">
        <ProductForm fetchData={fetchProductsData} />
       
      </div>
    );
  };
  
  export default Header;