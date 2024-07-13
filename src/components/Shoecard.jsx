import React from "react";

const Shoecard = ({ image, changeBigShoeImage, bigShoeImage }) => {
    const handleClick = () => {
        if (bigShoeImage !== image.bigShoe) {
            changeBigShoeImage(image.bigShoe);
        }
    };
    return (
        <div
            className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 
      ${
          bigShoeImage === image.bigShoe
              ? "border-coral-red"
              : "border-transparent"
      }
  `}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:h-40 sm:w-40 max-sm:p-4">
                <img
                    src={image.thumbnail}
                    alt="shoe"
                    width={127}
                    height={103}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default Shoecard;
