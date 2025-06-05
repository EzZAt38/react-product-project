import ProductCard from "./components/ProductCard";
import { productList } from "./data/index";
import { styles } from "./interfaces/interface";
import ButtonComponent from "./ui/ButtonComponent";

const App = () => (
  <div className={`${styles.responsiveScreen} container mx-auto`}>
    {productList.map(({ description, price, imageURL, title }, id) => (
      <ProductCard
        key={id}
        description={description}
        price={price}
        productImage={imageURL}
        productname={title}
      >
        <ButtonComponent color={styles.submit} text="Edit" />
        <ButtonComponent color={styles.delete} text="Destroy" />
      </ProductCard>
    ))}
  </div>
);

export default App;
