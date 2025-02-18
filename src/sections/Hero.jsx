import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import Shoecard from "../components/Shoecard";

const Hero = () => {
    const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
    return (
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:sm:px-16 px-8 pt-28">
                <p className="text-xl font-montserrat text-coral-red">
                    Our Summer Collections
                </p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm-[72px] max-sm:leading-[82px]">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                        The New Arrivals
                    </span>
                    <br />
                    <span className="text-coral-red mt-3 inline-block">
                        Nike
                    </span>{" "}
                    Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Discover stylish Nike arrivals, quality comfort and
                    innovation for your active life.
                </p>
                <Button label={"Shop now"} icon={arrowRight} />
                <div className="flex justify-start items-center flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p className="text-4xl font-palanquin font-bold">
                                {stat.value}
                            </p>
                            <p className="font-montserrat leading-7 text-slate-gray">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img
                    src={bigShoeImage}
                    alt="Shoe"
                    width={610}
                    height={500}
                    className="object-contain relative z-10"
                />
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe, index) => (
                        <div key={index}>
                            <Shoecard
                                image={shoe}
                                changeBigShoeImage={(shoe) => {
                                    setBigShoeImage(shoe);
                                }}
                                bigShoeImage={bigShoeImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
