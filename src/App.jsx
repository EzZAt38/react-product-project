import { useState } from "react";
import ProductCard from "./components/ProductCard";
import { colors, productList, categories } from "./data/index";
import { styles } from "./interfaces/interface";
import ButtonComponent from "./ui/ButtonComponent";
import MyModal from "./ui/DailogModle";
import Input from "./ui/Input";
import { Validation } from "./Validation";
import ErorrMessage from "./components/ErorrMessage";
import CircleColor from "./components/CircleColor";
import Example from "./ui/SelectMenue";

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
  colors: "",
};

const App = () => {
  // State management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [addProduct, setAddProduct] = useState(productList);
  const [selected, setSelected] = useState(categories[0]);
  const [product, setProduct] = useState(initialProductState);
  const [tempColors, setTempColors] = useState([]);
  const [errors, setErrors] = useState(initialErrorState);
  const [editProduct, setEditProduct] = useState(initialProductState);
  console.log("Product List:", product);

  // Color selection UI
  const MapColors = colors.map((item) => (
    <CircleColor
      key={item}
      color={item}
      onClick={() => {
        setTempColors((prev) =>
          prev.includes(item)
            ? prev.filter((color) => color !== item)
            : [...prev, item]
        );
      }}
    />
  ));

  // Modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Reset form and close modal
  const onCancel = () => {
    setProduct(initialProductState);
    setErrors(initialErrorState);
    setTempColors([]);
    closeModal();
  };

  // Form submit handler for adding product
  const handlerSubmit = (e) => {
    e.preventDefault();
    const validationResult = Validation(product);
    setErrors(validationResult);

    // Check for errors
    const hasErrors = Object.values(validationResult).some((msg) => msg !== "");
    if (tempColors.length === 0) {
      setErrors((prev) => ({ ...prev, colors: "At least select one color" }));
      return;
    }
    if (!hasErrors) {
      setAddProduct((prev) => [
        { ...product, colors: tempColors, category: selected },
        ...prev,
      ]);
      onCancel();
    }
  };
  // Form submit handler for editing product
  const handlerEditSubmit = (e) => {
    e.preventDefault();
    const validationResult = Validation(product);
    setErrors(validationResult);

    // Check for errors
    const hasErrors = Object.values(validationResult).some((msg) => msg !== "");
    if (tempColors.length === 0) {
      setErrors((prev) => ({ ...prev, colors: "At least select one color" }));
      return;
    }
    if (!hasErrors) {
      setAddProduct((prev) => [
        { ...product, colors: tempColors, category: selected },
        ...prev,
      ]);
      onCancel();
    }
  };
  // Input change handler for adding product
  const handleInputChange = (field) => (e) => {
    setProduct({ ...product, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" });
  };
  // Input change handler for editing product
  const handleEditInputChange = (field) => (e) => {
    setEditProduct({ ...editProduct, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" });
  };
  return (
    <main className="container mx-auto pt-2">
      {/* Add Product Button */}
      <ButtonComponent color={styles.submit} text="Add" onClick={openModal} />

      {/* Product List */}
      <div className={styles.responsiveScreen}>
        {addProduct.map((prod, idx) => (
          <ProductCard
            key={idx}
            title={prod.title}
            description={prod.description}
            price={prod.price}
            imageURL={prod.imageURL}
            color={prod.colors}
            category={prod.category}
            setProduct={setEditProduct}
            isopen={() => setIsEdit(true)}
          >
            {/* You can add Edit/Destroy buttons here if needed */}
          </ProductCard>
        ))}
      </div>

      {/* Modal for Adding Product */}
      <MyModal isOpen={isModalOpen} closeModal={closeModal} title="Add Product">
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
          {/* Category Selector */}
          <Example selected={selected} setSelcted={setSelected} />
          {/* Color Selection */}
          <ErorrMessage message={errors.colors} />
          <div className="flex items-center space-x-4">{MapColors}</div>
          <div className="grid grid-cols-4 gap-1">
            {tempColors.map((color, index) => (
              <span
                key={index}
                className="p-1 text-center text-white rounded-md"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
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

      {/* Modal for Editing Product */}
      <MyModal
        isOpen={isEdit}
        closeModal={() => setIsEdit(false)}
        title="Edit Product"
      >
        <form
          className="mt-2 flex flex-col space-y-4"
          onSubmit={handlerEditSubmit}
        >
          {/* Product Name Input */}
          <div>
            <Input
              id="product-name"
              label="Product name:"
              placeholder="Write your product name here"
              value={editProduct.title}
              onChange={handleEditInputChange("title")}
            />
            <ErorrMessage message={""} />
          </div>
          <div>
            <Input
              id="product-description"
              label="Product description:"
              placeholder="Write your product description here"
              value={editProduct.description}
              onChange={handleEditInputChange("description")}
            />
            <ErorrMessage message={""} />
          </div>
          {/* Product Image URL Input */}
          {/* <div>
            <Input
              id="product-image"
              label="Product Image URL:"
              placeholder="Paste your product image URL here"
              value={product.imageURL}
              onChange={handleInputChange("imageURL")}
            />
            <ErorrMessage message={errors.imageURL} />
          </div> */}
          {/* Description Input */}
          {/* <div>
            <Input
              id="description"
              label="Description:"
              placeholder="Write your description here"
              value={product.description}
              onChange={handleInputChange("description")}
            />
            <ErorrMessage message={errors.description} />
          </div> */}
          {/* Price Input */}
          {/* <div>
            <Input
              id="price"
              label="Price:"
              placeholder="Write your price here"
              value={product.price}
              onChange={handleInputChange("price")}
            />
            <ErorrMessage message={errors.price} />
          </div> */}
          {/* Category Selector */}
          {/* <Example selected={selected} setSelcted={setSelected} /> */}
          {/* Color Selection */}
          {/* <ErorrMessage message={errors.colors} /> */}
          {/* <div className="flex items-center space-x-4 ">{MapColors}</div> */}
          {/* <div className="grid grid-cols-4 gap-1"> */}
          {tempColors.map((color, index) => (
            <span
              key={index}
              className="p-1 text-center text-white rounded-md"
              style={{ backgroundColor: color }}
            >
              {color}
            </span>
          ))}
          {/* </div> */}
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
              onClick={() => {
                setIsEdit(false);
                setProduct(initialProductState);
                setErrors(initialErrorState);
                setTempColors([]);
              }}
            />
          </div>
        </form>
      </MyModal>
    </main>
  );
};

export default App;
