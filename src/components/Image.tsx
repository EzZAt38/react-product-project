import React from "react";
interface Iprops {
  imageURL: string;
  alt: string;
  className?: string;
}
const Image = ({ imageURL, alt, className }: Iprops) => {
  return (
    <div>
      {/* good job 🧡🧡❤❤ */}

      <img src={imageURL} alt={alt} className={className} />
    </div>
  );
};

export default Image;
