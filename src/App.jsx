import { useState } from "react";
import ProductCard from "./components/ProductCard";
import { productList } from "./data/index";
import { styles } from "./interfaces/interface";
import ButtonComponent from "./ui/ButtonComponent";
import MyModal from "./ui/DailogModle";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="container mx-auto pt-2">
      <ButtonComponent color={styles.submit} text="Add" onClick={openModal}/>
      
      <div className={styles.responsiveScreen}>
        {productList.map((product, idx) => (
          <ProductCard
            key={idx}
            productname={product.title}
            description={product.description}
            price={product.price}
            productImage={product.imageURL}
          >
            <ButtonComponent
              color={styles.submit}
              text="Edit"
              onClick={openModal}
            />
            <ButtonComponent color={styles.delete} text="Destroy" />
          </ProductCard>
        ))}

        <MyModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          title="Edit Product"
        >
          <ButtonComponent
            color={styles.submit}
            text="submit"
            width="w-full"
            onClick={closeModal}
          />
          <ButtonComponent
            color={styles.delete}
            text="Delete"
            onClick={closeModal}
          />
        </MyModal>
      </div>
    </main>
  );
};

export default App;
