import React from "react";
import { star } from "../assets/icons";

const ProductsCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full cursor-pointer">
            <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
            <div className="flex mt-8 justify-start gap-2.5">
                <img src={star} alt="rating" width={24} height={24} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">
                    (4.5)
                </p>
            </div>
            <h3 className="mt-2 text-2xl font-palanquin font-semibold leading-normal">
                {name}
            </h3>
            <p className="font-montserrat font-semibold mt-2 text-coral-red text-2xl leading-normal">
                {price}
            </p>
        </div>
    );
};

export default ProductsCard;
