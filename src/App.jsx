import ProductCard from "./components/ProductCard";
import { productList } from "./data/index";
import { styles } from "./interfaces/interface";
import ButtonComponent from "./ui/ButtonComponent";
import MyModal from "./ui/DailogModle";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div className={`${styles.responsiveScreen} container mx-auto`}>
      {productList.map((product, id) => (
        <ProductCard
          key={id}
          description={product.description}
          price={product.price}
          productImage={product.imageURL}
          productname={product.title}
        >
          <ButtonComponent
            color={styles.submit}
            text="Edit"
            onClick={openModal}
          />
          <ButtonComponent
            color={styles.delete}
            text="Destroy"
          />
        </ProductCard>
      ))}

      <MyModal closeModal={closeModal} isOpen={isOpen}>
        <ButtonComponent
          color={styles.submit}
          text="submit"
          width="w-full"
          onClick={closeModal}
        />
      </MyModal>
    </div>
  );
};

export default App;
