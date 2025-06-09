import { useState} from "react";
import ProductCard from "./components/ProductCard";
import { productList } from "./data/index";
import { styles } from "./interfaces/interface";
import ButtonComponent from "./ui/ButtonComponent";
import MyModal from "./ui/DailogModle";
import Input from "./ui/Input";
import { Validation } from "./Validation";
const App = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to hold product data for the modal form
  const [product, setProduct] = useState({
    productImage: "",
    productname: "",
    description: "",
    price: "",
  });

  // Open modal handler
  const openModal = () => setIsModalOpen(true);

  // Close modal handler
  const closeModal = () => setIsModalOpen(false);
const onCancel = () => {
  setProduct({
    productImage: "",
    productname: "",
    description: "",
    price: "",
  });
  closeModal();
}
  // Submit handler for the form
  const handlerSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send data to an API
    console.log("Product submitted:", product);
   console.log(Validation(product));
    closeModal();
  };
  return (
    <main className="container mx-auto pt-2">
      {/* Add Product Button */}
      <ButtonComponent color={styles.submit} text="Add" onClick={openModal} />

      {/* Product List */}
      <div className={styles.responsiveScreen}>
        {productList.map((product, idx) => (
          <ProductCard
            key={idx}
            productname={product.title}
            description={product.description}
            price={product.price}
            productImage={product.imageURL}
          >
            {/* Edit and Destroy Buttons for each product */}
            <ButtonComponent
              color={styles.submit}
              text="Edit"
              onClick={openModal}
            />
            <ButtonComponent color={styles.delete} text="Destroy" />
          </ProductCard>
        ))}
      </div>

      {/* Modal for Adding/Editing Product */}
      <MyModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title="Edit Product"
      >
        <form className="mt-2 flex flex-col space-y-4" onSubmit={handlerSubmit}>
          {/* Product Name Input */}
          <Input
            id="product-name"
            label="Product name:"
            placeholder="Write your product name here"
            value={product.productname}
            onChange={(e) =>
              setProduct({ ...product, productname: e.target.value })
            }
          />
          {/* Product Image URL Input */}
          <Input
            id="product-image"
            label="Product Image URL:"
            placeholder="Paste your product image URL here"
            value={product.productImage}
            onChange={(e) =>
              setProduct({ ...product, productImage: e.target.value })
            }
          />
          {/* Description Input */}
          <Input
            id="description"
            label="Description:"
            placeholder="Write your description here"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
          {/* Price Input */}
          <Input
            id="price"
            label="Price:"
            placeholder="Write your price here"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />

          {/* Modal Action Buttons */}
          <div className="mt-4 flex space-x-1">
            <ButtonComponent
              color={styles.submit}
              text="Submit"
              width="w-full"
            />
            <ButtonComponent
              color={styles.delete}
              text="Delete"
              onClick={onCancel}
            />
          </div>
        </form>
      </MyModal>
    </main>
  );
};

export default App;
