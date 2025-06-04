import React from "react";
import ButtonComponent from "../ui/ButtonComponent";
import { Icard, styles } from "../interfaces/interface";
import Image from "./Image";
const ProductCard = ({
  productImage,
  description,
  price,
  productname,
  children,
}: Icard) => {
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
          <p className="p-1">{description}</p>
          <div className="colorSide">
            <ul className={styles.ballsParent}>
              <li className={`bg-red-600 ${styles.majorBallStyle}`}></li>
              <li className={`bg-indigo-600 ${styles.majorBallStyle}`}></li>
              <li className={` bg-blue-400 ${styles.majorBallStyle}`}></li>
            </ul>
          </div>
        </div>
      </div>
      {/* this is the footer side */}
      {/* price and category side */}
      <div className={styles.categoryAndPrice}>
        <p className="text-indigo-600 font-bold">${price}</p>
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
