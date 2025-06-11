import React, { useState } from "react";
import ButtonComponent from "../ui/ButtonComponent";
import { Icard, styles, textLenther } from "../interfaces/interface";
import Image from "./Image";
import CircleColor from "./CircleColor";
const ProductCard = ({
  productImage,
  description,
  price,
  productname,
  children,
}: Icard) => {
  const [textState, setTextState] = useState(true);
  return (
    <div className={styles.icardparents}>
      {/* the header side */}
      <div className={styles.icardHeader}>
        <div className="imageSide">
          <Image
            imageURL={productImage}
            alt="product image"
            className="rounded-md"
          />
        </div>
        <h1 className="text-lg p-0.7">{productname}</h1>
      </div>
      {/* the header side */}
      <div className="body">
        <div className="descriptionSide max-w-[80%]">
          <p className="p-1" onClick={() => setTextState(!textState)}>
            {textState == true
              ? textLenther(description)
              : textLenther(description, description.length)}
          </p>
          <div className="colorSide">
            <CircleColor color={["#A31ACB", "#FF6E31", "#3C2A21"]} />
          </div>
        </div>
      </div>
      {/* this is the footer side */}
      {/* price and category side */}
      <div className={styles.categoryAndPrice}>
        <p className="text-[#A31ACB]  font-bold">${price}</p>
        <Image
          imageURL={productImage}
          alt="product image"
          className="rounded-full w-10 h-10"
        />
      </div>
      {/* price and category side */}
      {/* this is the footer side */}
      <div className="footer flex  space-x-2 p-1">{children}</div>
    </div>
  );
};

export default ProductCard;
