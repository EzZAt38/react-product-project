import ProductCard from "./components/ProductCard";
import { productList } from "../../product materals/src/data/index";
import { styles } from "./interfaces/interface";
import ButtonComponent from "./ui/ButtonComponent";
const App = () => {
  const productItem = productList.map((e, id) => {
    let text = "";
    if (e.description.length == 150) {
      text = e.description;
    } else {
      text = `${e.description.slice(0, 150)}`;
    }
    return (
      <ProductCard
        description={text}
        price={e.price}
        productImage={e.imageURL}
        productname={e.title}
        key={id}
      >
        <ButtonComponent color={styles.submit} text="Edit" />
        <ButtonComponent color={styles.delete} text="Destroy" />
      </ProductCard>
    );
  });
  return <div className={styles.responsiveScreen}>{productItem}</div>;
};

export default App;
