import{ useState } from "react";
import ButtonComponent from "../ui/ButtonComponent";
import { Icard, styles, textLenther } from "../interfaces/interface";
import Image from "./Image";
import CircleColor from "./CircleColor";
interface Iprops extends Icard {
  setProduct: (value: Icard) => void; // Optional edit function
  isopen: () => void;
  index: number; // Index of the product in the list
  setisIndex: (value: number) => void; // Optional function to set the index of the product
  setisColor: (value: string[]) => void; // Optional function to set the color
  onDestroy: () => void; // Optional destroy function
}
const ProductCard = ({
  imageURL,
  description,
  price,
  title,
  color = [],
  category,
  setProduct,
  isopen,
  index,
  setisIndex, // Default to a no-op function if not provided
  setisColor = () => {}, // Default to a no-op function if not provided
  onDestroy = () => {}, // Default to a no-op function if not provided
}: Iprops) => {
  const product = { imageURL, description, price, title, color, category };
  const onEdit = () => {
    isopen();
    setProduct(product);
    setisIndex(index);
    setisColor(color);
  };
  const onDestroyHandler = () => {
    setProduct(product);
    onDestroy();
  };
  const [textState, setTextState] = useState(true);
  return (
    <div className={styles.icardparents}>
      {/* the header side */}
      <div className={styles.icardHeader}>
        <div className="imageSide">
          <Image
            imageURL={imageURL}
            alt="product image"
            className="rounded-md"
          />
        </div>
        <h1 className="text-lg p-0.7">{title}</h1>
      </div>
      {/* the header side */}
      <div className="body">
        <div className="descriptionSide max-w-[80%]">
          <p className="p-1" onClick={() => setTextState(!textState)}>
            {textState == true
              ? textLenther(description)
              : textLenther(description, description.length)}
          </p>
          <div className="colorSide flex items-center space-x-1">
            {color.map((colorItem, index) => (
              <CircleColor color={colorItem} key={index} />
            ))}
          </div>
        </div>
      </div>
      {/* this is the footer side */}
      {/* price and category side */}
      <div className={styles.categoryAndPrice}>
        <p className="text-indigo-600  font-bold">${price}</p>
        <div className="flex items-center space-x-2 px-2">
          <p className="font-semibold">{category?.name}</p>
          <Image
            imageURL={category?.imageURL || ""}
            alt="product image"
            className="rounded-full w-10 h-10"
          />
        </div>
      </div>
      {/* price and category side */}
      {/* this is the footer side */}
      <div className="footer flex  space-x-2 p-1">
        <ButtonComponent color={styles.submit} text="Edit" onClick={onEdit} />
        <ButtonComponent
          color={styles.delete}
          text="Destroy"
          onClick={onDestroyHandler}
        />
      </div>
    </div>
  );
};

export default ProductCard;
