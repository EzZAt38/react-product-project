import ProductCard from "./components/ProductCard";
import { productList } from "./data/index";
import { styles } from "./interfaces/interface";
import ButtonComponent from "./ui/ButtonComponent";
const App = () => {
  const productItem = productList.map((e, id) => {
    return (
      <ProductCard
        description={e.description}
        price={e.price}
        productImage={e.imageURL}
        productname={e.title}
        key={id}
      >
        <ButtonComponent
          color={styles.submit}
          text="Edit"
        />
        <ButtonComponent color={styles.delete} text="Destroy"  />
      </ProductCard>
    );
  });
  return <div className={styles.responsiveScreen}>{productItem}</div>;
};

export default App;
