import { useState } from "react";
import ProductCard from "./components/ProductCard";
import { colors, productList } from "./data/index";
import { styles } from "./interfaces/interface";
import ButtonComponent from "./ui/ButtonComponent";
import MyModal from "./ui/DailogModle";
import Input from "./ui/Input";
import { Validation } from "./Validation";
import ErorrMessage from "./components/ErorrMessage";
import CircleColor from "./components/CircleColor";

const initialProductState = {
  imageURL: "",
  title: "",
  description: "",
  price: "",
};

const initialErrorState = {
  imageURL: "",
  title: "",
  description: "",
  price: "",
};

const App = () => {
  // Modal visibility state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [AddProduct, setAddProduct] = useState(productList);
  // Product form state
  const [product, setProduct] = useState(initialProductState);
  //temp colors state
  const [tempColors, setTempColors] = useState([]);

  // Error messages for form fields
  const [errors, setErrors] = useState(initialErrorState);
  //maping colors
  const MapColors = colors.map((item) => (
    <CircleColor
      key={item}
      color={item}
      onClick={() => {
        if (tempColors.includes(item)) {
          setTempColors((prev) => prev.filter((color) => color !== item));
          return;
        }
        setTempColors((prev) => [...prev, item]);
      }}
    />
  ));
  // Open modal handler
  const openModal = () => setIsModalOpen(true);

  // Close modal handler
  const closeModal = () => setIsModalOpen(false);

  // Reset form and close modal
  const onCancel = () => {
    setProduct(initialProductState);
    setErrors(initialErrorState);
    closeModal();
  };

  // Form submit handler
  const handlerSubmit = (e) => {
    e.preventDefault();
    const validationResult = Validation(product);
    setErrors(validationResult);

    // If all error fields are empty, close modal (form is valid)
    const hasErrors = Object.values(validationResult).some((msg) => msg !== "");
    if (!hasErrors) {
      // Here you would typically handle the form submission, e.g., send data to an API
    }
    setAddProduct((prev) => [{ ...product, colors: tempColors }, ...prev]); // Add new product to the list
    setTempColors([]); // Reset temp colors
    onCancel();
  };
  // Helper for input change
  const handleInputChange = (field) => (e) => {
    setProduct({ ...product, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" }); // Clear error on change
  };

  return (
    <main className="container mx-auto pt-2">
      {/* Add Product Button */}
      <ButtonComponent color={styles.submit} text="Add" onClick={openModal} />

      {/* Product List */}
      <div className={styles.responsiveScreen}>
        {AddProduct.map((prod, idx) => (
          <ProductCard
            key={idx}
            title={prod.title}
            description={prod.description}
            price={prod.price}
            imageURL={prod.imageURL}
            color={prod.colors}
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
          <div>
            <Input
              id="product-name"
              label="Product name:"
              placeholder="Write your product name here"
              value={product.title}
              onChange={handleInputChange("title")}
            />
            <ErorrMessage message={errors.title} />
          </div>
          {/* Product Image URL Input */}
          <div>
            <Input
              id="product-image"
              label="Product Image URL:"
              placeholder="Paste your product image URL here"
              value={product.imageURL}
              onChange={handleInputChange("imageURL")}
            />
            <ErorrMessage message={errors.imageURL} />
          </div>
          {/* Description Input */}
          <div>
            <Input
              id="description"
              label="Description:"
              placeholder="Write your description here"
              value={product.description}
              onChange={handleInputChange("description")}
            />
            <ErorrMessage message={errors.description} />
          </div>
          {/* Price Input */}
          <div>
            <Input
              id="price"
              label="Price:"
              placeholder="Write your price here"
              value={product.price}
              onChange={handleInputChange("price")}
            />
            <ErorrMessage message={errors.price} />
          </div>
          {/* circle side */}
          <div className="grid grid-cols-4 gap-1">
            {tempColors.map((color, index) => (
              <span
                key={index}
                className={`p-1 text-center text-white rounded-md`}
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-4 ">{MapColors}</div>
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
