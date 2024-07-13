import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
    return (
        <section className="flex max-sm:flex-col max-container justify-center flex-wrap gap-9">
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </section>
    );
};

export default Services;
