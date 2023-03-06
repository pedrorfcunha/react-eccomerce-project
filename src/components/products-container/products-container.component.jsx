import ProductItem from "../product-item/product-item.component";

import "./products-container.styles.scss";

const ProductsContainer = ({ products }) => {
  return (
    <>
      <h1 className="category-name">Category Name</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsContainer;
