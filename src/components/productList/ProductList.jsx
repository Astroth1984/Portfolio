import "./productList.css";
import Product from "../product/Product";
import {products} from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Astroth1984</h1>
        <p className="pl-desc">
          Let the work speaks for itself. All my case studies are Open Source and available on GitHub.
          For more technical details, other projects and code snippets, please check out the Repositories 
        </p>
      </div>
      <div className="pl-list">
          {products.map((item)=>(
              <Product 
                key={item.id} 
                img={item.img} 
                link={item.link} 
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;