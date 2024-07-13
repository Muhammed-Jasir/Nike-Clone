import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-4xl font-bold text-center">
                What Our
                <span className="text-coral-red"> Customer </span>
                Say?
            </h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center">
                Hear genuine stories from our satisfied customers about therir
                exceptional experiences with us.
            </p>
            <div className="mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;
